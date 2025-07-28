import React, { useState, useEffect } from "react";

import TodoList from "./components/TodoList";
import PomodoroTimer from "./components/Pomodoro";
import ProgressTracker from "./components/ProgressTracker";
import Navbar from "./components/Navbar";
import QuoteBox from "./components/QuoteBox";




function App() {
  const[isDarkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
    }, [isDarkMode]);
  
    const toggleTheme = () => setDarkMode(isDarkMode);

  return (
    <div className={`min-h-screen ${isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"}`}>
      <Navbar toggleTheme={toggleTheme} isDarkMode={isDarkMode}/>
    <div className="px-4">
      <h1 className="text-center text-4xl font-bold mb-6">✅ FocusPro Dashboard</h1>
      <QuoteBox/>
      <TodoList />
      <PomodoroTimer/>
    </div>
    </div>
  );
}

export default App;
