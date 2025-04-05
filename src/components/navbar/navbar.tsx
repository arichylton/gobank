import { NavLink } from "react-router-dom";
export const Navbar = () => {
    return (
        <nav className="flex justify-between">
            <div>
            <div className="text-xl">GOBANK</div>
            </div>
            <ul className="flex gap-3">
                <li className="flex-auto">
                    <NavLink to="/">Home</NavLink>
                </li>
                <li className="flex-auto">
                    <NavLink to="/about">About</NavLink>
                </li>
            </ul>
        </nav>
    );
};
