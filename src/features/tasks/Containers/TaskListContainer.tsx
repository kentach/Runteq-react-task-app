import { Link } from "react-router-dom";

// タスク一覧ページに表示するタスク一覧コンポーネント


const TaskListContainer = () => {

  return (
    <div>
      <h1>タスク一覧へ</h1>
      <div>
        <Link to="/login">
          <h3>ログイン機能を実装をする</h3>
        </Link>
        <p>ステータス : 未完了</p>
        <p>優先度 : 高</p>
        <p>期限日 : 2025-02-10</p>
      </div>
    </div>
  );
};

export default TaskListContainer;
