import { createContext, useContext, useState } from "react";

export const UserContext = createContext();
export const useUser = () => useContext(UserContext);

export function UserContextProvider({ children }) {
    const [userData, setUserData] = useState();
    const [currentUser, setCurrentUser] = useState(null);

    const registerUser = ({email, password}) => {
        setUserData(prev => [...(Array.isArray(prev) ? prev : []), { email, password }]);
        setCurrentUser({email, password});
    }

    const loginUser = ({email, password}) => {
        const match = userData.find((u) => (
            u.email === email && u.password === password
        ));

        if (match) {
            setCurrentUser({email, password});
        }
    }

    const userLogout = () => {
        setCurrentUser(null);
    }

    return (
        <UserContext.Provider value={{userData, currentUser, registerUser, loginUser, userLogout}}>
            {children}
        </UserContext.Provider>
    )
}