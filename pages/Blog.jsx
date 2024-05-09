import { getBlogs } from "../src/peticiones.js";
import React from "react";

export default function Blog() {
	const [blogs, setBlogs] = React.useState([]);

	React.useEffect(() => {
		fetchBlogContent();
	}, []);

	const fetchBlogContent = async () => {
		try {
			const data = await getBlogs();
			setBlogs(data);
		} catch (error) {
			console.error("Error fetching blog content:", error);
		}
	};

	return (
		<>
			{blogs.map((blog) => (
				<div key={blog.id}>
					<h3>{blog.title}</h3>
					<h6>{blog.author}</h6>
					<p>{blog.date}</p>
					<p>{blog.content}</p>
				</div>
			))}
		</>
	);
}
