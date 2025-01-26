import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Header } from "@/components/Header";

const DashboardPage = () => {
  const { toast } = useToast();
  const [darkMode, setDarkMode] = useState(false);
  const [glassEffect, setGlassEffect] = useState(false);
  const [animationSpeed, setAnimationSpeed] = useState(1);
  const [borderRadius, setBorderRadius] = useState(0.5);
  
  // Color states
  const [colors, setColors] = useState({
    background: "#ffffff",
    foreground: "#000000",
    primary: "#1a1a1a",
    secondary: "#f0f0f0",
    accent: "#0066cc",
    muted: "#666666",
    border: "#e0e0e0",
    card: "#ffffff",
    destructive: "#ff0000"
  });

  const handleColorChange = (colorKey: string, value: string) => {
    setColors(prev => ({
      ...prev,
      [colorKey]: value
    }));
    
    // Update CSS variables
    document.documentElement.style.setProperty(`--${colorKey}`, value);
    
    console.log(`Color ${colorKey} updated to ${value}`);
  };

  const applyThemePreset = (preset: 'classic' | 'dark' | 'ocean' | 'forest') => {
    const presets = {
      classic: {
        background: "#ffffff",
        foreground: "#000000",
        primary: "#1a1a1a",
        secondary: "#f0f0f0",
        accent: "#0066cc",
        muted: "#666666",
        border: "#e0e0e0",
        card: "#ffffff",
        destructive: "#ff0000"
      },
      dark: {
        background: "#1a1a1a",
        foreground: "#ffffff",
        primary: "#f0f0f0",
        secondary: "#333333",
        accent: "#3399ff",
        muted: "#999999",
        border: "#404040",
        card: "#262626",
        destructive: "#ff3333"
      },
      ocean: {
        background: "#f0f7ff",
        foreground: "#003366",
        primary: "#0066cc",
        secondary: "#e6f3ff",
        accent: "#00ccff",
        muted: "#6699cc",
        border: "#cce6ff",
        card: "#ffffff",
        destructive: "#ff3366"
      },
      forest: {
        background: "#f5fff5",
        foreground: "#1a331a",
        primary: "#336633",
        secondary: "#e6ffe6",
        accent: "#66cc66",
        muted: "#669966",
        border: "#ccffcc",
        card: "#ffffff",
        destructive: "#cc3333"
      }
    };

    setColors(presets[preset]);
    Object.entries(presets[preset]).forEach(([key, value]) => {
      document.documentElement.style.setProperty(`--${key}`, value);
    });

    toast({
      title: "Theme Applied",
      description: `${preset.charAt(0).toUpperCase() + preset.slice(1)} theme has been applied.`,
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Dashboard</h1>
        
        <Tabs defaultValue="theme" className="space-y-4">
          <TabsList>
            <TabsTrigger value="theme">Theme</TabsTrigger>
            <TabsTrigger value="colors">Colors</TabsTrigger>
            <TabsTrigger value="chatbot">Chatbot</TabsTrigger>
          </TabsList>

          <TabsContent value="theme">
            <Card className="p-6 space-y-6">
              <div className="space-y-4">
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

                <div className="space-y-2">
                  <Label>Animation Speed ({animationSpeed}s)</Label>
                  <Slider
                    value={[animationSpeed]}
                    onValueChange={([value]) => setAnimationSpeed(value)}
                    min={0.1}
                    max={2}
                    step={0.1}
                  />
                </div>

                <div className="space-y-2">
                  <Label>Border Radius ({borderRadius}rem)</Label>
                  <Slider
                    value={[borderRadius]}
                    onValueChange={([value]) => setBorderRadius(value)}
                    min={0}
                    max={2}
                    step={0.1}
                  />
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="colors">
            <Card className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold mb-4">Theme Presets</h3>
                  <div className="flex flex-wrap gap-2">
                    <Button onClick={() => applyThemePreset('classic')}>Classic</Button>
                    <Button onClick={() => applyThemePreset('dark')}>Dark</Button>
                    <Button onClick={() => applyThemePreset('ocean')}>Ocean</Button>
                    <Button onClick={() => applyThemePreset('forest')}>Forest</Button>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold mb-4">Custom Colors</h3>
                  {Object.entries(colors).map(([key, value]) => (
                    <div key={key} className="flex items-center gap-4">
                      <Label htmlFor={key} className="w-24">{key}</Label>
                      <Input
                        id={key}
                        type="color"
                        value={value}
                        onChange={(e) => handleColorChange(key, e.target.value)}
                        className="w-16 h-8 p-0"
                      />
                      <Input
                        type="text"
                        value={value}
                        onChange={(e) => handleColorChange(key, e.target.value)}
                        className="w-24"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="chatbot">
            <Card className="p-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold mb-4">Chatbot Settings</h3>
                <Label htmlFor="chatbot-enabled">Enable Chatbot</Label>
                <Switch id="chatbot-enabled" />
                <Label htmlFor="chatbot-welcome-message">Welcome Message</Label>
                <Input id="chatbot-welcome-message" type="text" placeholder="Type your welcome message here..." />
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default DashboardPage;
