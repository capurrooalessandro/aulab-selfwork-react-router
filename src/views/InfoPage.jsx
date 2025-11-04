import { Link, useLoaderData } from "react-router";

export default function InfoPage() {
    const posts = useLoaderData()

    return (
		<section className="flex justify-center items-center flex-col h-screen my-[100px]">
			<header className="h-30">
				<h1 className="lg:text-6xl text-4xl font-[650]">Info page</h1>
			</header>
            <div className="overflow-y-scroll no-scrollbar rounded-box h-[420px] shadow-lg mx-3">
                <ul className="list bg-base-200 dark:bg-base-300 shadow-md">
                    <div className="p-4 text-[16px] tracking-wide sticky top-0 bg-base-300 dark:bg-base-200 bg-blend-lighten z-1">
                        <h2 className="text-gray-500 dark:text-gray-400">Posts:</h2>
                    </div>

                    {
                        posts.map((post) => {
                            return (
                            <li className="list-row hover:bg-base-300 dark:hover:bg-base-100 mx-3 my-2" key={post.id}>
                                <h3 className="font-normal text-lg list-col-grow my-auto">
                                    Title: <span className="font-semibold text-md">"{post.title}"</span>
                                </h3>
                                <div className="my-auto">
                                    <Link className="btn btn-primary" to={`/info/detail/${post.id}`}>Open</Link>
                                </div>
                            </li>
                            )
                        })
                    }
                </ul>
            </div>

        </section>
    )
    
}