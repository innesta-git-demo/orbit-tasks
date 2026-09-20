import type { Task } from "../types";
import { daysBetween } from "../utils/dates";

/** Today in the user's time zone, as a calendar date such as 2026-10-25. */
export function todayAsCalendarDate(): string {
  return new Date().toLocaleDateString("en-CA");
}

/** Whole days from today until the task is due: negative once the due date has passed. */
export function daysUntilDue(task: Task, today: string): number | undefined {
  return task.dueDate === undefined ? undefined : daysBetween(today, task.dueDate);
}

export function dueDateLabel(task: Task, today: string): string | undefined {
  const days = daysUntilDue(task, today);
  if (days === undefined) return undefined;
  if (days === 0) return "Due today";
  if (days === 1) return "Due tomorrow";
  if (days > 1) return `Due in ${days} days`;
  return days === -1 ? "Overdue by 1 day" : `Overdue by ${-days} days`;
}
