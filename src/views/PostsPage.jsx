import { useState } from "react"
import useFetch from "../hooks/useFetch"

export default function PostsPage() {
    const [url, setUrl] = useState();
    const data = useFetch(url, url);

    return (
        <section className="container">
            <h1 className="main-title">Posts page (Hook)</h1>
            <h2>Titles:</h2>
            <button
                type="button"
                onClick={() => setUrl("https://jsonplaceholder.typicode.com/posts")}
                className="btn btn-primary"
            >
                Get Posts
            </button>

            <button
                type="button"
                onClick={() => setUrl("https://jsonplaceholder.typicode.com/users")}
                className="btn btn-primary"
            >
                Get Users
            </button>
            <ul>
                {data &&
                    data.map((el) => {
                        return (
                        <li key={el.id}>
                            {el.title || el.name}
                        </li>
                        )
                    })
                }
            </ul>
        </section>
    )
    
}