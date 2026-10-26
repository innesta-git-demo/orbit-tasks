import type { Task } from "../types";
import { TaskListHeader } from "./TaskListHeader";
import { TaskListItem } from "./TaskListItem";

interface TaskListProps {
  tasks: readonly Task[];
  onToggle: (id: string) => void;
  /** Offered when nothing matches, so an empty list is never a dead end. */
  onShowAll: () => void;
}

export function TaskList({ tasks, onToggle, onShowAll }: TaskListProps) {
  return (
    <section className="task-list">
      <TaskListHeader tasks={tasks} />
      {tasks.length === 0 ? (
        <div className="task-list-empty">
          <p>No task matches this filter.</p>
          <button type="button" onClick={onShowAll}>
            Show all tasks
          </button>
        </div>
      ) : (
        <ul>
          {tasks.map((task) => (
            <TaskListItem key={task.id} task={task} onToggle={onToggle} />
          ))}
        </ul>
      )}
    </section>
  );
}
