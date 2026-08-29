import { Link, useNavigate } from "react-router-dom";
import styles from "../styles/taskForm.module.css";
import TaskForm from "../components/TaskForm";

const TaskFormContainer = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <h1>新規タスクの作成</h1>
      <TaskForm />
      <div className={styles.cancelContainer}>
        <Link onClick={() => navigate("/tasks")} className={styles.cancelLink} to="/tasks">
          戻る
        </Link>
      </div>
    </div>
  );
};

export default TaskFormContainer;
