import type { Priority } from "../../../types/task";

export const getPriorityClass = (
  priority: Priority, // high| medium| lowを返す関数
  styles: Record<string, string>,
): string => {
  switch (priority.toLowerCase()) {
    case "high":
      return styles.highPriority;
    case "medium":
      return styles.mediumPriority;
    case "low":
      return styles.lowPriority;
    default:
      return styles.defaultPriority;
  }
};
