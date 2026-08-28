import { Link } from "react-router-dom";
import styles from "../../assets/home.module.css";

const HomePage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>タスク管理アプリ</h1>
      <p className={styles.description}>タスク管理アプリです。。。</p>
      <Link className={styles.link} to="/tasks">
        タスク一覧へ
      </Link>
    </div>
  );
};

export default HomePage;
