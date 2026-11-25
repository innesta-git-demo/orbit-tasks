import { isPastDue } from "../filters/dueDate";
import type { Task } from "../types";

/** "Overdue", on open tasks past their due date. */
export function OverdueBadge({ task }: { task: Task }) {
  if (!isPastDue(task)) return null;
  return <span className="badge overdue-badge">Overdue</span>;
}
