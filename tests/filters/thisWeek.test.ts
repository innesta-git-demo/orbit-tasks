import { describe, expect, it } from "vitest";
import { isDueThisWeek } from "../../src/filters/dueDate";
import type { Task } from "../../src/types";

const today = "2026-06-10";
const task = (dueDate?: string): Task => ({ id: "t", title: "Task", done: false, priority: "normal", dueDate });

describe("This week", () => {
  it("counts today and the next six days", () => {
    expect(isDueThisWeek(task("2026-06-10"), today)).toBe(true);
    expect(isDueThisWeek(task("2026-06-16"), today)).toBe(true);
  });

  it("leaves out later, overdue and undated tasks", () => {
    expect(isDueThisWeek(task("2026-06-17"), today)).toBe(false);
    expect(isDueThisWeek(task("2026-06-09"), today)).toBe(false);
    expect(isDueThisWeek(task(), today)).toBe(false);
  });
});
