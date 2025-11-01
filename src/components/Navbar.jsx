import { useContext } from "react"
import { NavLink } from "react-router"
import { UserContext } from "../context/UserContext"


export default function Navbar() {

    const { userData, userLogout } = useContext(UserContext);

    return (
        <nav className="navbar">
            <ul className="nav-list">
                <li className="nav-item">
                    <NavLink className="nav-link" to={"/"}>Home</NavLink>
                </li>

                {
                    (!userData && (
                        <>
                            <li className="nav-item">
                                <NavLink className="nav-link" to={"/register"}>Register</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link" to={"/login"}>Login</NavLink>
                            </li>
                        </>

                    ) || (
                        <>
                            <li className="nav-item">
                                <NavLink className="nav-link" to={"/info"}>Info</NavLink>
                            </li>
                            <li className="nav-item">
                                <button type="button" className="btn btn-primary" onClick={userLogout}>Logout</button>
                            </li>
                        </>

                        )
                    )
                }
            </ul>
        </nav>
    )
}