import type { Task } from "../types";

export type StatusFilter = "all" | "open" | "done";

export function matchesStatus(task: Task, status: StatusFilter): boolean {
  return status === "all" || (status === "done") === task.done;
}
