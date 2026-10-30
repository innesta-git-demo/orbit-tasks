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

  it("describes the due date from today in a few characters", () => {
    expect(dueDateLabel(task("2026-06-11"), "2026-06-10")).toBe("Tomorrow");
    expect(dueDateLabel(task("2026-06-14"), "2026-06-10")).toBe("In 4 days");
    expect(dueDateLabel(task("2026-06-07"), "2026-06-10")).toBe("3d overdue");
    expect(dueDateLabel(task(), "2026-06-10")).toBeUndefined();
  });

  it("marks open tasks past their due date as overdue", () => {
    expect(isOverdue(task("2026-06-09"), "2026-06-10")).toBe(true);
    expect(isOverdue(task("2026-06-10"), "2026-06-10")).toBe(false);
    expect(isOverdue(task("2026-06-09", true), "2026-06-10")).toBe(false);
  });
});
