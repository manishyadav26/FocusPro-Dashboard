import TodoList from "./components/TodoList";
import PomodoroTimer from "./components/Pomodoro";
import ProgressTracker from "./components/ProgressTracker";

function App() {
  return (
    <div className="bg-gray-900 min-h-screen text-white py-10">
      <h1 className="text-center text-4xl font-bold mb-6">✅ FocusPro Dashboard</h1>
      <TodoList />
      <PomodoroTimer/>
    </div>
  );
}

export default App;
