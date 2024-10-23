'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export function AbsenceList() {
  const absences = [
    { date: '2024-03-15', reason: 'Doctor\'s appointment' },
    { date: '2024-03-08', reason: 'Family vacation' },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Absences</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {absences.map((absence, index) => (
            <div key={index} className="border rounded-lg p-4">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-semibold">{absence.date}</p>
                  <p className="text-gray-600 dark:text-gray-300 mt-1">
                    {absence.reason}
                  </p>
                </div>
                <Badge variant="outline">Excused</Badge>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}