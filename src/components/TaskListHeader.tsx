import { summarize } from "../stats";
import type { Task } from "../types";

export function TaskListHeader({ tasks }: { tasks: readonly Task[] }) {
  const { done, total } = summarize(tasks);
  return (
    <header className="task-list-header">
      <h2>Tasks</h2>
      <p>
        {done} of {total} done
      </p>
    </header>
  );
}
