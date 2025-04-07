import { UserInput } from "../types";

export const getUsers = async (newUser: UserInput) => {
    const url = "http://localhost:4000/v1/users";
    const { name, email, password } = newUser;
    try {
        const response = await fetch(url, {
            method: "POST",
            body: JSON.stringify({
                name,
                email,
                password,
            }),
        });
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        console.log(json);
    } catch (e) {
        const result = (e as Error).message;
        console.log(result);
    }
};
