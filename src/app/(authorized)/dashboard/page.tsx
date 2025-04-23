import { GpaCard } from "@/components/gpa-card";
import {
  UpcomingEventsCard,
  UpcomingEvent,
} from "@/components/upcoming-event-card";
import { AssignmentProgressChart } from "@/components/assignment-progress-chart";

export default function DashboardPage() {
  const upcomingEvents: UpcomingEvent[] = [
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

  const assignments = [
    {
      title: "Assignment 1",
      dueDate: "2025-04-30",
      isCompleted: true,
    },
    {
      title: "Assignment 2",
      dueDate: "2025-05-02",
      isCompleted: false,
    },
    {
      title: "Past Assignment",
      dueDate: "2025-04-01",
      isCompleted: true,
    },
  ];

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
        <GpaCard gpa={3.75} />
        <UpcomingEventsCard events={upcomingEvents} />
        <AssignmentProgressChart assignments={assignments} />
      </div>
    </div>
  );
}
