// components/cards/GpaCard.tsx
import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Calculator } from "lucide-react";

export function GpaCard({ gpa }: { gpa: number }) {
  return (
    <Card className="w-full shadow-md">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-lg">Current GPA</CardTitle>
        <Calculator className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-5xl font-bold">{gpa.toFixed(2)}</div>
        <p className="text-xs text-muted-foreground mt-1">Last updated today</p>
      </CardContent>
      <CardFooter>
        <Link
          href="#"
          className="text-sm font-medium text-blue-600 hover:underline ml-auto"
        >
          Calculate GPA →
        </Link>
      </CardFooter>
    </Card>
  );
}
