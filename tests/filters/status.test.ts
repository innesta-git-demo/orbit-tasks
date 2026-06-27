import { describe, expect, it } from "vitest";
import { matchesStatus } from "../../src/filters/status";
import type { Task } from "../../src/types";

const open: Task = { id: "1", title: "Open", done: false, priority: "normal" };
const done: Task = { ...open, id: "2", done: true };

describe("matchesStatus", () => {
  it("keeps every task for all", () => {
    expect([open, done].filter((task) => matchesStatus(task, "all"))).toEqual([open, done]);
  });

  it("keeps only the open or only the completed tasks", () => {
    expect(matchesStatus(open, "open")).toBe(true);
    expect(matchesStatus(done, "open")).toBe(false);
    expect(matchesStatus(done, "done")).toBe(true);
  });
});
