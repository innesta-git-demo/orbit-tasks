import type { Task } from "./types";

export interface TaskSummary {
  done: number;
  total: number;
}

export function summarize(tasks: readonly Task[]): TaskSummary {
  return {
    done: tasks.filter((task) => task.done).length,
    total: tasks.length,
  };
}
