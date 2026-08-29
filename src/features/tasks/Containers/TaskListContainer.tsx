import { useEffect, useState } from "react";
import type { Task } from "../../../types/task";
import { getTasks } from "../hooks/getTasks";
import styles from "../styles/TaskListContainer.module.css";
import TaskCard from "../components/TaskCard";
import { updateTask } from "../hooks/updateTask";

// タスク一覧ページに表示するタスク一覧コンポーネント
const TaskListContainer = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  // タスクを取得する処理
  const fetchTasks = async () => {
    const fetchedTasks = await getTasks();
    setTasks(fetchedTasks);
  };

  // 初回表示時にタスクを取得
  useEffect(() => {
    const loadTasks = async () => {
      const fetchedTasks = await getTasks();
      setTasks(fetchedTasks);
    };

    loadTasks();
  }, []);

  // ステータス変更
  const handleToggleStatus = async (taskId: Task["id"], newStatus: boolean) => {
    await updateTask(String(taskId), {
      status: newStatus,
    });

    await fetchTasks();
  };

  return (
    <div className={styles.container}>
      <h1>タスク一覧へ</h1>
      <div className={styles.tableContainer}>
        <div className={styles.header}>
          <div>タスク名</div>
          <div>ステータス</div>
          <div>優先度</div>
          <div>期限日</div>
        </div>
        <div className={styles.taskList}>
          {tasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onToggleStatus={handleToggleStatus}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaskListContainer;
