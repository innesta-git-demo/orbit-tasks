const CALENDAR_DATE = /^(\d{4})-(\d{2})-(\d{2})$/;
const DAY = 24 * 60 * 60 * 1000;

/** A calendar date such as 2026-10-25 as a day number, read the same in every time zone. */
export function parseCalendarDate(value: string): number | undefined {
  const match = CALENDAR_DATE.exec(value);
  if (!match) return undefined;
  return Date.UTC(Number(match[1]), Number(match[2]) - 1, Number(match[3])) / DAY;
}

/** Whole days from one calendar date to another, or undefined if either is not one. */
export function daysBetween(from: string, to: string): number | undefined {
  const start = parseCalendarDate(from);
  const end = parseCalendarDate(to);
  return start === undefined || end === undefined ? undefined : end - start;
}
