import { useLoaderData } from "react-router";

export default function DetailPage() {
    const [post, comments] = useLoaderData()

    return (
		<section className="flex justify-center items-center flex-col h-screen my-[100px]">
			<header className="h-40">
				<h1 className="lg:text-6xl text-4xl font-[650]">Details page</h1>
			</header>
            <div className="lg:w-5xl mx-3">
                <div className="text-gray-500 dark:text-gray-400 lg:mb-3.5 mb-2 bg-base-300 dark:bg-base-200 lg:text-[23px] text-[17.5px] rounded-box p-3">
                    <h2 className="font-bold">
                        Post title:&nbsp;
                        <span className="font-semibold">
                            "{post.title}"
                        </span>
                    </h2>
                </div>

                <div className="text-gray-500 dark:text-gray-400 lg:mb-3.5 mb-2 bg-base-300 dark:bg-base-200 lg:text-[17px] text-[15.5px] rounded-box p-3">
                    <p className="font-semibold">
                        Post body:&nbsp;
                        <span className="font-mono font-normal">
                            "{post.body}"
                        </span>
                    </p>
                </div>
            </div>
            <article className="overflow-y-scroll no-scrollbar rounded-box lg:h-[440px] h-full lg:w-5xl shadow-lg mx-3 -mb-12">
                <ul className="list bg-base-200 dark:bg-base-300 shadow-md">
                    <div className="p-4 tracking-wide sticky top-0 bg-base-300 dark:bg-base-200 bg-blend-lighten z-1">
                        <div className="text-gray-500 dark:text-gray-400 text-[14.5px]">
                            <h3 className="font-bold">
                                Comments list:
                            </h3>
                        </div>
                    </div>
                    {
                        comments.map((comment) => {
                            return (
                                <li className="list-row" key={comment.id}>
                                    <p className="list-col-grow lg:text-[1.4rem] text-[1.15rem] font-semibold">
                                        Author: <span className="font-normal">"{comment.email}"</span>
                                    </p>
                                    <p className="list-col-wrap lg:text-[1rem] text-[0.9rem] font-semibold">
                                        Comment: <span className="font-medium">"{comment.body}"</span>
                                    </p>
                                </li>
                            )
                        })
                    }
                </ul>
            </article>
        </section>
    )
}