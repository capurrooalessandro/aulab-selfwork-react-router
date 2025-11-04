import { useState } from "react"
import useFetch from "../hooks/useFetch"

export default function PostsPage() {
    const [url, setUrl] = useState();
    const [buttonClicked, setButtonClicked] = useState("");
    const data = useFetch(url, url);

    return (
        <section className="flex justify-center items-center flex-col h-screen my-[100px]">
            <header className="h-30">
                <h1 className="lg:text-6xl text-4xl font-[650]">Posts page</h1>
            </header>

            <div className="join mb-4">
                <button
                    type="button"
                    onClick={() => { setUrl("https://jsonplaceholder.typicode.com/posts"), setButtonClicked("Posts:") }}
                    className="btn join-item"
                >
                    Get Posts
                </button>

                <button
                    type="button"
                    onClick={() => { setUrl("https://jsonplaceholder.typicode.com/users"), setButtonClicked("Users:") }}
                    className="btn join-item"
                >
                    Get Users
                </button>
            </div>


            {data && (
                <div className="overflow-y-scroll no-scrollbar rounded-box h-[420px] lg:w-4xl w-[90%] shadow-lg">
                    <ul className="list bg-base-200 dark:bg-base-300 shadow-md">
                        <div className="p-4 text-[16px] tracking-wide sticky top-0 bg-base-300 dark:bg-base-200 bg-blend-lighten z-1">
                            <h2 className="text-gray-500 dark:text-gray-400 font-medium">{buttonClicked}</h2>
                        </div>
                        {
                            data.map((el) => {
                                return (
                                    <li className="list-row mx-3 my-2" key={el.id}>
                                        {
                                            el.title && (
                                                <h3 className="font-normal text-lg">
                                                    Title: "<span className="font-semibold">{el.title}</span>"
                                                </h3>
                                            ) || (
                                                <p className="font-semibold text-lg">
                                                    Name: "<span className="font-normal">{el.name}</span>"
                                                </p>
                                            )
                                        }
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            )}
        </section>
    )

}