import { Link, useNavigate } from "react-router-dom";
import styles from "../styles/taskForm.module.css";
import TaskForm from "../components/TaskForm";
import type { TaskFormData } from "../../../types/task";
import { useState } from "react";
import { createTask } from "../hooks/createTask";

const TaskFormContainer = () => {
  const navigate = useNavigate();

  // フォームに入力された値をまとめて管理するためのstateを更新する関数
  const [formData, setFormData] = useState<TaskFormData>({
    title: "",
    description: "",
    priority: "medium", // 初期値として medium を設定
    dueDate: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target; // e.target.nameとe.target.valueを分割代入
    // 今のformDataをコピーして、変更された項目だけ新しい値に置き換える
    // prev ...  変更する前のformData
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // taskの作成完了まで待つ
    await createTask(formData); // フォームに入力されているデータを使ってタスクを作成
    navigate("/tasks");
  };

  return (
    <div className={styles.container}>
      <h1>新規タスクの作成</h1>
      <TaskForm
        onChange={handleChange}
        formData={formData}
        onSubmit={handleSubmit}
      />
      <div className={styles.cancelContainer}>
        <Link
          onClick={() => navigate("/tasks")}
          className={styles.cancelLink}
          to="/tasks"
        >
          戻る
        </Link>
      </div>
    </div>
  );
};

export default TaskFormContainer;
