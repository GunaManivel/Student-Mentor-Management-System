import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./Database/Config.js";
import StudRouter from "./Routers/Student.router.js";
import MentorRouter from "./Routers/Mentor.router.js";
import bodyParser from "body-parser";

dotenv.config();
const app = express();
const port = process.env.PORT;

app.use(cors());

app.use(express.json());
app.use(bodyParser.json());
connectDB();
app.use("/students", StudRouter);
app.use("/Mentors", MentorRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
