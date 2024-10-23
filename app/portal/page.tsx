'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { AttendanceView } from '@/components/attendance/attendance-view';
import { MessageList } from '@/components/messages/message-list';
import { EmergencyCareForm } from '@/components/emergency-care/emergency-care-form';

export default function Portal() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">Parent Portal</h1>
        
        <Tabs defaultValue="attendance" className="space-y-4">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="attendance">Attendance</TabsTrigger>
            <TabsTrigger value="messages">Messages</TabsTrigger>
            <TabsTrigger value="emergency">Emergency Care</TabsTrigger>
            <TabsTrigger value="absences">Absences</TabsTrigger>
          </TabsList>

          <TabsContent value="attendance">
            <AttendanceView />
          </TabsContent>

          <TabsContent value="messages">
            <MessageList />
          </TabsContent>

          <TabsContent value="emergency">
            <EmergencyCareForm />
          </TabsContent>

          <TabsContent value="absences">
            <AbsenceList />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}