import { describe, expect, it } from "vitest";
import { daysBetween, parseCalendarDate } from "../../src/utils/dates";

describe("calendar dates", () => {
  it("reads only dates written as year, month and day", () => {
    expect(parseCalendarDate("2026-06-10")).toBeDefined();
    expect(parseCalendarDate("10/06/2026")).toBeUndefined();
  });

  it("counts the days between two dates across a month", () => {
    expect(daysBetween("2026-05-30", "2026-06-02")).toBe(3);
    expect(daysBetween("2026-06-02", "2026-05-30")).toBe(-3);
  });
});
