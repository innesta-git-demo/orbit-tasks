import type { Task } from "../types";
import { TaskBadge } from "./TaskBadge";

interface TaskListItemProps {
  task: Task;
  onToggle: (id: string) => void;
}

export function TaskListItem({ task, onToggle }: TaskListItemProps) {
  return (
    <li className={task.done ? "task done" : "task"}>
      <label>
        <input type="checkbox" checked={task.done} onChange={() => onToggle(task.id)} />
        <span className="task-title">{task.title}</span>
      </label>
      <span className={`priority priority-${task.priority}`}>{task.priority}</span>
      <TaskBadge task={task} />
    </li>
  );
}
