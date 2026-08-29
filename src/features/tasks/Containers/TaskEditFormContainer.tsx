import { Link, useNavigate, useParams } from "react-router-dom";
// import TaskForm from "../components/TaskForm";
import styles from "../styles/taskForm.module.css";
import { useEffect, useState } from "react";
import type { Priority, TaskFormData } from "../../../types/task";
import TaskForm from "../components/TaskForm";
import { getTaskById } from "../hooks/getTaskById";
import { updateTask } from "../hooks/updateTask";

const TaskEditFormContainer = () => {
  const { id } = useParams<{ id?: string }>();

  const navigate = useNavigate();
  const [formData, setFormData] = useState<TaskFormData | null>(null);

  // コンポーネントマウント時に、指定されたIDのタスクデータを取得
  useEffect(() => {
    const fetchTask = async () => {
      const task = await getTaskById(id);
      if (task) {
        setFormData({
          title: task.title,
          description: task.description,
          priority: task.priority,
          dueDate: task.dueDate,
        });
      }
    };
    fetchTask();
  }, [id]);

  if (!formData) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "300px",
        }}
      >
        読み込み中...
      </div>
    );
  }

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      if (!prev) return prev;

      return {
        ...prev,
        [name]: name === "priority" ? (value as Priority) : value,
      };
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!id) return;
    await updateTask(id, formData);
    navigate(`/tasks/${id}`);
  };

  return (
    <div className={styles.container}>
      <h1>タスク編集</h1>

      <TaskForm
        formData={formData}
        onChange={handleChange}
        onSubmit={handleSubmit}
        id={id}
      />

      <div className={styles.cancelContainer}>
        <Link to={`/tasks/${id}`} className={styles.cancelLink}>
          戻る
        </Link>
      </div>
    </div>
  );
};

export default TaskEditFormContainer;
