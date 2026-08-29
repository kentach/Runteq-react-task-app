import { Link } from "react-router-dom";
import styles from "../styles/taskCard.module.css";
import type { Task } from "../../../types/task";
import { getPriorityClass } from "../utils/priority";
import { getStatusLabel } from "../utils/status-label";

interface TaskCardProps {
  task: Task;
  onToggleStatus: (
    taskId: Task["id"],
    newStatus: boolean
  ) => void;
}

const TaskCard = ({ task, onToggleStatus }: TaskCardProps) => {
  const handleStatusChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const newStatus = e.target.value === "true";

    onToggleStatus(task.id, newStatus);
  };

  return (
    <div className={styles.taskCard}>
      {/* タスク名 */}
      <Link
        to={`/tasks/${task.id}`}
        className={styles.detailLink}
      >
        <h3 className={styles.taskTitle}>
          {task.title}
        </h3>
      </Link>

      {/* ステータス */}
      <select
        value={task.status ? "true" : "false"}
        onChange={handleStatusChange}
        className={`${styles.badge} ${
          task.status
            ? styles.completed
            : styles.incomplete
        }`}
      >
        <option value="false">
          {getStatusLabel(false)}
        </option>

        <option value="true">
          {getStatusLabel(true)}
        </option>
      </select>

      {/* 優先順位 */}
      <span
        className={`${styles.badge} ${getPriorityClass(
          task.priority,
          styles
        )}`}
      >
        {task.priority}
      </span>

      {/* 期限 */}
      <p className={styles.taskDueDate}>
        {task.dueDate}
      </p>
    </div>
  );
};

export default TaskCard;