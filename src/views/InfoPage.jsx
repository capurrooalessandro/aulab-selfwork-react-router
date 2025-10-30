import { Link, useLoaderData } from "react-router";

export default function InfoPage() {
    const posts = useLoaderData()

    return (
        <section className="container">
            <h1 className="main-title">Posts page</h1>
            <h2>Posts:</h2>
            <ul>
                {
                    posts.map((post) => {
                        return (
                        <li key={post.id}>
                            {post.title}: <Link to={`/info/detail/${post.id}`}>Detail</Link>
                        </li>
                        )
                    })
                }
            </ul>
        </section>
    )
    
}