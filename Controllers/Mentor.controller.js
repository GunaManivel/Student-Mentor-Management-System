import Mentor from "../Models/Mentor.schema.js";
import Student from "../Models/Student.schema.js";

// Function to Create a Mentor

export const createMentor = async (req, res) => {
  try {
    const newmentor = new Mentor(req.body);
    await newmentor.save();
    res
      .status(200)
      .json({ message: "Mentor Created Successfully", data: newmentor });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server error" });
  }
};

// Function to Add Students for a particular Mentor
export const addStudentsToMentor = async (req, res) => {
  try {
    const { mentorId, studentIds } = req.body;
    const mentor = await Mentor.findById(mentorId);
    if (!mentor) {
      return res.status(404).json({ message: "Mentor not found" });
    }
    const students = await Student.find({ _id: { $in: studentIds } });
    students.forEach(async (student) => {
      // Changed to async function
      student.Mentor = mentorId;
      mentor.Students = mentor.Students || []; // Ensure mentor.Students is initialized as an array
      mentor.Students.push(student._id);
      await student.save(); // Save student asynchronously
    });
    await mentor.save();
    res.json({ message: "Students added to mentor successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/// Function to show all students for a particular mentor
export const getAllStudentsForMentor = async (req, res) => {
  try {
    const { mentorId } = req.params;
    const students = await Student.find({ Mentor: mentorId });
    res.json(students);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
