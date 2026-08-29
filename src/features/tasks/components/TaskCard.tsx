import { Link } from "react-router-dom";
import styles from "../styles/taskCard.module.css";
import type { Priority, Task } from "../../../types/task";

interface TaskCardProps {
  task: Task;
}

const getPriorityClass = (priority: Priority) => {
  switch (priority.toLowerCase()) {
    case "high":
      return styles.highPriority;
    case "medium":
      return styles.mediumPriority;
    case "low":
      return styles.lowPriority;
  }
};

const getStatusLabel = (status: boolean): string => {
  return status ? "完了" : "未完了";
};

const TaskCard = ({ task }: TaskCardProps) => {
  return (
    <div className={styles.taskCard}>
      <Link to={`/task/${task.id}`} className={styles.detailLink}>
        <h3 className={styles.taskTitle}>{task.title}</h3>
      </Link>
      <p
        className={`${styles.badge} ${task.status ? styles.completed : styles.incomplete}`}
      >
        {getStatusLabel(task.status)}
      </p>
      <p className={`${styles.badge} ${getPriorityClass(task.priority)}`}>
        {task.priority}
      </p>
      <p className={styles.taskDueDate}>{task.dueDate}</p>
    </div>
  );
};

export default TaskCard;
