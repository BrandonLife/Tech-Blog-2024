const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const userRoutes = require("./routes/User");
const threadRoutes = require("./routes/Thread");
dotenv.config();
const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;
//Initialize the app
const app = express();

//set middleware
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

mongoose
	.connect(process.env.MONGO_URI)
	.then(() => console.log("MongoDB Connected..."))
	.catch((err) => console.log(err));

app.use("/api/user", userRoutes);
app.use("/api/thread", threadRoutes);

app.listen(PORT, console.log(`Listening on port ${PORT}`));
