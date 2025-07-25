import React,  {useState} from "react"
import ProgressTracker from "./ProgressTracker";
function TodoList(){
    const[tasks, setTasks] = useState([]);
    const[input, setInput]= useState("");
    const addTask = () => {
        if (input.trim() == "") return;
        setTasks([...tasks,{text:input, done: false, createdAt: new Date().toISOString().slice(0, 10) }]);
        setInput("");
    };
    const toggleTask = (index) => {
        const newTasks = [...tasks];
        newTasks[index].done = !newTasks[index].done;
        setTasks(newTasks)
    };
    const deleteTask = (index) => {
        const newTasks = tasks.filter((_, i) => i !== index);
        setTasks(newTasks);
    };

    const getWeeklyProgress = (tasks) => {
    const today = new Date();
    const last7Days = [];

    for(let i = 6;i>=0; i--){
        const date = new Date(today);
        date.setDate(today.getDate() - i);
        last7Days.push({
            date: date.toISOString().slice(0, 10),
            day: date.toLocaleDateString('en-US', { weekday:'short' }),
            tasks:0,
        }); 
    }
    tasks.forEach(task => {
        if(task.done) {
            const match = last7Days.find(d => d.date === task.createdAt);
            if(match){
                match.tasks += 1;
            }
        }
    });

    return last7Days.map(d => ({
        days: d.day,
        tasks: d.tasks,
    }));
};

    return (
        <div className="max-w-md mx-auto p-6 bg-white rounded-2xl shadow-xl mt-8 text-black">
            <h2 className="text-2xl font-bold mb-4"> 📝 Todo List</h2>

            <div className="flex gap-2 mb-4">
                <input className="flex-1 border border-gray-300 rounded px-3 py-3"
                placeholder="Add a task.."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                 />
                 <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                 onClick={addTask}
                 >
                    Add
                 </button>
            </div>

            <ul className="space-y-2">
                {tasks.map((task,index) => (
                    <li key={index} className="flex justify-between items-center bg-gray-100 p-2 rounded">
                        <span 
                        onClick={() => toggleTask(index)}
                        className={'cursor-pointer flex-1 ${task.done ? "line-through text-gray-500" : ""}'}
                        >
                            {task.text}
                        </span>
                        <button
                        className="text-red-500 hover:text-red-700 font-bold"
                        onClick={() => deleteTask(index)}
                        >
                           ❌ 
                        </button>
                    </li>
                ))}
            </ul>
            <ProgressTracker data={getWeeklyProgress(tasks)} />
        </div>
    );
}



export default TodoList;