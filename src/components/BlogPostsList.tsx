
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { FileText, Pencil, Trash2, Eye } from "lucide-react";
import { format } from "date-fns";
import { Badge } from "@/components/ui/badge";

interface BlogPost {
  id: string;
  title: string;
  content: string;
  status: "draft" | "published";
  created_at: string;
  slug: string;
}

interface BlogPostsListProps {
  onEdit: (post: BlogPost) => void;
  onDelete: (id: string) => void;
  onPreview: (slug: string) => void;
}

const BlogPostsList = ({ onEdit, onDelete, onPreview }: BlogPostsListProps) => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts();

    // Subscribe to realtime updates
    const channel = supabase
      .channel('schema-db-changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'blog_posts'
        },
        () => {
          fetchPosts();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const fetchPosts = async () => {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setPosts(data || []);
    } catch (error) {
      console.error('Error fetching posts:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="text-center py-8">Loading posts...</div>;
  }

  if (posts.length === 0) {
    return (
      <div className="text-muted-foreground text-center py-8">
        No blog posts yet. Create your first post!
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <div
          key={post.id}
          className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
        >
          <div className="space-y-1">
            <h3 className="font-semibold">{post.title}</h3>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>{format(new Date(post.created_at), 'MMM d, yyyy')}</span>
              <Badge variant={post.status === 'published' ? 'default' : 'secondary'}>
                {post.status}
              </Badge>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onPreview(post.slug)}
            >
              <Eye className="w-4 h-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onEdit(post)}
            >
              <Pencil className="w-4 h-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onDelete(post.id)}
            >
              <Trash2 className="w-4 h-4" />
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogPostsList;
