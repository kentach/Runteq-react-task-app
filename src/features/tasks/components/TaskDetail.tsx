import styles from "../styles/taskDetail.module.css";
import { getPriorityClass } from "../utils/priority"; // getPriorityClass関数をimport
import { getStatusLabel } from "../utils/status-label"; // getStatusLabel関数をimport
import type { Task } from "../../../types/task";
import { Link } from "react-router-dom";

type Props = {
  task: Task;
};

const TaskDetail = ({ task }: Props) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{task.title}</h1>
      <p className={styles.description}>{task.description}</p>

      <p className={styles.info}>
        ステータス:{" "}
        <span
          className={`${styles.badge} ${
            task.status ? styles.completed : styles.incomplete
          }`}
        >
          {getStatusLabel(task.status)}
        </span>
      </p>

      {/* importしたgetStatusLabel関数を使用して、引数にstatusを渡す */}
      <p className={styles.info}>
        優先度 :{" "}
        <span
          className={`${styles.badge} ${getPriorityClass(
            task.priority,
            styles,
          )}`}
        >
          {task.priority}
        </span>
      </p>

      <div className={styles.links}>
        <Link to={`/tasks/${task.id}/edit`} className={styles.editLink}>
          編集する
        </Link>
        <Link to="/tasks" className={styles.backLink}>
          戻る
        </Link>
      </div>
    </div>
  );
};

export default TaskDetail;
