import { useState } from "react";
import { FilterBar } from "./components/FilterBar";
import { TaskList } from "./components/TaskList";
import { sampleTasks } from "./data/sampleTasks";
import { matchesStatus, type StatusFilter } from "./filters/status";
import { sortTasks } from "./rules/taskRules";

export function App() {
  const [tasks, setTasks] = useState(sampleTasks);
  const [status, setStatus] = useState<StatusFilter>("all");

  function toggle(id: string) {
    setTasks((current) => current.map((task) => (task.id === id ? { ...task, done: !task.done } : task)));
  }

  const visible = sortTasks(tasks.filter((task) => matchesStatus(task, status)));

  return (
    <main className="app">
      <h1>Orbit Tasks</h1>
      <FilterBar status={status} onChange={setStatus} />
      <TaskList tasks={visible} onToggle={toggle} onShowAll={() => setStatus("all")} />
    </main>
  );
}
