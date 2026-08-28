export type Priority = "high" | "medium" | "low"; // リテラル型

export interface Task {
  id: number;
  title: string;
  description: string;
  status: boolean;
  priority: Priority;
  dueDate: string;
  createdAt: string;
  updatedAt: string;
}
