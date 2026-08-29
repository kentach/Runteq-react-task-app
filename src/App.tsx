import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import TaskListPage from "./pages/tasks/TaskListPage";
import TaskDetailPage from "./pages/tasks/taskDetailPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tasks" element={<TaskListPage/>} >
          <Route path="/:id" element={<TaskDetailPage/>}/>
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
