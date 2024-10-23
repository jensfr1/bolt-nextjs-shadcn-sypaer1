import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface FeatureCardProps {
  title: string;
  description: string;
  href: string;
  buttonText: string;
  variant?: "default" | "outline" | "secondary";
}

export function FeatureCard({ title, description, href, buttonText, variant = "default" }: FeatureCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Link href={href}>
          <Button className="w-full" variant={variant}>{buttonText}</Button>
        </Link>
      </CardContent>
    </Card>
  );
}