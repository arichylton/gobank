// import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { Navbar } from "../components/navbar";
import { getUsers } from "../api";
function App() {
    useEffect(() => {
        getUsers();
    }, []);
    return (
        <div className="max-w-4xl mx-auto px-4">
            <Navbar />
            <main className="mt-6">
                <h1 className="text-2xl font-bold">Welcome to My App</h1>
            </main>
        </div>
    );
}

export default App;
