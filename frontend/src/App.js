import "./App.css";
import { Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Blog from "./pages/Blog";
import Home from "./pages/Home";
import UpdateThread from "./pages/updateThread";
import CreateThread from "./pages/createThread";
import SingleThreadPage from "./pages/singleThreadPage";
import Navigation from "./components/Navigation";

function App() {
	return (
		<>
			<Navigation />
			<Routes>
				<Route path="/register" element={<Register />}></Route>
				<Route path="/login" element={<Login />}></Route>
				<Route path="/dashboard" element={<Dashboard />}></Route>
				<Route path="/blog" element={<Blog />}></Route>
				<Route path="/" element={<Home />}></Route>
				<Route path="/update" element={<UpdateThread />}></Route>
				<Route path="/create" element={<CreateThread />}></Route>
				<Route path="/thread" element={<SingleThreadPage />}></Route>
			</Routes>
		</>
	);
}

export default App;
