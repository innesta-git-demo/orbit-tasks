import type { Task } from "../types";

/** Open tasks first, then by title. */
export function sortTasks(tasks: readonly Task[]): Task[] {
  return [...tasks].sort(
    (a, b) => Number(a.done) - Number(b.done) || a.title.localeCompare(b.title),
  );
}
