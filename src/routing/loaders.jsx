export const getAllPostsLoader = async () => {
    const promise = await fetch('https://jsonplaceholder.typicode.com/posts');
    const json = await promise.json();
    return json;
}

export const getSinglePostLoader = async ({ params }) => {
    const postPromise = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
    const postJson = await postPromise.json();

    const commentPromise = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}/comments`);
    const commentJson = await commentPromise.json();
    return [postJson, commentJson];
}