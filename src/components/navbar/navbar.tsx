import { NavLink } from "react-router-dom";
import "./navbar.css";
export const Navbar = () => {
    return (
        <nav className="mt-2 flex justify-between">
            <div className="text-xl font-semibold">GOBANK </div>
            <ul className="flex gap-3">
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/login">Login</NavLink>
                </li>
            </ul>
        </nav>
    );
};
