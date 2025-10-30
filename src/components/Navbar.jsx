import { NavLink } from "react-router"


export default function Navbar() {
    return (
        <nav className="navbar">
            <ul className="nav-list">
                <li>
                    <NavLink className="nav-link" to={"/"}>Home</NavLink>
                </li>
                <li>
                    <NavLink className="nav-link" to={"/info"}>Info</NavLink>
                </li>
                <li>
                    <NavLink className="nav-link" to={"/register"}>Register</NavLink>
                </li>
                <li>
                    <NavLink className="nav-link" to={"/login"}>Login</NavLink>
                </li>
            </ul>
        </nav>
    )
}