import styles from "../styles/taskForm.module.css";

const TaskForm = () => {
  return (
    <form className={styles.form}>
      <div className={styles.formGroup}>
        <label htmlFor="">タスク名：</label>
        <input type="text" name="title"/>
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="">説明：</label>
        <textarea name="description" required />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="">優先度</label>
        <select name="priority" id="">
          <option value="">高</option>
          <option value="">中</option>
          <option value="">低</option>
        </select>
      </div>

      <div className={styles.formGroup}>
        <label>期限日：</label>
        <input type="date" name="dueDate" required />
      </div>

      <button type="submit" className={styles.submitButton}>
        作成する
      </button>
      
    </form>
  );
};

export default TaskForm;
