export type Priority = "high" | "normal" | "low";

export interface Task {
  id: string;
  title: string;
  done: boolean;
  priority: Priority;
}
