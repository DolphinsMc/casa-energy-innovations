import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Calendar, Clock, User, Tag } from "lucide-react";
import { motion } from "framer-motion";

interface BlogPost {
  id: number;
  title: string;
  description: string;
  content: string;
  date: string;
  author: string;
  category: string;
  readTime: string;
}

interface BlogDialogProps {
  post: BlogPost | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function BlogDialog({ post, open, onOpenChange }: BlogDialogProps) {
  if (!post) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl h-[80vh] p-0 bg-gradient-to-b from-background to-background/80 backdrop-blur-xl border-primary/20">
        <ScrollArea className="h-full rounded-md">
          <DialogHeader className="px-6 py-4 sticky top-0 bg-background/95 backdrop-blur-sm border-b z-10">
            <DialogTitle className="text-2xl font-bold text-primary">
              {post.title}
            </DialogTitle>
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mt-2">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
              <div className="flex items-center gap-2">
                <Tag className="w-4 h-4" />
                <span>{post.category}</span>
              </div>
            </div>
          </DialogHeader>
          <div className="px-6 py-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="prose prose-lg dark:prose-invert max-w-none"
            >
              <p className="text-lg text-muted-foreground mb-6">{post.description}</p>
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </motion.div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}