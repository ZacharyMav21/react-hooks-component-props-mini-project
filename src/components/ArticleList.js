import Article from "./Article";

function ArticleList({ blogs }) {
	return (
		<main>
			{blogs.map((curBlog) => (
				<Article key={curBlog.id} blog={curBlog} />
			))}
		</main>
	);
}

export default ArticleList;
