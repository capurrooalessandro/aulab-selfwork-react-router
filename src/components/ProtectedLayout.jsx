import { Outlet, Navigate } from "react-router";
import { useUser } from "../context/UserContext";

export default function ProtectedLayout() {
    const { currentUser } = useUser();
    return currentUser ? <Outlet /> : <Navigate to="/login" />
}