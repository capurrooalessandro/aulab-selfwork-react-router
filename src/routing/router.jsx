import { getAllPostsLoader, getSinglePostLoader } from "./loaders";
import { createBrowserRouter } from "react-router";
import HomePage from "../views/HomePage";
import Layout from "../components/Layout";
import ProtectedLayout from "../components/ProtectedLayout";
import InfoPage from "../views/InfoPage";
import PostsPage from "../views/PostsPage";
import DetailPage from "../views/DetailPage";
import RegisterPage from "../views/RegisterPage";
import LoginPage from "../views/LoginPage";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Layout,
        children: [
            {
                path: "/",
                Component: HomePage
            },
            {
                path: "/posts",
                Component: PostsPage
            },
            {
                Component: ProtectedLayout,
                children: [
                    {
                        path: "/info",
                        Component: InfoPage,
                        loader: getAllPostsLoader

                    },
                    {
                        path: "/info/detail/:id",
                        Component: DetailPage,
                        loader: getSinglePostLoader
                    },
                ]
            },
            {
                path: "/register",
                Component: RegisterPage
            },
            {
                path: "/login",
                Component: LoginPage
            }
        ]
    }
]);