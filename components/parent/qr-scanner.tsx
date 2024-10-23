"use client";

import { QrCode } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";

export function QrScanner() {
  const { toast } = useToast();

  const handleCheckIn = () => {
    toast({
      title: "Check-in Successful",
      description: "Your child has been checked in for today.",
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Check-in</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div className="flex justify-center">
          <QrCode className="w-32 h-32" />
        </div>
        <Button onClick={handleCheckIn}>
          Check-in with QR Code
        </Button>
      </CardContent>
    </Card>
  );
}