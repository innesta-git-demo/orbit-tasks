import { describe, expect, it } from "vitest";
import { daysUntilDue, dueDateLabel } from "../../src/filters/dueDate";
import { isOverdue } from "../../src/filters/overdue";
import type { Task } from "../../src/types";

const task = (dueDate?: string, done = false): Task => ({ id: "t", title: "Task", done, priority: "normal", dueDate });

describe("due dates", () => {
  it("counts the days until a task is due", () => {
    expect(daysUntilDue(task("2026-06-12"), "2026-06-10")).toBe(2);
    expect(daysUntilDue(task(), "2026-06-10")).toBeUndefined();
  });

  it("labels a task with its due date", () => {
    expect(dueDateLabel(task("2026-06-12"), "2026-06-10")).toBe("Due 2026-06-12");
    expect(dueDateLabel(task(), "2026-06-10")).toBeUndefined();
  });

  it("marks open tasks past their due date as overdue", () => {
    expect(isOverdue(task("2026-06-09"), "2026-06-10")).toBe(true);
    expect(isOverdue(task("2026-06-10"), "2026-06-10")).toBe(false);
    expect(isOverdue(task("2026-06-09", true), "2026-06-10")).toBe(false);
  });
});
