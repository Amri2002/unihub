import { AssignmentProgressChart } from "@/components/assignment-progress-chart";

export default function AssignmentProgressDemoPage() {
  const sampleAssignments = [
    {
      title: "Assignment 1",
      dueDate: "2025-04-30", // future
      isCompleted: true,
    },
    {
      title: "Assignment 2",
      dueDate: "2025-05-02", // future
      isCompleted: false,
    },
    {
      title: "Past Assignment",
      dueDate: "2025-04-01", // past
      isCompleted: true,
    },
  ];

  return (
    <main className="p-6">
      <AssignmentProgressChart assignments={sampleAssignments} />
    </main>
  );
}
