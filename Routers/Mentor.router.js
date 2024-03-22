import express from "express";
import {
  addStudentsToMentor,
  createMentor,
  getAllStudentsForMentor,
} from "../Controllers/Mentor.controller.js";

const router = express.Router();

router.post("/create-mentor", createMentor);
router.post("/add-students", addStudentsToMentor);
router.get("/students/:mentorId", getAllStudentsForMentor);

export default router;
