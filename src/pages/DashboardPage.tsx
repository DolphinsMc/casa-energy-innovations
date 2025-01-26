import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Header } from "@/components/Header";
import { Pencil, Trash2, Plus, List } from "lucide-react";
import { BlogPostEditor } from "@/components/BlogPostEditor";

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
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  
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

  const handleDeletePost = (id: string) => {
    setBlogPosts(posts => posts.filter(post => post.id !== id));
    toast({
      title: "Post Deleted",
      description: "The blog post has been deleted successfully."
    });
  };

  const handleEditPost = (post: BlogPost) => {
    setSelectedPost(post);
    setIsEditing(true);
  };

  const handleCreatePost = () => {
    setSelectedPost(null);
    setIsEditing(true);
  };

  const handleSavePost = (post: Omit<BlogPost, 'id' | 'date'>) => {
    if (selectedPost) {
      // Edit existing post
      setBlogPosts(posts =>
        posts.map(p =>
          p.id === selectedPost.id
            ? { ...p, ...post }
            : p
        )
      );
      toast({
        title: "Post Updated",
        description: "The blog post has been updated successfully."
      });
    } else {
      // Create new post
      const newPost = {
        ...post,
        id: Date.now().toString(),
        date: new Date().toISOString().split('T')[0]
      };
      setBlogPosts(posts => [...posts, newPost]);
      toast({
        title: "Post Created",
        description: "The blog post has been created successfully."
      });
    }
    setIsEditing(false);
    setSelectedPost(null);
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
                <div className="flex items-center gap-2">
                  <List className="w-5 h-5" />
                  <h2 className="text-2xl font-semibold text-primary">Blog Posts</h2>
                </div>
                <Button onClick={handleCreatePost} className="bg-primary hover:bg-primary/90">
                  <Plus className="w-4 h-4 mr-2" />
                  New Post
                </Button>
              </div>

              {isEditing ? (
                <BlogPostEditor
                  post={selectedPost}
                  onSave={handleSavePost}
                  onCancel={() => {
                    setIsEditing(false);
                    setSelectedPost(null);
                  }}
                />
              ) : (
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
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleEditPost(post)}
                        >
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
              )}
            </Card>
          </TabsContent>

          <TabsContent value="appearance">
            <Card className="p-6">
              <div className="space-y-6">
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