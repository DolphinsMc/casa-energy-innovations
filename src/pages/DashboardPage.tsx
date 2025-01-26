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
  
  const [dashboardColors, setDashboardColors] = useState({
    cardBackground: "#ffffff",
    cardText: "#000000",
    headerBackground: "#f8f9fa",
    sidebarBackground: "#ffffff",
    buttonPrimary: "#0066cc",
    buttonSecondary: "#6c757d",
    chartColors: ["#4e79a7", "#f28e2c", "#e15759", "#76b7b2", "#59a14f"],
    tabsBackground: "#ffffff",
    tabsActive: "#e6f3ff"
  });

  const handleDashboardColorChange = (colorKey: string, value: string) => {
    setDashboardColors(prev => ({
      ...prev,
      [colorKey]: value
    }));
    
    // Fix: Type assertion to HTMLElement
    const element = document.querySelector('[data-dashboard-element]') as HTMLElement;
    if (element) {
      element.style.setProperty(`--dashboard-${colorKey}`, value);
    }
    
    console.log(`Dashboard color ${colorKey} updated to ${value}`);
  };

  const handleSaveChanges = () => {
    toast({
      title: "Changes Saved",
      description: "Your dashboard appearance settings have been saved successfully.",
    });
    console.log("Dashboard settings saved:", dashboardColors);
  };

  const applyDashboardPreset = (preset: 'default' | 'dark' | 'professional' | 'modern') => {
    const presets = {
      default: {
        cardBackground: "#ffffff",
        cardText: "#000000",
        headerBackground: "#f8f9fa",
        sidebarBackground: "#ffffff",
        buttonPrimary: "#0066cc",
        buttonSecondary: "#6c757d",
        chartColors: ["#4e79a7", "#f28e2c", "#e15759", "#76b7b2", "#59a14f"],
        tabsBackground: "#ffffff",
        tabsActive: "#e6f3ff"
      },
      dark: {
        cardBackground: "#2d3748",
        cardText: "#ffffff",
        headerBackground: "#1a202c",
        sidebarBackground: "#2d3748",
        buttonPrimary: "#4299e1",
        buttonSecondary: "#718096",
        chartColors: ["#63b3ed", "#f6ad55", "#fc8181", "#9ae6b4", "#b794f4"],
        tabsBackground: "#2d3748",
        tabsActive: "#4a5568"
      },
      professional: {
        cardBackground: "#f7fafc",
        cardText: "#2d3748",
        headerBackground: "#edf2f7",
        sidebarBackground: "#f7fafc",
        buttonPrimary: "#3182ce",
        buttonSecondary: "#718096",
        chartColors: ["#2b6cb0", "#dd6b20", "#c53030", "#2f855a", "#6b46c1"],
        tabsBackground: "#f7fafc",
        tabsActive: "#e2e8f0"
      },
      modern: {
        cardBackground: "#ffffff",
        cardText: "#1a202c",
        headerBackground: "#f7fafc",
        sidebarBackground: "#ffffff",
        buttonPrimary: "#5a67d8",
        buttonSecondary: "#718096",
        chartColors: ["#667eea", "#f6ad55", "#fc8181", "#68d391", "#b794f4"],
        tabsBackground: "#ffffff",
        tabsActive: "#ebf4ff"
      }
    };

    setDashboardColors(presets[preset]);
    
    toast({
      title: "Dashboard Theme Applied",
      description: `${preset.charAt(0).toUpperCase() + preset.slice(1)} dashboard theme has been applied.`
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1A1F2C] to-[#0F1218]" data-dashboard-element>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-white">Dashboard Appearance</h1>
        
        <Tabs defaultValue="colors" className="space-y-4">
          <TabsList className="bg-[#2A2F3C] border border-gray-700">
            <TabsTrigger value="colors" className="text-gray-200 data-[state=active]:bg-[#F97316] data-[state=active]:text-white">Colors</TabsTrigger>
            <TabsTrigger value="presets" className="text-gray-200 data-[state=active]:bg-[#F97316] data-[state=active]:text-white">Presets</TabsTrigger>
            <TabsTrigger value="effects" className="text-gray-200 data-[state=active]:bg-[#F97316] data-[state=active]:text-white">Effects</TabsTrigger>
          </TabsList>

          <TabsContent value="colors">
            <Card className="bg-[#2A2F3C]/80 border-gray-700 p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.entries(dashboardColors).map(([key, value]) => (
                  <div key={key} className="space-y-2">
                    <Label htmlFor={key} className="capitalize text-gray-200">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </Label>
                    <div className="flex items-center gap-4">
                      <Input
                        id={key}
                        type="color"
                        value={value}
                        onChange={(e) => handleDashboardColorChange(key, e.target.value)}
                        className="w-16 h-8 p-0 bg-transparent border-gray-700"
                      />
                      <Input
                        type="text"
                        value={value}
                        onChange={(e) => handleDashboardColorChange(key, e.target.value)}
                        className="w-32 bg-[#1A1F2C] border-gray-700 text-gray-200"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="presets">
            <Card className="bg-[#2A2F3C]/80 border-gray-700 p-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Button onClick={() => applyDashboardPreset('default')} className="bg-[#F97316] text-white hover:bg-[#F97316]/90">Default</Button>
                <Button onClick={() => applyDashboardPreset('dark')} className="bg-[#F97316] text-white hover:bg-[#F97316]/90">Dark</Button>
                <Button onClick={() => applyDashboardPreset('professional')} className="bg-[#F97316] text-white hover:bg-[#F97316]/90">Professional</Button>
                <Button onClick={() => applyDashboardPreset('modern')} className="bg-[#F97316] text-white hover:bg-[#F97316]/90">Modern</Button>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="effects">
            <Card className="bg-[#2A2F3C]/80 border-gray-700 p-6 space-y-6">
              <div className="flex items-center justify-between">
                <Label htmlFor="dark-mode" className="text-gray-200">Dark Mode</Label>
                <Switch
                  id="dark-mode"
                  checked={darkMode}
                  onCheckedChange={setDarkMode}
                />
              </div>

              <div className="flex items-center justify-between">
                <Label htmlFor="glass-effect" className="text-gray-200">Glass Effect</Label>
                <Switch
                  id="glass-effect"
                  checked={glassEffect}
                  onCheckedChange={setGlassEffect}
                />
              </div>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="mt-8 flex justify-end">
          <Button 
            onClick={handleSaveChanges}
            className="px-6 bg-[#F97316] text-white hover:bg-[#F97316]/90"
            size="lg"
          >
            Save Changes
          </Button>
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;
