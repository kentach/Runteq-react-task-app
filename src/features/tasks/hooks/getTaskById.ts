// タスク詳細コンポーネントに表示する、タスク詳細データを取得する処理

import { mockTasks } from "../mocks/task";
import type { Task } from "../../../types/task";

export const getTaskById = async (id?: string): Promise<Task | undefined> => {
  if (!id) return undefined;

  const task = await mockTasks.find((task) => task.id === Number.parseInt(id));
  return task;
};
