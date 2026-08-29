import styles from "../styles/taskDetail.module.css";

interface TaskDeleteButtonProps {
  onDelete: () => void;
}

const TaskDeleteButton = ({ onDelete }: TaskDeleteButtonProps) => {
  return (
    <button type="button" onClick={onDelete} className={styles.taskDeleteBtn}>
      削除
    </button>
  );
};

export default TaskDeleteButton;
