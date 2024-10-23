'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Bell, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

type Message = {
  id: string;
  title: string;
  content: string;
  date: string;
  read: boolean;
};

export function MessageList() {
  const [messages] = useState<Message[]>([
    {
      id: '1',
      title: 'Spring Festival Next Week',
      content: 'Please remember to bring costumes for the spring festival next Tuesday.',
      date: '2024-03-20',
      read: false,
    },
    {
      id: '2',
      title: 'Parent-Teacher Meeting',
      content: 'Schedule for next month\'s parent-teacher meetings is now available.',
      date: '2024-03-18',
      read: true,
    },
  ]);

  return (
    <div className="space-y-4">
      {messages.map((message) => (
        <Card key={message.id} className={message.read ? 'bg-gray-50 dark:bg-gray-800' : 'bg-white dark:bg-gray-900'}>
          <CardHeader className="pb-2">
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-2">
                {!message.read && <Bell className="w-4 h-4 text-blue-500" />}
                <CardTitle className="text-lg">{message.title}</CardTitle>
              </div>
              <Badge variant={message.read ? "secondary" : "default"}>
                {message.read ? (
                  <CheckCircle2 className="w-3 h-3 mr-1" />
                ) : "New"}
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 dark:text-gray-300">{message.content}</p>
            <p className="text-sm text-gray-400 mt-2">{message.date}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}