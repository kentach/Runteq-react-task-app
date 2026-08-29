import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import TaskDetail from "../components/TaskDetail";
import styles from "../styles/taskDetail.module.css";
import { deleteTask } from "../hooks/deleteTask";
import { getTaskById } from "../hooks/getTaskById";
import type { Task } from "../../../types/task";
import TaskDeleteButton from "../components/TaskDeleteButton";

const TaskDetailContainer = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id?: string }>();

  const [task, setTask] = useState<Task | null>(null);

  useEffect(() => {
    const fetchTask = async () => {
      if (!id) return;

      const fetchedTask = await getTaskById(id);

      setTask(fetchedTask ?? null);
    };

    fetchTask();
  }, [id]);

  const handleDelete = async () => {
    if (!id) return;

    const result = window.confirm("本当に削除しますか？");

    if (!result) return;

    const deleted = await deleteTask(id);

    if (deleted) {
      navigate("/tasks");
    }
  };

  if (!task) {
    return <div>読み込み中...</div>;
  }

  return (
    <div className={styles.taskDetailContainer}>
      <TaskDetail task={task} />
      <div>
        <TaskDeleteButton onDelete={handleDelete} />
      </div>
    </div>
  );
};

export default TaskDetailContainer;
