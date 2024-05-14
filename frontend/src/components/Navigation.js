import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
	return (
		<main>
			<div>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/blog">Blog</Link>
					</li>
					<li>
						<Link to="/register">Register</Link>
					</li>
					<li>
						<Link to="/login">Login</Link>
					</li>
				</ul>
			</div>
		</main>
	);
}

export default Navigation;
