import React from "react";
import createThread from "./createThread";
import { Link } from "react-router-dom";

function Blog() {
	return (
		<div>
			<h1>Blog</h1>
			<ul>
				<li>
					<Link to="/create">Create Thread</Link>
				</li>
			</ul>
		</div>
	);
}

export default Blog;
