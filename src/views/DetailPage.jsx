import { useLoaderData } from "react-router";

export default function DetailPage() {
    const [post, comments] = useLoaderData()

    return (
        <section className="container">
            <h1 className="main-title">Detail page</h1>
            <h2>Title: {post.title}</h2>
            <h3>Body: {post.body}</h3>
            <h4>Comments:</h4>
            <ul>
                {
                    comments.map((comment) => {
                        return (
                            <li key={comment.id}>
                                {comment.body} - {comment.mail}
                            </li>
                        )
                    })
                }
            </ul>
        </section>
    )
}