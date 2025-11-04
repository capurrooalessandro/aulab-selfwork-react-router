import { createContext, useState } from "react";
import { useNavigate } from "react-router";

export const UserContext = createContext();

export function UserContextProvider({ children }) {
    const [userData, setUserData] = useState();

    const registerUser = (newUser) => {
        setUserData(newUser);
    }

    const userLogout = () => {
        setUserData(null);
    }

    return (
        <UserContext.Provider value={{userData, registerUser, userLogout}}>
            {children}
        </UserContext.Provider>
    )
}