import { useState, useEffect } from "react";

function PomodoroTimer() {
    const [secondsLeft, setSecondsLeft] = useState(1500);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let timer;
        if(isRunning && secondsLeft > 0) {
            timer = setInterval(() => {
                setSecondsLeft((prev) => prev - 1);
            }, 1000);
    }
return () => clearInterval(timer);
}, [isRunning, secondsLeft]);

const formatTime =  (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
};

const startPause = () => setIsRunning(!isRunning);
const reset = () => {
    setSecondsLeft(1500);
    setIsRunning(false);
};

return (
    <div className="bg-gray-800 p-6 rounded-xl shadow-lg text-center max-w-md mx-auto">
      <h2 className="text-2xl font-semibold mb-4">⏱ Pomodoro Timer</h2>
      <div className="text-6xl font-mono mb-6">{formatTime(secondsLeft)}</div>
      <div className="space-x-4">
        <button onClick={startPause} className="bg-green-500 px-4 py-2 rounded">
          {isRunning ? "Pause" : "Start"}
        </button>
        <button onClick={reset} className="bg-red-500 px-4 py-2 rounded">
          Reset
        </button>
      </div>
    </div>
  );
}

export default PomodoroTimer;