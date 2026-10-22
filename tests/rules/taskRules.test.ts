import { describe, expect, it } from "vitest";
import { sortTasks } from "../../src/rules/taskRules";
import type { Task } from "../../src/types";

const task = (id: string, title: string, done = false, priority: Task["priority"] = "normal"): Task => ({
  id,
  title,
  done,
  priority,
});

const ids = (tasks: Task[]) => tasks.map((t) => t.id);

describe("sortTasks", () => {
  it("puts open tasks before completed ones", () => {
    expect(ids(sortTasks([task("1", "Archive notes", true), task("2", "Write report")]))).toEqual(["2", "1"]);
  });

  it("puts the soonest due first and tasks without a due date last", () => {
    const tasks = [
      { ...task("1", "Write report"), dueDate: "2026-06-20" },
      task("2", "Book room"),
      { ...task("3", "Send invoice"), dueDate: "2026-06-12" },
    ];
    expect(ids(sortTasks(tasks))).toEqual(["3", "1", "2"]);
  });

  it("leaves the original list untouched", () => {
    const tasks = [task("1", "Write report"), task("2", "Book room")];
    sortTasks(tasks);
    expect(ids(tasks)).toEqual(["1", "2"]);
  });
});
