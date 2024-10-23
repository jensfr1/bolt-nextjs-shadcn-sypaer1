'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export function EmergencyCareForm() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [timeSlot, setTimeSlot] = useState('');
  const [reason, setReason] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!date || !timeSlot || !reason) {
      toast({
        title: 'Error',
        description: 'Please fill in all fields',
        variant: 'destructive',
      });
      return;
    }

    toast({
      title: 'Request Submitted',
      description: 'Your emergency care request has been submitted successfully.',
    });
    setReason('');
    setTimeSlot('');
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Request Emergency Care</CardTitle>
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
              disabled={(date) => date < new Date()}
            />
          </div>

          <div className="space-y-2">
            <Label>Time Slot</Label>
            <Select value={timeSlot} onValueChange={setTimeSlot}>
              <SelectTrigger>
                <SelectValue placeholder="Select time slot" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="morning">Morning (7:30 - 12:30)</SelectItem>
                <SelectItem value="afternoon">Afternoon (12:30 - 16:30)</SelectItem>
                <SelectItem value="fullday">Full Day (7:30 - 16:30)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="reason">Reason for Emergency Care</Label>
            <Textarea
              id="reason"
              placeholder="Please explain why you need emergency care..."
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              className="min-h-[100px]"
            />
          </div>

          <Button type="submit" className="w-full">
            Submit Request
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}