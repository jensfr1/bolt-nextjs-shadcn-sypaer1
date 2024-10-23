'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar } from '@/components/ui/calendar';
import { Badge } from '@/components/ui/badge';
import { CalendarCheck2, CalendarX2 } from 'lucide-react';

export function AttendanceView() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Attendance Calendar</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center space-x-4 mb-4">
          <Badge variant="secondary" className="flex items-center gap-1">
            <CalendarCheck2 className="w-4 h-4" />
            Present
          </Badge>
          <Badge variant="destructive" className="flex items-center gap-1">
            <CalendarX2 className="w-4 h-4" />
            Absent
          </Badge>
        </div>
        <Calendar
          mode="single"
          className="rounded-md border"
          selected={new Date()}
          disabled
        />
      </CardContent>
    </Card>
  );
}