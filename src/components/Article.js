function Article({ blog }) {

    let numCups = Math.ceil(blog.minutes / 5);
    
    const date = blog.date || "January 1, 1970";

    return (
        <article>
            <h3>{blog.title}</h3>
            <small>{date} {'☕️'.repeat(numCups)} {blog.minutes} min read</small>
            <p>{blog.preview}</p>
        </article>
    );
}

export default Article;