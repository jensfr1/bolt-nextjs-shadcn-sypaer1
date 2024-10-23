import { QrScanner } from "@/components/parent/qr-scanner";
import { AbsenceForm } from "@/components/parent/absence-form";

export default function ParentPortal() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Parent Portal</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <QrScanner />
        <AbsenceForm />
      </div>
    </div>
  );
}