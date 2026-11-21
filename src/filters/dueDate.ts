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

/** The ranges of the due date filter, from the most urgent: "any" is the filter turned off. */
export type DueDateFilter = "any" | "overdue" | "today" | "thisWeek" | "later";

/** Whether a task belongs in the due date range the filter bar selects; with the filter turned off every task does, including tasks that have no due date at all. */
export function matchesDueDate(task: Task, filter: DueDateFilter, today: string): boolean {
  if (filter === "any") return true;
  const days = daysUntilDue(task, today);
  if (days === undefined) return false;
  switch (filter) {
    case "overdue":
      return !task.done && days < 0;
    case "today":
      return days === 0;
    case "thisWeek":
      return days >= 0 && days < 7; // today counts as this week, so "today" is a narrower view of the same tasks
    case "later":
      return days >= 7;
  }
}
