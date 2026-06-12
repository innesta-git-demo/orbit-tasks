import { useState } from "react";
import { TaskList } from "./components/TaskList";
import { sampleTasks } from "./data/sampleTasks";
import { sortTasks } from "./rules/taskRules";

export function App() {
  const [tasks, setTasks] = useState(sampleTasks);

  function toggle(id: string) {
    setTasks((current) => current.map((task) => (task.id === id ? { ...task, done: !task.done } : task)));
  }

  return (
    <main className="app">
      <h1>Orbit Tasks</h1>
      <TaskList tasks={sortTasks(tasks)} onToggle={toggle} />
    </main>
  );
}
