import type { Task } from "../types";
import { parseCalendarDate } from "../utils/dates";

/** Open tasks first, then the soonest due; tasks without a due date go last. */
export function sortTasks(tasks: readonly Task[]): Task[] {
  return Array.from(tasks).sort(
    (a, b) => Number(a.done) - Number(b.done) || dueOrder(a) - dueOrder(b),
  );
}

function dueOrder(task: Task): number {
  return parseCalendarDate(task.dueDate ?? "") ?? Number.MAX_SAFE_INTEGER;
}
