import TaskListProvider from "./context/TaskListContext";

import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

import "./App.css";

function App() {
  return (
    <TaskListProvider>
      <main id="tasks_manager">
        <Header heading="My tasks" />
        <section id="tasks">
          <TaskForm />
          <TaskList />
        </section>
      </main>
    </TaskListProvider>
  );
}

export default App;
