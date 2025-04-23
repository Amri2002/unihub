import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarDays } from "lucide-react";

export type UpcomingEvent = {
  title: string;
  date: string;
  type: "Exam" | "Assignment" | "Deadline";
};

interface UpcomingEventsCardProps {
  events: UpcomingEvent[];
}

export function UpcomingEventsCard({ events }: UpcomingEventsCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-lg">Upcoming Events</CardTitle>
        <CalendarDays className="h-5 w-5 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <ul className="space-y-3">
          {events.length === 0 ? (
            <li className="text-sm text-muted-foreground">
              No upcoming events 🎉
            </li>
          ) : (
            events.map((event, index) => (
              <li
                key={index}
                className="border rounded-lg p-3 text-sm bg-muted/50 hover:bg-muted transition"
              >
                <div className="font-medium">{event.title}</div>
                <div className="text-xs text-muted-foreground mt-1">
                  {event.type} – {event.date}
                </div>
              </li>
            ))
          )}
        </ul>
      </CardContent>
    </Card>
  );
}
