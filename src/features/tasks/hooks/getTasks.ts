// タスク一覧ページに表示するタスクデータを取得

import type { Task } from "../../../types/task"
import { mockTasks } from "../mocks/task"

export const getTasks = async (): Promise<Task[]> => {
  return [...mockTasks]
}

// Promise =「後で結果を渡すための仕組み」
// async =「この関数はPromiseを返す」
// await =「Promiseの結果が返ってくるまで待つ」