
import { Users, FileText, Calendar, MessageSquare } from "lucide-react";
import { StatsCard } from "./StatsCard";

export const AnalyticsOverview = () => {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <StatsCard
        title="Total Leads"
        value="2,350"
        description="Active leads in pipeline"
        icon={Users}
        trend={{ value: 12, isPositive: true }}
      />
      <StatsCard
        title="Content Pieces"
        value="145"
        description="Blog posts and guides"
        icon={FileText}
        trend={{ value: 8, isPositive: true }}
      />
      <StatsCard
        title="Bookings"
        value="89"
        description="This month's appointments"
        icon={Calendar}
        trend={{ value: 3, isPositive: false }}
      />
      <StatsCard
        title="Chat Sessions"
        value="1,234"
        description="AI chatbot interactions"
        icon={MessageSquare}
        trend={{ value: 24, isPositive: true }}
      />
    </div>
  );
};
