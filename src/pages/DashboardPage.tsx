import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Facebook, PenSquare, Share2, Sparkles, BarChart3, Clock, Users } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

const DashboardPage = () => {
  const [blogTopics, setBlogTopics] = useState<string>("");
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGeneratePosts = async () => {
    setIsGenerating(true);
    // TODO: Implement AI blog post generation
    console.log("Generating posts for topics:", blogTopics);
    setTimeout(() => setIsGenerating(false), 2000); // Simulated delay
  };

  const handleShareToFacebook = () => {
    // TODO: Implement Facebook sharing
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
          <p className="text-muted-foreground">Manage your content and analytics in one place</p>
        </div>

        {/* Analytics Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-background/60 backdrop-blur-lg border-primary/10">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total Posts</CardTitle>
              <PenSquare className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">128</div>
              <p className="text-xs text-muted-foreground">+14% from last month</p>
            </CardContent>
          </Card>
          <Card className="bg-background/60 backdrop-blur-lg border-primary/10">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Engagement</CardTitle>
              <Users className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2,842</div>
              <p className="text-xs text-muted-foreground">+22% from last month</p>
            </CardContent>
          </Card>
          <Card className="bg-background/60 backdrop-blur-lg border-primary/10">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Avg. Time</CardTitle>
              <Clock className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3m 24s</div>
              <p className="text-xs text-muted-foreground">+7% from last month</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="content" className="space-y-4">
          <TabsList className="grid w-full grid-cols-2 lg:w-[400px]">
            <TabsTrigger value="content">Content Manager</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="content" className="space-y-4">
            <Card className="bg-background/60 backdrop-blur-lg border-primary/10">
              <CardHeader>
                <CardTitle>AI Blog Post Generator</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Topics or Keywords</label>
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
                    {isGenerating ? "Generating..." : "Generate Posts"}
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

            <Card className="bg-background/60 backdrop-blur-lg border-primary/10">
              <CardHeader>
                <CardTitle>Recent Posts</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between p-4 rounded-lg bg-background/40 hover:bg-background/60 transition-colors"
                    >
                      <div>
                        <h3 className="font-medium">The Future of Heat Pumps</h3>
                        <p className="text-sm text-muted-foreground">
                          Published 2 days ago • 5 min read
                        </p>
                      </div>
                      <Button variant="ghost" size="icon">
                        <Share2 className="w-4 h-4" />
                      </Button>
                    </div>
                  ))}
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