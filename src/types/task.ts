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

// TaskFormData型はTask型からid、status、createdAt、updatedAtを除外する。
export type TaskFormData = Omit<
  Task,
  "id" | "status" | "createdAt" | "updatedAt"
>;
