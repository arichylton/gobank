import { useState } from "react";
import { getUsers } from "../../api";
import { UserInput } from "../../types";

export const InputForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault(); // Prevent page reload
        const newUser: UserInput = {
            name,
            email,
            password,
        };
        getUsers(newUser);
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col justify-center">
            <div>
                <label htmlFor="name">Name:</label>
                <input
                    id="name"
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="bg-white ms-2 mb-2 text-black"
                />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-white ms-2 mb-2 text-black"
                />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input
                    id="password"
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="bg-white ms-2 mb-2 text-black"
                />
            </div>
            <button
                className="bg-black w-1/3 text-white p-2 rounded"
                type="submit"
            >
                Submit
            </button>
        </form>
    );
};
