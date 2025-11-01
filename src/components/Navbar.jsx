import { useContext } from "react"
import { NavLink } from "react-router"
import { UserContext } from "../context/UserContext"
import useScroll from "../hooks/useScroll";

export default function Navbar() {
    const [hasScrolled, scrollY] = useScroll();
    const { userData, userLogout } = useContext(UserContext);

    return (
        <nav ref={hasScrolled} className={scrollY > 0 ? "navbar-dark" : "navbar-light"}>
            <ul className="nav-list">
                <li className="nav-item">
                    <NavLink className="nav-link" to={"/"}>Home</NavLink>
                </li>

                <li className="nav-item">
                    <NavLink className="nav-link" to={"/posts"}>Posts (Hook)</NavLink>
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