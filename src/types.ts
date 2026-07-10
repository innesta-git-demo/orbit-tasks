export type Priority = "high" | "normal" | "low";

export interface Task {
  id: string;
  title: string;
  done: boolean;
  priority: Priority;
  /** A calendar date such as 2026-10-25. A task without one is never overdue. */
  dueDate?: string;
}
