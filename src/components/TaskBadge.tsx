import { dueDateLabel, todayAsCalendarDate } from "../filters/dueDate";
import { isOverdue } from "../filters/overdue";
import type { Task } from "../types";

export function TaskBadge({ task }: { task: Task }) {
  const today = todayAsCalendarDate();
  const label = dueDateLabel(task, today);
  if (label === undefined) return null;
  return <span className={isOverdue(task, today) ? "badge overdue" : "badge"}>{label}</span>;
}
