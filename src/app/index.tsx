import { Routes, Route } from "react-router-dom";
import { Navbar } from "../components/navbar";
import { LoginPage, HomePage } from "./routes";

function App() {
    return (
        <main className="max-w-4xl mx-auto px-4">
            <Navbar />
            <div className="mt-2">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<LoginPage />} />
                </Routes>
            </div>
        </main>
    );
}

export default App;
