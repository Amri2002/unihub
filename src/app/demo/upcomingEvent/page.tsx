"use client";

import {
  UpcomingEventsCard,
  UpcomingEvent,
} from "@/components/upcoming-event-card";

export default function UpcomingEventsDemo() {
  const mockEvents: UpcomingEvent[] = [
    {
      title: "Software Engineering Exam",
      date: "2025-05-01",
      type: "Exam",
    },
    {
      title: "Operating Systems Assignment",
      date: "2025-05-03",
      type: "Assignment",
    },
    {
      title: "Final Project Deadline",
      date: "2025-05-10",
      type: "Deadline",
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/40 p-4">
      <div className="w-full max-w-md">
        <UpcomingEventsCard events={mockEvents} />
      </div>
    </div>
  );
}
