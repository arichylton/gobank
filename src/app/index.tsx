// import { Routes, Route } from "react-router-dom";
import { Navbar } from "../components/navbar";
import { InputForm } from "../components/form";
function App() {
    return (
        <div className="max-w-4xl mx-auto px-4">
            <Navbar />
            <main className="mt-6">
                <h1 className="text-2xl font-bold">Welcome to My App</h1>
                <div className="mt-4 w-1/3">
                    <InputForm />
                </div>
            </main>
        </div>
    );
}

export default App;
