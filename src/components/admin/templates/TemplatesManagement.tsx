
import { useState } from "react";
import { Plus, Save, Trash2 } from "lucide-react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface Template {
  id: string;
  name: string;
  route: string;
  content: any;
  created_at: string | null;
  updated_at: string | null;
}

const TemplatesManagement = () => {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null);
  const [newTemplate, setNewTemplate] = useState({
    name: "",
    route: "",
    content: "{}",
  });

  // Fetch templates
  const { data: templates, isLoading } = useQuery({
    queryKey: ["templates"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("page_templates")
        .select("*")
        .order("name");

      if (error) throw error;
      return data as Template[];
    },
  });

  // Create template mutation
  const createMutation = useMutation({
    mutationFn: async (template: typeof newTemplate) => {
      const { data, error } = await supabase
        .from("page_templates")
        .insert([template])
        .select()
        .single();

      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["templates"] });
      toast({
        title: "Success",
        description: "Template created successfully",
      });
      setNewTemplate({ name: "", route: "", content: "{}" });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to create template: " + error.message,
        variant: "destructive",
      });
    },
  });

  // Update template mutation
  const updateMutation = useMutation({
    mutationFn: async (template: Template) => {
      const { data, error } = await supabase
        .from("page_templates")
        .update(template)
        .eq("id", template.id)
        .select()
        .single();

      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["templates"] });
      toast({
        title: "Success",
        description: "Template updated successfully",
      });
      setSelectedTemplate(null);
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to update template: " + error.message,
        variant: "destructive",
      });
    },
  });

  // Delete template mutation
  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase
        .from("page_templates")
        .delete()
        .eq("id", id);

      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["templates"] });
      toast({
        title: "Success",
        description: "Template deleted successfully",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to delete template: " + error.message,
        variant: "destructive",
      });
    },
  });

  const handleCreateTemplate = () => {
    try {
      // Validate JSON content
      JSON.parse(newTemplate.content);
      createMutation.mutate(newTemplate);
    } catch (error) {
      toast({
        title: "Invalid JSON",
        description: "Please ensure the content is valid JSON",
        variant: "destructive",
      });
    }
  };

  const handleUpdateTemplate = (template: Template) => {
    try {
      // Validate JSON content if it's a string
      if (typeof template.content === "string") {
        template.content = JSON.parse(template.content);
      }
      updateMutation.mutate(template);
    } catch (error) {
      toast({
        title: "Invalid JSON",
        description: "Please ensure the content is valid JSON",
        variant: "destructive",
      });
    }
  };

  if (isLoading) {
    return <div>Loading templates...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Page Templates</h2>
        <Sheet>
          <SheetTrigger asChild>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              New Template
            </Button>
          </SheetTrigger>
          <SheetContent className="w-[400px] sm:w-[540px]">
            <SheetHeader>
              <SheetTitle>Create New Template</SheetTitle>
            </SheetHeader>
            <div className="space-y-4 mt-4">
              <div>
                <label className="text-sm font-medium">Name</label>
                <Input
                  value={newTemplate.name}
                  onChange={(e) =>
                    setNewTemplate({ ...newTemplate, name: e.target.value })
                  }
                  placeholder="Template name"
                />
              </div>
              <div>
                <label className="text-sm font-medium">Route</label>
                <Input
                  value={newTemplate.route}
                  onChange={(e) =>
                    setNewTemplate({ ...newTemplate, route: e.target.value })
                  }
                  placeholder="/route"
                />
              </div>
              <div>
                <label className="text-sm font-medium">Content (JSON)</label>
                <Textarea
                  value={newTemplate.content}
                  onChange={(e) =>
                    setNewTemplate({ ...newTemplate, content: e.target.value })
                  }
                  placeholder='{"components": []}'
                  rows={10}
                />
              </div>
              <Button
                onClick={handleCreateTemplate}
                disabled={createMutation.isPending}
              >
                {createMutation.isPending ? "Creating..." : "Create Template"}
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {templates?.map((template) => (
          <Card key={template.id}>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>{template.name}</span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => deleteMutation.mutate(template.id)}
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium">Route</label>
                  <Input
                    value={template.route}
                    onChange={(e) =>
                      setSelectedTemplate({
                        ...template,
                        route: e.target.value,
                      })
                    }
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Content</label>
                  <Textarea
                    value={
                      typeof template.content === "string"
                        ? template.content
                        : JSON.stringify(template.content, null, 2)
                    }
                    onChange={(e) =>
                      setSelectedTemplate({
                        ...template,
                        content: e.target.value,
                      })
                    }
                    rows={6}
                  />
                </div>
                <Button
                  className="w-full"
                  onClick={() => handleUpdateTemplate(template)}
                  disabled={updateMutation.isPending}
                >
                  <Save className="w-4 h-4 mr-2" />
                  Save Changes
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TemplatesManagement;
