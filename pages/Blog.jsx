import React, { useEffect, useState } from "react";

export default function Blog() {
	const [blogs, setBlogs] = useState([]);

	useEffect(() => {
		fetchBlogContent();
	}, []);

	const fetchBlogContent = async () => {
		try {
			const response = await fetch("https://api.example.com/blogs");
			const data = await response.json();
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
