import express from "express";
import {
  assignStudentToMentor,
  changeStudentMentor,
  createStudent,
  getAllStudentsForMentor,
  getPreviousMentorForStudent,
} from "../Controllers/Student.controller.js";

const router = express.Router();

router.post("/create-student", createStudent);
router.post("/assign-mentor", assignStudentToMentor);
router.put("/change-mentor", changeStudentMentor);
router.get("/mentor/:mentorId", getAllStudentsForMentor);
router.get("/previous-mentor/:studentId", getPreviousMentorForStudent);

export default router;
