"use client";

import { CheckCircle } from "lucide-react";
import {
  Label,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
} from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChartContainer } from "@/components/ui/chart";

type Assignment = {
  title: string;
  dueDate: string; // ISO format
  isCompleted: boolean;
};

interface AssignmentProgressChartProps {
  assignments: Assignment[];
}

export function AssignmentProgressChart({
  assignments,
}: AssignmentProgressChartProps) {
  const today = new Date();

  // Filter out only upcoming assignments
  const upcoming = assignments.filter((a) => new Date(a.dueDate) > today);

  const completed = upcoming.filter((a) => a.isCompleted);

  const percentage =
    upcoming.length === 0
      ? 0
      : Math.round((completed.length / upcoming.length) * 100);

  const chartData = [
    {
      subject: "progress",
      completion: percentage,
      fill: "var(--color-primary)",
    },
  ];

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle className="text-lg">Upcoming Assignment Progress</CardTitle>
        <CardDescription>Remaining tasks</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          className="mx-auto aspect-square max-h-[250px]"
          config={{}}
        >
          <RadialBarChart
            data={chartData}
            startAngle={90}
            endAngle={90 + (360 * percentage) / 100} // dynamically calculate the angle
            innerRadius={80}
            outerRadius={140}
          >
            <PolarGrid
              gridType="circle"
              radialLines={false}
              stroke="none"
              className="first:fill-muted last:fill-background"
              polarRadius={[86, 74]}
            />
            <RadialBar dataKey="completion" background />
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-4xl font-bold"
                        >
                          {percentage}%
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground text-sm"
                        >
                          Completed
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </PolarRadiusAxis>
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          {completed.length} / {upcoming.length} completed{" "}
          <CheckCircle className="h-4 w-4 text-green-500" />
        </div>
        <div className="leading-none text-muted-foreground">
          Only includes assignments with future deadlines
        </div>
      </CardFooter>
    </Card>
  );
}
