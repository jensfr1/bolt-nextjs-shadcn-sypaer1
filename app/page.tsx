import { School } from "lucide-react";
import { FeatureCard } from "@/components/home/feature-card";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col items-center justify-center min-h-[80vh] gap-8">
        <div className="text-center">
          <School className="w-16 h-16 mx-auto mb-4 text-primary" />
          <h1 className="text-4xl font-bold mb-2">Welcome to KinderCheck</h1>
          <p className="text-muted-foreground mb-8">Your modern kindergarten management solution</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
          <FeatureCard
            title="Parent Portal"
            description="Check-in your child and manage attendance"
            href="/parent"
            buttonText="Access Parent Portal"
          />
          
          <FeatureCard
            title="Staff Portal"
            description="Manage attendance and send messages"
            href="/staff"
            buttonText="Access Staff Portal"
            variant="outline"
          />
          
          <FeatureCard
            title="Emergency Care"
            description="Request emergency care services"
            href="/emergency-care"
            buttonText="Request Care"
            variant="secondary"
          />
        </div>
      </div>
    </div>
  );
}