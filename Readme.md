# Node.js Mentor-Student Management System

This project implements a Mentor-Student Management System using Node.js, Express.js, and MongoDB. The system allows users to create mentors and students, assign students to mentors, change mentors for students, and retrieve student information based on mentors.

## Features

- `Create mentors:`  Allows users to create new mentors with details such as name, email, course, and batch.
  
- `Create students:`  Allows users to create new students with details such as name, email, course, batch, and mentor assignment.
  
- `Assign students to mentors:`  Provides an API endpoint to assign students to specific mentors.
  
- `Change mentor for students:`  Offers functionality to change the mentor for a particular student.
  
- `Retrieve all students for a mentor:`   Provides an API endpoint to retrieve all students associated with a specific mentor.
  
- `Retrieve previous mentor for a student:`  Allows users to retrieve the previous mentor for a particular student.

## Technologies Used

- Node.js
  
- Express.js
  
- MongoDB
  
- Mongoose

## Project Structure

- The project follows a MVC (Model-View-Controller) architecture:

- **Models:** Contains schema definitions for mentors and students.
  
- **Controllers:** Contains functions to handle business logic for mentor and student operations.
  
- **Routers:** Defines API endpoints and routes for mentors and students.

## Setup

1. Clone the repository:

```bash
git clone <repository-url>
```

2. Install dependencies:

```bash
cd <project-folder>
npm install

```

3. Set up environment variables:
   - Create a .env file in the project root and add the following variables:

```bash
PORT=3000
MONGODB_URI=<mongodb-uri>
```

4. Start the server:

```bash
npm start
```

## API Endpoints :

- `POST /mentors/create:` Create a new mentor.
  
- `POST /students/create:` Create a new student.
  
- `POST /students/assign-mentor:` Assign a student to a mentor.
  
- `PUT /students/change-mentor/:studentId:` Change the mentor for a student.
  
- `GET /mentors/:mentorId/students`: Get all students for a particular mentor.
  
- `GET /students/:studentId/previous-mentor:` Get the previous mentor for a particular student.


## Contributing :

Contributions are welcome! Feel free to open issues or pull requests for any improvements or features you'd like to see in this project.

## License :

This project is licensed under the MIT License.