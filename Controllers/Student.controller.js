import Student from "../Models/Student.schema.js";
import Mentor from "../Models/Mentor.schema.js";

// create a new Student
export const createStudent = async (req, res) => {
  try {
    const newstudent = new Student(req.body);
    await newstudent.save();
    res
      .status(200)
      .json({ message: "Student Created Successfully", data: newstudent });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server error" });
  }
};

//Assign a student to Mentor

export const assignStudentToMentor = async (req, res) => {
  try {
    const { studentId, mentorId } = req.body;
    const student = await Student.findById(studentId);
    const mentor = await Mentor.findById(mentorId);
    if (!student || !mentor) {
      return res.status(404).json({ message: "Student or Mentor not found" });
    }
    // Ensure Mentor's Student array is initialized
    mentor.Student = mentor.Student || [];
    // Assign student to mentor
    mentor.Student.push(studentId);
    student.Mentor = mentorId;
    await Promise.all([student.save(), mentor.save()]);
    res.json({ message: "Student assigned to mentor successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Function to change mentor for a particular student
export const changeStudentMentor = async (req, res) => {
  try {
    const { studentId, newMentorId } = req.body;
    const student = await Student.findById(studentId);
    const mentor = await Mentor.findById(newMentorId);
    if (!student || !mentor) {
      return res.status(404).json({ message: "Student or Mentor not found" });
    }
    // Remove student from previous mentor
    const previousMentor = await Mentor.findById(student.Mentor);
    if (previousMentor && previousMentor.Students) {
      previousMentor.Students = previousMentor.Students.filter(
        (id) => id.toString() !== studentId.toString()
      );
      await previousMentor.save();
    }

    // Update student's mentor
    student.Mentor = newMentorId;
    await student.save();

    // Add student to new mentor
    mentor.Students = mentor.Students || []; // Initialize mentor.Students if it's undefined
    mentor.Students.push(studentId);
    await mentor.save();

    res.json(student);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
// Function to show all students for a particular mentor
export const getAllStudentsForMentor = async (req, res) => {
  try {
    const { mentorId } = req.params;
    const students = await Student.find({ Mentor: mentorId });
    res.json(students);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Function to show the previously assigned mentor for a particular student
export const getPreviousMentorForStudent = async (req, res) => {
  try {
    const { studentId } = req.params;
    const student = await Student.findById(studentId);
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }
    const previousMentor = await Mentor.findById(student.Mentor);
    res.json(previousMentor);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
