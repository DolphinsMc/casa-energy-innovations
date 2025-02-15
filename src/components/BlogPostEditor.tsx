
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

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

interface BlogPostEditorProps {
  post?: BlogPost | null;
  onSave: (post: Omit<BlogPost, 'id' | 'created_at' | 'updated_at' | 'published_at' | 'meta_description' | 'featured_image' | 'tags'>) => void;
  onCancel: () => void;
}

const BlogPostEditor = ({ post, onSave, onCancel }: BlogPostEditorProps) => {
  const [title, setTitle] = useState(post?.title || "");
  const [content, setContent] = useState(post?.content || "");
  const [status, setStatus] = useState<string>(post?.status || "draft");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      title,
      content,
      status,
      slug: title.toLowerCase().replace(/ /g, '-'),
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="title">Title</Label>
        <Input
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter post title"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="content">Content</Label>
        <Textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Write your post content here..."
          className="min-h-[200px]"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="status">Status</Label>
        <Select value={status} onValueChange={(value: string) => setStatus(value)}>
          <SelectTrigger id="status">
            <SelectValue placeholder="Select status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="draft">Draft</SelectItem>
            <SelectItem value="published">Published</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex justify-end gap-4">
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit">
          {post ? "Update Post" : "Create Post"}
        </Button>
      </div>
    </form>
  );
};

export default BlogPostEditor;
