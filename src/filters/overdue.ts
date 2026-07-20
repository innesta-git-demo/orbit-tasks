import type { Task } from "../types";
import { daysUntilDue } from "./dueDate";

/** Open tasks whose due date has passed. A task due today is not overdue yet. */
export function isOverdue(task: Task, today: string): boolean {
    const days = daysUntilDue(task, today);
    return !task.done && days !== undefined && days < 0;
}
