import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import TaskListPage from "./pages/tasks/TaskListPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tasks" element={<TaskListPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
