import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import baseUrl from "../utils/constant";
// https://www.youtube.com/watch?v=ZLk7lQKGcug
function Register() {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [userName, setUserName] = useState("");
	const [occupation, setOccupation] = useState("");
	const [bio, setBio] = useState("");
	const [image, setImage] = useState("");
	const [password, setPassword] = useState("");
	const Navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		axios
			.post(`${baseUrl}/user/register`, {
				firstName,
				lastName,
				userName,
				occupation,
				bio,
				image,
				email,
				password,
			})
			.then((res) => {
				if (res.data) {
					Navigate("/login");
				}
			})
			.catch((err) => console.log(err));
	};
	return (
		<main>
			<div>
				<h1>Register</h1>
			</div>
			<form onSubmit={handleSubmit}>
				<div className="first-name-container">
					<div>
						<label htmlFor="firstName">First Name</label>
					</div>
					<div>
						<input
							onChange={(e) => {
								setFirstName(e.target.value);
							}}
							autoFocus={true}
							placeholder="Enter First Name"
							name="firstName"
							type="text"
							value={firstName}
						></input>
					</div>
				</div>
				<div className="last-name-container">
					<div>
						<label htmlFor="lastName">Last Name</label>
					</div>
					<div>
						<input
							onChange={(e) => {
								setLastName(e.target.value);
							}}
							name="lastName"
							placeholder="Enter Last Name"
							type="text"
							value={lastName}
						></input>
					</div>
				</div>
				<div className="email-container">
					<div>
						<label htmlFor="email">Email</label>
					</div>
					<div>
						<input
							onChange={(e) => {
								setEmail(e.target.value);
							}}
							placeholder="Enter email Ex. johnDoe@gmail.com"
							name="email"
							type="email"
							value={email}
						></input>
					</div>
				</div>
				<div className="username-container">
					<div>
						<label htmlFor="userName">User Name</label>
					</div>
					<div>
						<input
							onChange={(e) => {
								setUserName(e.target.value);
							}}
							placeholder="Enter a username"
							name="userName"
							type="text"
							value={userName}
						></input>
					</div>
				</div>
				<div className="password-container">
					<div>
						<label htmlFor="Password">Password</label>
					</div>
					<div>
						<input
							onChange={(e) => {
								setPassword(e.target.value);
							}}
							placeholder="Enter password"
							name="password"
							type="text"
							value={password}
						></input>
					</div>
				</div>
				<div className="occupation-container">
					<div>
						<label htmlFor="occupation">Occupation</label>
					</div>
					<div>
						<input
							onChange={(e) => {
								setOccupation(e.target.value);
							}}
							placeholder="Enter Occupation"
							name="occupation"
							value={occupation}
							type="text"
						></input>
					</div>
				</div>
				<div className="bio-container">
					<div>
						<label htmlFor="bio">Bio</label>
					</div>
					<div>
						<textarea
							onChange={(e) => {
								setBio(e.target.value);
							}}
							placeholder="Enter Bio for your profile"
							name="bio"
							type="textarea"
							value={bio}
						></textarea>
					</div>
				</div>
				<div className="image-container">
					<div>
						<label htmlFor="image">Profile Image</label>
					</div>
					<div>
						<input
							onChange={(e) => {
								setImage(e.target.value);
							}}
							placeholder="Enter profile image url"
							name="image"
							type="text"
							value={image}
						></input>
					</div>
				</div>
				<div>
					<button type="submit">Create Account</button>
				</div>
			</form>
		</main>
	);
}

export default Register;
