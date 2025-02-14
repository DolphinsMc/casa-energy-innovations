
import { lazy, useState } from "react";
import AdminLayout from "@/components/layouts/AdminLayout";
import {
  LayoutDashboard,
  Settings,
  FileText,
  Bell,
  Search,
  MessageSquare,
  BarChart3,
  Home,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";

const BlogPostsList = lazy(() => import("@/components/BlogPostsList"));
const BlogPostEditor = lazy(() => import("@/components/BlogPostEditor"));

interface BlogPost {
  id: string;
  title: string;
  content: string;
  status: string;
  created_at: string;
  updated_at: string | null;
  published_at: string | null;
  slug: string;
  meta_description: string | null;
  featured_image: string | null;
  tags: string[] | null;
}

const DashboardPage = () => {
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [deletePostId, setDeletePostId] = useState<string | null>(null);
  const { toast } = useToast();

  const handleNewPost = () => {
    setSelectedPost(null);
    setIsEditorOpen(true);
  };

  const handleEditPost = (post: BlogPost) => {
    setSelectedPost(post);
    setIsEditorOpen(true);
  };

  const handleDeletePost = async (confirmed: boolean) => {
    if (confirmed && deletePostId) {
      try {
        const { error } = await supabase
          .from('blog_posts')
          .delete()
          .eq('id', deletePostId);

        if (error) throw error;

        toast({
          title: "Post deleted",
          description: "The blog post has been successfully deleted.",
        });
      } catch (error) {
        console.error('Error deleting post:', error);
        toast({
          title: "Error",
          description: "Failed to delete the blog post. Please try again.",
          variant: "destructive",
        });
      }
    }
    setDeletePostId(null);
  };

  const handleSavePost = async (post: Omit<BlogPost, 'id' | 'created_at' | 'updated_at' | 'published_at' | 'meta_description' | 'featured_image' | 'tags'>) => {
    try {
      if (selectedPost) {
        // Update existing post
        const { error } = await supabase
          .from('blog_posts')
          .update({
            title: post.title,
            content: post.content,
            status: post.status,
            updated_at: new Date().toISOString(),
          })
          .eq('id', selectedPost.id);

        if (error) throw error;

        toast({
          title: "Post updated",
          description: "The blog post has been successfully updated.",
        });
      } else {
        // Create new post
        const { error } = await supabase
          .from('blog_posts')
          .insert([
            {
              title: post.title,
              content: post.content,
              status: post.status,
              slug: post.title.toLowerCase().replace(/ /g, '-'),
            },
          ]);

        if (error) throw error;

        toast({
          title: "Post created",
          description: "The blog post has been successfully created.",
        });
      }

      setIsEditorOpen(false);
    } catch (error) {
      console.error('Error saving post:', error);
      toast({
        title: "Error",
        description: "Failed to save the blog post. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <AdminLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <LayoutDashboard className="w-8 h-8 text-primary" />
            <h1 className="text-3xl font-bold">Content Dashboard</h1>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input 
                type="search" 
                placeholder="Search..." 
                className="pl-10 w-64"
              />
            </div>
            <Button variant="outline" size="icon">
              <Bell className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="icon">
              <Settings className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <aside className="col-span-1 space-y-2 bg-white p-4 rounded-lg shadow-sm">
            <Button variant="ghost" className="w-full justify-start">
              <Home className="mr-2 w-4 h-4" />
              Overview
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <MessageSquare className="mr-2 w-4 h-4" />
              Chatbot
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <FileText className="mr-2 w-4 h-4" />
              Blog Posts
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <BarChart3 className="mr-2 w-4 h-4" />
              Analytics
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Settings className="mr-2 w-4 h-4" />
              Settings
            </Button>
          </aside>

          <main className="col-span-1 md:col-span-3 space-y-6">
            <Tabs defaultValue="content" className="w-full">
              <TabsList className="w-full bg-white">
                <TabsTrigger value="content" className="flex-1">
                  <FileText className="w-4 h-4 mr-2" />
                  Content
                </TabsTrigger>
                <TabsTrigger value="chatbot" className="flex-1">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Chatbot
                </TabsTrigger>
                <TabsTrigger value="analytics" className="flex-1">
                  <BarChart3 className="w-4 h-4 mr-2" />
                  Analytics
                </TabsTrigger>
              </TabsList>

              <TabsContent value="content">
                <div className="p-6 bg-white rounded-lg shadow-sm">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold">Blog Posts</h2>
                    <Button onClick={handleNewPost}>
                      <FileText className="w-4 h-4 mr-2" />
                      New Post
                    </Button>
                  </div>
                  
                  <BlogPostsList 
                    onEdit={handleEditPost}
                    onDelete={(id) => setDeletePostId(id)}
                    onPreview={(slug) => window.open(`/blog/${slug}`, '_blank')}
                  />
                </div>
              </TabsContent>

              <TabsContent value="chatbot">
                <div className="p-6 bg-white rounded-lg shadow-sm space-y-6">
                  <h2 className="text-2xl font-bold mb-4">Chatbot Settings</h2>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold">Enable Chatbot</h3>
                      <p className="text-sm text-muted-foreground">Show or hide the chatbot across all pages</p>
                    </div>
                    <Switch />
                  </div>

                  <div className="space-y-2">
                    <label className="font-semibold">Chatbot Name</label>
                    <Input placeholder="CASA Assistant" />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="analytics">
                <div className="p-6 bg-white rounded-lg shadow-sm">
                  <h2 className="text-2xl font-bold mb-4">Analytics</h2>
                  <div className="text-muted-foreground text-center py-8">
                    Analytics dashboard coming soon
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </main>
        </div>
      </div>
    </AdminLayout>
  );
};

export default DashboardPage;
