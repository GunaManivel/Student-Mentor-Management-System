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

//Home route
app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Mentor-Student Management System API</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          background-color: #f4f4f4;
          color: #333;
          margin: 0;
          padding: 0;
        }
        .container {
          max-width: 800px;
          margin: 50px auto;
          padding: 20px;
          background-color: #fff;
          border-radius: 8px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        h2 {
          color: #333;
          margin-bottom: 20px;
        }
        h3 {
          color: #555;
          margin-bottom: 10px;
        }
        ul {
          list-style-type: none;
          padding: 0;
          text-align: left;
        }
        li {
          margin-bottom: 10px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h2>Welcome to the Mentor-Student Management System API!</h2>
        <h3>API Endpoints :</h3>
        <ul><br/>
          <li style="list-style:Numbers;">POST /mentors/create: Create a new mentor.</li><br/>
          <li style="list-style:Numbers;">POST /students/create: Create a new student.</li><br/>
          <li style="list-style:Numbers;">POST /students/assign-mentor: Assign a student to a mentor.</li><br/>
          <li style="list-style:Numbers;">PUT /students/change-mentor/:studentId: Change the mentor for a student.</li><br/>
          <li style="list-style:Numbers;">GET /mentors/:mentorId/students: Get all students for a particular mentor.</li><br/>
          <li style="list-style:Numbers;">GET /students/:studentId/previous-mentor: Get the previous mentor for a particular student.</li><br/>
        </ul>
      </div>
    </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
