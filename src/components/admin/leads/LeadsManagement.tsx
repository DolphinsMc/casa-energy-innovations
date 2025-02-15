
import { useState, useEffect } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Edit, Trash2, Phone, Mail } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Loader2 } from "lucide-react";

interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  service_type: string; // Changed from service_interest to match database
  status: string;
  qualification_score: number;
  created_at: string;
  message?: string;
  updated_at?: string;
}

const LeadsManagement = () => {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    fetchLeads();
  }, []);

  const fetchLeads = async () => {
    try {
      const { data, error } = await supabase
        .from("leads")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;

      setLeads(data || []);
    } catch (error) {
      console.error("Error fetching leads:", error);
      toast({
        title: "Error",
        description: "Failed to fetch leads. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "new":
        return "bg-blue-500";
      case "qualified":
        return "bg-green-500";
      case "contacted":
        return "bg-yellow-500";
      case "converted":
        return "bg-purple-500";
      case "lost":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 className="w-8 h-8 animate-spin" />
      </div>
    );
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Lead Management</CardTitle>
          <Button>Add New Lead</Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Contact</TableHead>
                <TableHead>Service</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Score</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {leads.map((lead) => (
                <TableRow key={lead.id}>
                  <TableCell className="font-medium">{lead.name}</TableCell>
                  <TableCell>
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4" />
                        <span className="text-sm">{lead.email}</span>
                      </div>
                      {lead.phone && (
                        <div className="flex items-center gap-2">
                          <Phone className="w-4 h-4" />
                          <span className="text-sm">{lead.phone}</span>
                        </div>
                      )}
                    </div>
                  </TableCell>
                  <TableCell>{lead.service_type}</TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(lead.status)}>
                      {lead.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{lead.qualification_score}</TableCell>
                  <TableCell>{formatDate(lead.created_at)}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="icon">
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};

export default LeadsManagement;
