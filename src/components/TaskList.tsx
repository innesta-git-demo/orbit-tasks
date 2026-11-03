import type { Task } from "../types";
import { TaskListHeader } from "./TaskListHeader";
import { TaskListItem } from "./TaskListItem";

interface TaskListProps {
  tasks: readonly Task[];
  onToggle: (id: string) => void;
}

export function TaskList({ tasks, onToggle }: TaskListProps) {
  return (
    <section className="task-list">
      <TaskListHeader tasks={tasks} />
      {tasks.length === 0 ? (
        <p className="task-list-empty">No task matches this filter.</p>
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
