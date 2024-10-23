'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

export default function Absence() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [reason, setReason] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!date || !reason) {
      toast({
        title: 'Error',
        description: 'Please fill in all fields',
        variant: 'destructive',
      });
      return;
    }

    toast({
      title: 'Absence Reported',
      description: 'Your absence report has been submitted successfully.',
    });
    setReason('');
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-center">Report Absence</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label>Select Date</Label>
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border mx-auto"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="reason">Reason for Absence</Label>
              <Textarea
                id="reason"
                placeholder="Please provide a reason for the absence..."
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                className="min-h-[100px]"
              />
            </div>

            <Button type="submit" className="w-full">
              Submit Absence Report
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}