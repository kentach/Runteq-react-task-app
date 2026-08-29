import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import TaskListPage from "./pages/tasks/TaskListPage";
import TaskDetailPage from "./pages/tasks/TaskDetailPage";
import TaskCreatePage from "./pages/tasks/taskCreatePage";
import TaskEditPage from "./pages/tasks/TaskEditPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tasks" element={<TaskListPage />} />
        <Route path="/tasks/:id" element={<TaskDetailPage />} />
        <Route path="/tasks/new" element={<TaskCreatePage />} />
        <Route path="/tasks/:id/edit" element={<TaskEditPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
