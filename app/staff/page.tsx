"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { MessageSquare, Users } from "lucide-react";

export default function StaffPortal() {
  const { toast } = useToast();

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "Your message has been sent to all parents.",
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Staff Portal</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Attendance Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-3">
                <Users className="w-6 h-6 text-primary" />
                <div>
                  <p className="font-semibold">Present Today</p>
                  <p className="text-2xl font-bold">15/20</p>
                </div>
              </div>
              <Button variant="outline">View Details</Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Send Message</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSendMessage} className="space-y-4">
              <Input placeholder="Message Subject" />
              <Textarea placeholder="Type your message here..." className="min-h-[100px]" />
              <Button type="submit" className="w-full">
                <MessageSquare className="w-4 h-4 mr-2" />
                Send to All Parents
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}