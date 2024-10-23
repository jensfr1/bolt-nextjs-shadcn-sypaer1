"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { useToast } from "@/components/ui/use-toast";

export function AbsenceForm() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const { toast } = useToast();

  const handleExcuse = () => {
    if (!date) return;
    
    toast({
      title: "Absence Recorded",
      description: `Your child has been excused for ${date.toLocaleDateString()}.`,
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Excuse Absence</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border"
        />
        <Button variant="outline" onClick={handleExcuse}>
          Record Absence
        </Button>
      </CardContent>
    </Card>
  );
}