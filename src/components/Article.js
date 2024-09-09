function Article({ blog }) {
    let numCups = Math.ceil((blog.minutes) / 5)

	return (
		<article>
			<h3>{blog.title}</h3>
			<small>{blog.date} {'☕️'.repeat(numCups)} {blog.minutes} min read</small>
			<p>{blog.preview}</p>
		</article>
	);
}

export default Article;