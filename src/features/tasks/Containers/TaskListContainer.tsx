import { useEffect, useState } from "react";
import type { Task } from "../../../types/task";
import { getTasks } from "../hooks/getTasks";
import styles from "../styles/TaskListContainer.module.css"
import TaskCard from "../components/TaskCard";
import { Link } from "react-router-dom";

// タスク一覧ページに表示するタスク一覧コンポーネント
const TaskListContainer = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  // useEffectを使用し、読み込み時のみに実行
  useEffect(() => {
    const fetchTasks = async () => {
      const fetchedTasks = await getTasks(); // mockデータからtasksを取得
      setTasks(fetchedTasks); // taskを表示
    };
    fetchTasks();
  }, []);

  return (
    <div className={styles.container}>
      <h1>タスク一覧へ</h1>
      <div className={styles.taskListHeader}>  {/* タスク作成ページへのリンクを追加 */}
        <Link to="/tasks/new" className={styles.newTaskLink}>
          新規作成
        </Link>
      </div>
      <div className={styles.tableContainer}>
        <div className={styles.header}>
          <div>タスク名</div>
          <div>ステータス</div>
          <div>優先度</div>
          <div>期限日</div>
        </div>
        <div className={styles.taskList}>
          {tasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaskListContainer;
