import { useState, useEffect } from "react"

function Navbar({toggleTheme, isDarkMode}){
    const [time, setTime]= useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => setTime(new Date()),1000);
        return () => clearInterval(interval);
    }, []);

    return(
        <nav className="flex items-center justify-between px-6 py-4 bg-gray-800 text-white shadow-md">
            <h1 className="text-2xl font-bold">🧠 FocusPro</h1>

            <div className="flex items-center space-x-4">
                <span className="text-sm">{time.toLocaleTimeString()}</span>
                <button
                onClick={toggleTheme}
                className="bg-gray-600 px-3 py-1 rounded hover:bg-gray-500 transition">
                    {isDarkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
                </button>
            </div>
        </nav>
    );
}


export default Navbar;