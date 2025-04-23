// app/demo/gpa-card-demo/page.tsx (if you're using app router)
"use client";

import { GpaCard } from "@/components/gpa-card";

export default function GpaCardDemo() {
  const mockGpa = 3.85;

  return (
    <div className="w-full max-w-sm">
      <GpaCard gpa={mockGpa} />
    </div>
  );
}
