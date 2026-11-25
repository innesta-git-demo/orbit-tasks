import { describe, expect, it } from "vitest";
import { isPastDue } from "../../src/filters/dueDate";
import type { Task } from "../../src/types";

const now = new Date(2026, 5, 10, 15, 30);
const task = (dueDate?: string, done = false): Task => ({ id: "t", title: "Task", done, priority: "normal", dueDate });

describe("Overdue badge", () => {
  it("marks open tasks past their due date", () => {
    expect(isPastDue(task("2026-06-09"), now)).toBe(true);
  });

  it("leaves done and undated tasks alone", () => {
    expect(isPastDue(task("2026-06-09", true), now)).toBe(false);
    expect(isPastDue(task(), now)).toBe(false);
  });

  it("doesn't count a task due today as overdue", () => {
    expect(isPastDue(task("2026-06-10"), now)).toBe(false);
  });

  it("leaves tasks due later alone", () => {
    expect(isPastDue(task("2026-06-12"), now)).toBe(false);
  });
});
