import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import TaskListPage from "./pages/tasks/TaskListPage";
import TaskDetailPage from "./pages/tasks/TaskDetailPage";
import TaskCreatePage from "./pages/tasks/taskCreatePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tasks" element={<TaskListPage />} />
        <Route path="/tasks/:id" element={<TaskDetailPage />} />
        <Route path="/tasks/new" element={<TaskCreatePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
