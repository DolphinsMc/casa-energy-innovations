import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Facebook, PenSquare, Share2, Sparkles, BarChart3, Clock, Users, MessageCircle, Bot, Palette } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { Slider } from "@/components/ui/slider";

const DashboardPage = () => {
  const [blogTopics, setBlogTopics] = useState<string>("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [chatbotName, setChatbotName] = useState("CASA Assistant");
  const [chatbotEnabled, setChatbotEnabled] = useState(true);
  const { toast } = useToast();

  // Theme state
  const [primaryColor, setPrimaryColor] = useState("#9b87f5");
  const [secondaryColor, setSecondaryColor] = useState("#7E69AB");
  const [accentColor, setAccentColor] = useState("#D6BCFA");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [glassEffect, setGlassEffect] = useState(true);
  const [borderRadius, setBorderRadius] = useState([8]);
  const [animationSpeed, setAnimationSpeed] = useState([1]);

  const handleGeneratePosts = async () => {
    if (!blogTopics.trim()) {
      toast({
        title: "Error",
        description: "Please enter some topics or keywords",
        variant: "destructive",
      });
      return;
    }

    setIsGenerating(true);
    try {
      console.log("Generating posts for topics:", blogTopics);
      const response = await fetch("/api/generate-posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ topics: blogTopics }),
      });

      if (!response.ok) {
        throw new Error("Failed to generate posts");
      }

      const data = await response.json();
      console.log("Generated posts:", data);
      
      toast({
        title: "Success",
        description: "Blog posts generated successfully!",
      });
    } catch (error) {
      console.error("Error generating posts:", error);
      toast({
        title: "Error",
        description: "Failed to generate blog posts. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsGenerating(false);
    }
  };

  const handleShareToFacebook = () => {
    console.log("Sharing to Facebook");
    toast({
      title: "Coming Soon",
      description: "Facebook sharing integration will be available soon!",
    });
  };

  const applyTheme = () => {
    const root = document.documentElement;
    root.style.setProperty('--primary', primaryColor);
    root.style.setProperty('--secondary', secondaryColor);
    root.style.setProperty('--accent', accentColor);
    root.style.setProperty('--radius', `${borderRadius}px`);
    root.style.setProperty('--animation-speed', `${animationSpeed}s`);
    
    document.body.classList.toggle('dark', isDarkMode);
    document.body.classList.toggle('glass-effect', glassEffect);

    toast({
      title: "Theme Updated",
      description: "Your theme settings have been applied successfully!",
    });
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
          <p className="text-muted-foreground">Manage your content, chatbot settings, and theme in one place</p>
        </div>

        <Tabs defaultValue="content" className="space-y-4">
          <TabsList className="grid w-full grid-cols-4 lg:w-[400px]">
            <TabsTrigger value="content">Content</TabsTrigger>
            <TabsTrigger value="chatbot">Chatbot</TabsTrigger>
            <TabsTrigger value="theme">Theme</TabsTrigger>
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

          <TabsContent value="theme" className="space-y-4">
            <Card className="bg-background/60 backdrop-blur-lg border-primary/10">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Palette className="w-5 h-5" />
                  Theme Settings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label>Primary Color</Label>
                      <div className="flex gap-2">
                        <Input
                          type="color"
                          value={primaryColor}
                          onChange={(e) => setPrimaryColor(e.target.value)}
                          className="w-full h-10"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>Secondary Color</Label>
                      <div className="flex gap-2">
                        <Input
                          type="color"
                          value={secondaryColor}
                          onChange={(e) => setSecondaryColor(e.target.value)}
                          className="w-full h-10"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>Accent Color</Label>
                      <div className="flex gap-2">
                        <Input
                          type="color"
                          value={accentColor}
                          onChange={(e) => setAccentColor(e.target.value)}
                          className="w-full h-10"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Dark Mode</Label>
                        <p className="text-sm text-muted-foreground">
                          Enable dark color scheme
                        </p>
                      </div>
                      <Switch
                        checked={isDarkMode}
                        onCheckedChange={setIsDarkMode}
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Glass Effect</Label>
                        <p className="text-sm text-muted-foreground">
                          Enable glassmorphism on cards
                        </p>
                      </div>
                      <Switch
                        checked={glassEffect}
                        onCheckedChange={setGlassEffect}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label>Border Radius (px)</Label>
                      <Slider
                        value={borderRadius}
                        onValueChange={setBorderRadius}
                        max={20}
                        step={1}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label>Animation Speed (seconds)</Label>
                      <Slider
                        value={animationSpeed}
                        onValueChange={setAnimationSpeed}
                        min={0.1}
                        max={2}
                        step={0.1}
                      />
                    </div>
                  </div>
                </div>

                <Button onClick={applyTheme} className="w-full">
                  Apply Theme Settings
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-background/60 backdrop-blur-lg border-primary/10">
              <CardHeader>
                <CardTitle>Theme Presets</CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { name: "Classic", colors: ["#9b87f5", "#7E69AB", "#D6BCFA"] },
                  { name: "Ocean", colors: ["#0EA5E9", "#0284C7", "#BAE6FD"] },
                  { name: "Forest", colors: ["#059669", "#047857", "#A7F3D0"] },
                  { name: "Sunset", colors: ["#F97316", "#EA580C", "#FED7AA"] }
                ].map((preset) => (
                  <Button
                    key={preset.name}
                    variant="outline"
                    className="h-20 relative overflow-hidden"
                    onClick={() => {
                      setPrimaryColor(preset.colors[0]);
                      setSecondaryColor(preset.colors[1]);
                      setAccentColor(preset.colors[2]);
                    }}
                  >
                    <div className="absolute inset-0 flex flex-col">
                      {preset.colors.map((color) => (
                        <div
                          key={color}
                          className="flex-1"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                    <span className="relative z-10 font-medium text-foreground mix-blend-difference">
                      {preset.name}
                    </span>
                  </Button>
                ))}
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
