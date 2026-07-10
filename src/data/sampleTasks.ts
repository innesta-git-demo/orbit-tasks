import type { Task } from "../types";

/** A calendar date some days from today, so the sample tasks never all fall overdue. */
function inDays(days: number): string {
  const date = new Date();
  date.setDate(date.getDate() + days);
  return date.toLocaleDateString("en-CA");
}

export const sampleTasks: Task[] = [
  { id: "1", title: "Plan the week", done: true, priority: "normal", dueDate: inDays(-2) },
  { id: "2", title: "Review the onboarding copy", done: false, priority: "high", dueDate: inDays(0) },
  { id: "3", title: "Book the team retrospective", done: false, priority: "low", dueDate: inDays(5) },
  { id: "4", title: "Update the release checklist", done: false, priority: "normal" },
  { id: "5", title: "Send the invoice", done: false, priority: "high", dueDate: inDays(-1) },
];
