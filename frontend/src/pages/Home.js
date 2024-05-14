import React, { useEffect } from "react";
import axios from "axios";
import baseUrl from "../utils/constant";

function Home() {
	useEffect(() => {
		axios.get(`${baseUrl}/user/getUser`).then((user) => {
			console.log(user);
		});
	}, []);

	return <div>Home</div>;
}

export default Home;
