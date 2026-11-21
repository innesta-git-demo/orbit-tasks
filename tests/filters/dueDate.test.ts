import { describe, expect, it } from "vitest";
import { daysUntilDue, dueDateLabel, matchesDueDate } from "../../src/filters/dueDate";
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

describe("due date filter", () => {
  const today = "2026-06-10";

  it("keeps every task when the filter is off", () => {
    expect(matchesDueDate(task(), "any", today)).toBe(true);
    expect(matchesDueDate(task("2026-06-01"), "any", today)).toBe(true);
  });

  it("selects tasks by how soon they are due", () => {
    expect(matchesDueDate(task("2026-06-09"), "overdue", today)).toBe(true);
    expect(matchesDueDate(task("2026-06-10"), "today", today)).toBe(true);
    expect(matchesDueDate(task("2026-06-16"), "thisWeek", today)).toBe(true);
    expect(matchesDueDate(task("2026-06-17"), "later", today)).toBe(true);
  });

  it("leaves out tasks without a due date once a range is chosen", () => {
    expect(matchesDueDate(task(), "today", today)).toBe(false);
  });

  it("keeps done tasks out of the overdue range", () => {
    expect(matchesDueDate(task("2026-06-09", true), "overdue", today)).toBe(false);
  });
});
