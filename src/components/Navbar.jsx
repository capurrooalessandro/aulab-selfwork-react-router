import { useContext, useState } from "react"
import { NavLink } from "react-router"
import { UserContext } from "../context/UserContext"

export default function Navbar() {
    const { userData, userLogout } = useContext(UserContext);
    const [collapse, setCollapse] = useState(false);

    return (
        <nav className="navbar sticky top-0 bg-base-200 dark:bg-base-100 shadow-sm lg:p-1 p-0 z-2">
            <section className="navbar-start">
                <div className="lg:hidden">
                    <div className="collapse overflow-visible">
                        <input id="mobile-menu" type="checkbox" checked={collapse} onChange={(e) => setCollapse(e.target.checked)}/>
                        <div className="collapse-title">
                            <button
                                type="button"
                                className="btn btn-ghost"
                                aria-controls="mobile-nav-panel"
                                aria-expanded={false}
                            >   
                            {
                                (!collapse &&
                                    (
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6"
                                            fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2 6h21m-21 8h21m-21 8h21" /> 
                                        </svg>
                                    ) || (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" 
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                        <path strokeLinecap="round"  strokeWidth="2" d="M4 4L22 22M22 4L4 22"/>
                                    </svg>
                                    )
                                )
                            }

                            </button>
                        </div>
                        <div id="mobile-nav-panel" className="collapse-content transition-none p-0">
                            <ul className="menu menu-lg w-screen max-w-[calc(100svw-1rem)] bg-base-100 p-0 m-0 [&>li>*]:justify-center">
                                <li className="ps-3 py-1">
                                    <NavLink
                                        to={"/"}
                                        className="aria-[current=page]:bg-neutral-300 dark:aria-[current=page]:bg-neutral-600 
                                            hover:bg-neutral-400 dark:hover:bg-neutral-700"
                                        onClick={() => setCollapse(false)}
                                    >
                                        Home
                                    </NavLink>
                                </li>
                                {
                                    (!userData && (
                                        <>
                                            <li className="ps-3 py-1">
                                                <NavLink 
                                                    to={"/register"} 
                                                    className="aria-[current=page]:bg-neutral-700 hover:bg-neutral-800"
                                                    onClick={() => setCollapse(false)}
                                                >
                                                    Register
                                                </NavLink>
                                            </li>
                                            <li className="ps-3 py-1">
                                                <NavLink 
                                                    to={"/login"} 
                                                    className="aria-[current=page]:bg-neutral-700 hover:bg-neutral-800" 
                                                    onClick={() => setCollapse(false)}
                                                >
                                                    Login
                                                </NavLink>
                                            </li>
                                        </>
                                    ) || (
                                            <>
                                                <li className="ps-3 py-1">
                                                    <NavLink 
                                                        to={"/info"} 
                                                        className="aria-[current=page]:bg-neutral-700 hover:bg-neutral-800" 
                                                        onClick={() => setCollapse(false)}
                                                    >
                                                        Info
                                                    </NavLink>
                                                </li>
                                            </>
                                        )
                                    )
                                }
                                <li className="ps-3 py-1"> 
                                    <NavLink 
                                        to={"/posts"} 
                                        className="aria-[current=page]:bg-neutral-700 hover:bg-neutral-800" 
                                        onClick={() => setCollapse(false)}
                                    >
                                        Posts
                                    </NavLink>
                                </li>
                                {
                                    (userData && (
                                        <>
                                            <hr className="border-neutral-700 my-3"/>
                                            <li className="ps-3 py-1 mb-3">
                                                <button type="button" className="btn btn-error" onClick={() => {userLogout(), setCollapse(false)}}>Logout</button>
                                            </li>
                                        </>
                                    )
                                    )
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal text-[18px] px-1">
                    <li className="px-1">
                        <NavLink to={"/"} className="aria-[current=page]:bg-neutral-300 dark:aria-[current=page]:bg-neutral-600 hover:bg-neutral-200 dark:hover:bg-neutral-700">Home</NavLink>
                    </li>
                    {
                        (!userData && (
                            <>
                                <li className="px-1">
                                    <NavLink to={"/register"} className="aria-[current=page]:bg-neutral-300 dark:aria-[current=page]:bg-neutral-600 hover:bg-neutral-200 dark:hover:bg-neutral-700">Register</NavLink>
                                </li>
                                <li className="px-1">
                                    <NavLink to={"/login"} className="aria-[current=page]:bg-neutral-300 dark:aria-[current=page]:bg-neutral-600 hover:bg-neutral-200 dark:hover:bg-neutral-700">Login</NavLink>
                                </li>
                            </>
                        ) || (
                                <>
                                    <li className="px-1">
                                        <NavLink to={"/info"} className="aria-[current=page]:bg-neutral-300 dark:aria-[current=page]:bg-neutral-600 hover:bg-neutral-200 dark:hover:bg-neutral-700">Info</NavLink>
                                    </li>
                                </>
                            )
                        )
                    }
                    <li className="px-1">
                        <NavLink to={"/posts"} className="aria-[current=page]:bg-neutral-300 dark:aria-[current=page]:bg-neutral-600 hover:bg-neutral-200 dark:hover:bg-neutral-700">Posts</NavLink>
                    </li>
                </ul>
            </section>
            <section className="navbar-end lg:inline-flex hidden">
                {
                    (userData && (
                        <button type="button" className="btn btn-error" onClick={userLogout}>Logout</button>
                    ))
                }
            </section>
        </nav>
    )
}