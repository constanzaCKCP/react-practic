import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

function App() {
  return (
    <main className="bg-gray-400 h-screen mx-auto mx-w-md">
      <div className="container mx-auto text-center ">
        <TaskForm  />
        <TaskList />
      </div>
    </main>
  );
}

export default App;
