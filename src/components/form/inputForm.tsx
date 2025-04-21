import { useState } from "react";
import { getUsers } from "../../api";
import { UserInput } from "../../types";

export const InputForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newUser: UserInput = { name, email, password };
        getUsers(newUser);
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="max-w-md mx-auto mt-10 p-6 bg-white rounded-2xl shadow-md space-y-4 text-black"
        >
            <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">
                Create Account
            </h2>

            <div className="flex flex-col">
                <label
                    htmlFor="name"
                    className="mb-1 font-medium text-gray-700"
                >
                    Name
                </label>
                <input
                    id="name"
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div className="flex flex-col">
                <label
                    htmlFor="email"
                    className="mb-1 font-medium text-gray-700"
                >
                    Email
                </label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div className="flex flex-col">
                <label
                    htmlFor="password"
                    className="mb-1 font-medium text-gray-700"
                >
                    Password
                </label>
                <input
                    id="password"
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <button
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition-colors"
                type="submit"
            >
                Submit
            </button>
        </form>
    );
};
