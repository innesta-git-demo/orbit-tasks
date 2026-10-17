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

  it("puts the most urgent tasks first", () => {
    const tasks = [task("1", "Water the plants", false, "low"), task("2", "Fix the login", false, "high"), task("3", "Reply to the client")];
    expect(ids(sortTasks(tasks))).toEqual(["2", "3", "1"]);
  });

  it("orders tasks of the same priority by title", () => {
    expect(ids(sortTasks([task("1", "Write report"), task("2", "Book room")]))).toEqual(["2", "1"]);
  });

  it("leaves the original list untouched", () => {
    const tasks = [task("1", "Write report"), task("2", "Book room")];
    sortTasks(tasks);
    expect(ids(tasks)).toEqual(["1", "2"]);
  });
});
