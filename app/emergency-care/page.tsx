"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { useToast } from "@/components/ui/use-toast";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export default function EmergencyCare() {
  const [dates, setDates] = useState<Date[]>([]);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Request Submitted",
      description: `Emergency care request submitted for ${dates.length} days.`,
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Emergency Care Request</h1>
      
      <Card>
        <CardHeader>
          <CardTitle>Select Dates</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <Calendar
              mode="multiple"
              selected={dates}
              onSelect={setDates}
              className="rounded-md border"
            />
            
            <Textarea 
              placeholder="Please provide any additional information about your emergency care needs..."
              className="min-h-[100px]"
            />
            
            <Button type="submit" className="w-full">
              Submit Request
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}