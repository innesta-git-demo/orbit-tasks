import { describe, expect, it } from "vitest";
import { summarize } from "../src/stats";
import type { Task } from "../src/types";

const task = (id: string, done: boolean): Task => ({ id, title: `Task ${id}`, done, priority: "normal" });

describe("summarize", () => {
  it("counts the completed tasks", () => {
    expect(summarize([task("1", true), task("2", false), task("3", true)]).done).toBe(2);
  });
});
