'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Html5QrcodeScanner } from 'html5-qrcode';
import { useEffect } from 'react';

export default function CheckIn() {
  const [isScanning, setIsScanning] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    if (isScanning) {
      const scanner = new Html5QrcodeScanner('reader', {
        qrbox: {
          width: 250,
          height: 250,
        },
        fps: 5,
      });

      scanner.render(success, error);

      function success(result: string) {
        scanner.clear();
        setIsScanning(false);
        toast({
          title: 'Check-in Successful!',
          description: `QR Code scanned: ${result}`,
        });
      }

      function error(err: any) {
        console.warn(err);
      }

      return () => {
        scanner.clear();
      };
    }
  }, [isScanning, toast]);

  return (
    <div className="container mx-auto px-4 py-16">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-center">Check-In Scanner</CardTitle>
        </CardHeader>
        <CardContent>
          {!isScanning ? (
            <div className="text-center">
              <Button 
                size="lg"
                onClick={() => setIsScanning(true)}
                className="mb-4"
              >
                Start Scanner
              </Button>
              <p className="text-sm text-gray-500">
                Click to start scanning your child's QR code
              </p>
            </div>
          ) : (
            <div id="reader" className="w-full"></div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}