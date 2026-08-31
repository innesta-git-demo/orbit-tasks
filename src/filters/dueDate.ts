import type { Task } from "../types";

const DAY = 24 * 60 * 60 * 1000;

/** Today in the user's time zone, as a calendar date such as 2026-10-25. */
export function todayAsCalendarDate(): string {
    return new Date().toLocaleDateString("en-CA");
}

/** Whole days from today until the task is due: negative once the due date has passed. */
export function daysUntilDue(task: Task, today: string): number | undefined {
    if (task.dueDate === undefined) return undefined;
    return Math.round((new Date(task.dueDate).getTime() - new Date(today).getTime()) / DAY);
}

export function dueDateLabel(task: Task, today: string): string | undefined {
    const days = daysUntilDue(task, today);
    if (days === undefined) return undefined;
    if (days === 0) return "Due today";
    if (days === 1) return "Due tomorrow";
    if (days > 1) return `Due in ${days} days`;
    return days === -1 ? "Overdue by 1 day" : `Overdue by ${-days} days`;
}
