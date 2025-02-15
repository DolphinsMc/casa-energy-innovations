
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { supabase } from "@/integrations/supabase/client";
import { ImagePlus, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

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
  onSave: (post: Omit<BlogPost, 'id' | 'created_at' | 'updated_at' | 'published_at'>) => void;
  onCancel: () => void;
}

const BlogPostEditor = ({ post, onSave, onCancel }: BlogPostEditorProps) => {
  const [title, setTitle] = useState(post?.title || "");
  const [content, setContent] = useState(post?.content || "");
  const [status, setStatus] = useState<string>(post?.status || "draft");
  const [metaDescription, setMetaDescription] = useState(post?.meta_description || "");
  const [tags, setTags] = useState(post?.tags?.join(", ") || "");
  const [uploadingImage, setUploadingImage] = useState(false);
  const [featuredImage, setFeaturedImage] = useState(post?.featured_image || "");
  const { toast } = useToast();

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      setUploadingImage(true);
      
      const fileExt = file.name.split('.').pop();
      const filePath = `${crypto.randomUUID()}.${fileExt}`;
      
      const { error: uploadError, data } = await supabase.storage
        .from('blog_images')
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      const { data: { publicUrl } } = supabase.storage
        .from('blog_images')
        .getPublicUrl(filePath);

      setFeaturedImage(publicUrl);
      toast({
        title: "Image uploaded",
        description: "Featured image has been uploaded successfully.",
      });
    } catch (error) {
      console.error('Error uploading image:', error);
      toast({
        title: "Upload failed",
        description: "Failed to upload image. Please try again.",
        variant: "destructive",
      });
    } finally {
      setUploadingImage(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Convert comma-separated tags string to array
    const tagsArray = tags
      .split(",")
      .map(tag => tag.trim())
      .filter(tag => tag.length > 0);

    onSave({
      title,
      content,
      status,
      slug: title.toLowerCase().replace(/ /g, '-'),
      meta_description: metaDescription || null,
      featured_image: featuredImage || null,
      tags: tagsArray.length > 0 ? tagsArray : null,
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
        <Label htmlFor="metaDescription">Meta Description</Label>
        <Textarea
          id="metaDescription"
          value={metaDescription}
          onChange={(e) => setMetaDescription(e.target.value)}
          placeholder="Enter meta description for SEO"
          className="h-20"
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
        <Label htmlFor="tags">Tags (comma-separated)</Label>
        <Input
          id="tags"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          placeholder="Enter tags, separated by commas"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="featuredImage">Featured Image</Label>
        <div className="flex items-center gap-4">
          <Button
            type="button"
            variant="outline"
            onClick={() => document.getElementById('imageInput')?.click()}
            disabled={uploadingImage}
          >
            {uploadingImage ? (
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            ) : (
              <ImagePlus className="w-4 h-4 mr-2" />
            )}
            {uploadingImage ? "Uploading..." : "Upload Image"}
          </Button>
          <input
            id="imageInput"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageUpload}
          />
          {featuredImage && (
            <img
              src={featuredImage}
              alt="Featured"
              className="w-20 h-20 object-cover rounded-md"
            />
          )}
        </div>
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
