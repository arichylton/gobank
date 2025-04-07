// import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { Navbar } from "../components/navbar";
import { getUsers } from "../api";
import { UserInput } from "../types";
function App() {
    useEffect(() => {
        const newUser: UserInput = {
            name: "Aric",
            email: "Arich212@gmail.com",
            password: "pa55word",
        };
        getUsers(newUser);
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
