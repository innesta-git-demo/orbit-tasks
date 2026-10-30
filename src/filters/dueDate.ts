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

/** A label short enough for the badge: "Tomorrow", "In 4 days", "3d overdue". */
export function dueDateLabel(task: Task, today: string): string | undefined {
  const days = daysUntilDue(task, today);
  if (days === undefined) return undefined;
  if (days > 1) return `In ${days} days`;
  if (days === 1) return "Tomorrow";
  return `${-days}d overdue`;
}
