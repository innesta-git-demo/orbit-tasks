import type { Priority, Task } from "../types";

const urgency: Record<Priority, number> = { high: 0, normal: 1, low: 2 };

/** Open tasks first, then the most urgent; tasks that tie keep the order they were added in. */
export function sortTasks(tasks: readonly Task[]): Task[] {
  return [...tasks].sort(
    (a, b) => Number(a.done) - Number(b.done) || urgency[a.priority] - urgency[b.priority],
  );
}
