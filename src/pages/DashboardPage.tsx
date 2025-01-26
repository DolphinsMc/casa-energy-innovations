import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Header } from "@/components/Header";
import { Pencil, Trash2, Plus } from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  content: string;
  status: "draft" | "published";
  date: string;
}

const DashboardPage = () => {
  const { toast } = useToast();
  const [darkMode, setDarkMode] = useState(false);
  const [glassEffect, setGlassEffect] = useState(false);
  
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([
    {
      id: "1",
      title: "The Future of Renewable Energy",
      content: "Lorem ipsum...",
      status: "published",
      date: "2024-03-15"
    },
    {
      id: "2",
      title: "Heat Pump Installation Guide",
      content: "Lorem ipsum...",
      status: "draft",
      date: "2024-03-14"
    }
  ]);

  const colorPresets = {
    default: {
      primary: "#28395D",
      secondary: "#33C3F0",
      accent: "#F97316",
      background: "#FFFFFF"
    },
    dark: {
      primary: "#1A1F2C",
      secondary: "#33C3F0",
      accent: "#F97316",
      background: "#0F1218"
    },
    modern: {
      primary: "#2B4C7E",
      secondary: "#567EBB",
      accent: "#606D80",
      background: "#F0F4F8"
    }
  };

  const handleColorPresetChange = (preset: keyof typeof colorPresets) => {
    // Apply color preset
    const colors = colorPresets[preset];
    document.documentElement.style.setProperty('--primary', colors.primary);
    document.documentElement.style.setProperty('--secondary', colors.secondary);
    document.documentElement.style.setProperty('--accent', colors.accent);
    document.documentElement.style.setProperty('--background', colors.background);
    
    toast({
      title: "Theme Applied",
      description: `${preset} theme has been applied successfully.`
    });
  };

  const handleDeletePost = (id: string) => {
    setBlogPosts(posts => posts.filter(post => post.id !== id));
    toast({
      title: "Post Deleted",
      description: "The blog post has been deleted successfully."
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/80">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-primary">Dashboard</h1>
        
        <Tabs defaultValue="blog" className="space-y-4">
          <TabsList>
            <TabsTrigger value="blog">Blog Management</TabsTrigger>
            <TabsTrigger value="appearance">Appearance</TabsTrigger>
          </TabsList>

          <TabsContent value="blog">
            <Card className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold text-primary">Blog Posts</h2>
                <Button className="bg-primary hover:bg-primary/90">
                  <Plus className="w-4 h-4 mr-2" />
                  New Post
                </Button>
              </div>

              <div className="space-y-4">
                {blogPosts.map((post) => (
                  <div
                    key={post.id}
                    className="flex items-center justify-between p-4 rounded-lg border"
                  >
                    <div>
                      <h3 className="font-medium text-primary">{post.title}</h3>
                      <div className="flex gap-4 text-sm text-muted-foreground">
                        <span>{post.date}</span>
                        <span className={`capitalize ${
                          post.status === 'published' ? 'text-green-500' : 'text-yellow-500'
                        }`}>
                          {post.status}
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="icon">
                        <Pencil className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleDeletePost(post.id)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="appearance">
            <Card className="p-6">
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-semibold text-primary mb-4">Color Presets</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {Object.entries(colorPresets).map(([name]) => (
                      <Button
                        key={name}
                        onClick={() => handleColorPresetChange(name as keyof typeof colorPresets)}
                        className="capitalize"
                      >
                        {name}
                      </Button>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-primary">Effects</h2>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="dark-mode">Dark Mode</Label>
                    <Switch
                      id="dark-mode"
                      checked={darkMode}
                      onCheckedChange={setDarkMode}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="glass-effect">Glass Effect</Label>
                    <Switch
                      id="glass-effect"
                      checked={glassEffect}
                      onCheckedChange={setGlassEffect}
                    />
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default DashboardPage;