import type { Task, TaskFormData } from "../../../types/task";
import { mockTasks } from "../mocks/task";

export const createTask = async (taskData: TaskFormData): Promise<Task> => {
  const newTask: Task = {
    ...taskData,
    id: mockTasks.length,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    status: false,
  };

  mockTasks.push(newTask)

  return newTask
};
