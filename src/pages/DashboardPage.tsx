import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Facebook, PenSquare, Share2, Sparkles, BarChart3, Clock, Users, MessageCircle, Bot } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

const DashboardPage = () => {
  const [blogTopics, setBlogTopics] = useState<string>("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [chatbotName, setChatbotName] = useState("CASA Assistant");
  const [chatbotEnabled, setChatbotEnabled] = useState(true);

  const handleGeneratePosts = async () => {
    setIsGenerating(true);
    try {
      // TODO: Implement Deepseek API integration for content generation
      console.log("Generating posts using Deepseek API for topics:", blogTopics);
      setTimeout(() => setIsGenerating(false), 2000);
    } catch (error) {
      console.error("Error generating posts:", error);
      setIsGenerating(false);
    }
  };

  const handleShareToFacebook = () => {
    console.log("Sharing to Facebook");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/80">
      <Header />
      <div className="container mx-auto px-4 py-24">
        <div className="mb-8">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-primary mb-2"
          >
            Content Dashboard
          </motion.h1>
          <p className="text-muted-foreground">Manage your content and chatbot settings in one place</p>
        </div>

        <Tabs defaultValue="content" className="space-y-4">
          <TabsList className="grid w-full grid-cols-3 lg:w-[400px]">
            <TabsTrigger value="content">Content</TabsTrigger>
            <TabsTrigger value="chatbot">Chatbot</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="content" className="space-y-4">
            <Card className="bg-background/60 backdrop-blur-lg border-primary/10">
              <CardHeader>
                <CardTitle>AI Content Generator</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Topics or Keywords</Label>
                  <Input
                    placeholder="Enter topics separated by commas (e.g., heat pumps, energy efficiency, solar power)"
                    value={blogTopics}
                    onChange={(e) => setBlogTopics(e.target.value)}
                  />
                </div>
                <div className="flex gap-4">
                  <Button
                    onClick={handleGeneratePosts}
                    disabled={isGenerating}
                    className="w-full md:w-auto"
                  >
                    <Sparkles className="w-4 h-4 mr-2" />
                    {isGenerating ? "Generating..." : "Generate Content"}
                  </Button>
                  <Button
                    variant="outline"
                    onClick={handleShareToFacebook}
                    className="w-full md:w-auto"
                  >
                    <Facebook className="w-4 h-4 mr-2" />
                    Share to Facebook
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="chatbot" className="space-y-4">
            <Card className="bg-background/60 backdrop-blur-lg border-primary/10">
              <CardHeader>
                <CardTitle>Chatbot Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Enable Chatbot</Label>
                    <p className="text-sm text-muted-foreground">
                      Show or hide the chatbot across all pages
                    </p>
                  </div>
                  <Switch
                    checked={chatbotEnabled}
                    onCheckedChange={setChatbotEnabled}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Chatbot Name</Label>
                  <Input
                    value={chatbotName}
                    onChange={(e) => setChatbotName(e.target.value)}
                    placeholder="Enter chatbot name"
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics">
            <Card className="bg-background/60 backdrop-blur-lg border-primary/10">
              <CardHeader>
                <CardTitle>Performance Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[200px] flex items-center justify-center border-2 border-dashed rounded-lg">
                  <div className="text-center">
                    <BarChart3 className="w-10 h-10 mx-auto text-muted-foreground" />
                    <p className="text-muted-foreground mt-2">Analytics visualization coming soon</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
      <Footer />
    </div>
  );
};

export default DashboardPage;