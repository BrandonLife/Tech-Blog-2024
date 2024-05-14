import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import baseUrl from "../utils/constant";

function Dashboard() {
	const Navigate = useNavigate();
	axios.defaults.withCredentials = true;
	const [success, setSuccess] = useState("");

	useEffect(() => {
		axios
			.get(`${baseUrl}/user/dashboard`)
			.then((res) => {
				if (res.data === "Success") {
					setSuccess("Successful");
				} else {
					Navigate("/");
				}
			})
			.catch((err) => console.log(err));
	}, []);

	return (
		<div>
			<h1>Dashboard</h1>
			<p>{success}</p>
		</div>
	);
}

export default Dashboard;
