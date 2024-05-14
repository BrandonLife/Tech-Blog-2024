import React from "react";
import { useState } from "react";
import axios from "axios";
import baseUrl from "../utils/constant";
import { useNavigate } from "react-router-dom";

function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const Navigate = useNavigate();
	axios.defaults.withCredentials = true;

	const handleSubmit = (e) => {
		e.preventDefault();
		axios
			.post(`${baseUrl}/user/login`, { email, password })
			.then((res) => {
				Navigate("/");
				console.log(res);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<main>
			<div>
				<h1>Login</h1>
			</div>
			<form onSubmit={handleSubmit}>
				<div className="email-container">
					<div>
						<label htmlFor="email">email</label>
					</div>
					<div>
						<input
							onChange={(e) => {
								setEmail(e.target.value);
							}}
							name="email"
							type="text"
						></input>
					</div>
				</div>
				<div className="password-container">
					<div>
						<label htmlFor="password">Password</label>
					</div>
					<div>
						<input
							onChange={(e) => {
								setPassword(e.target.value);
							}}
							name="password"
							type="text"
						></input>
					</div>
				</div>
				<div>
					<button type="submit">Login</button>
				</div>
			</form>
		</main>
	);
}

export default Login;
