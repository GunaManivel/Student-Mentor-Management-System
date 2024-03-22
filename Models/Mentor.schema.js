import mongoose from "mongoose";

const Mentorschema = mongoose.Schema({
  Name: String,
  Email: String,
  Course: String,
  Batch: String,
  MentorId: Number,
  Student: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student",
    },
  ],
});

const Mentor = mongoose.model("Mentor", Mentorschema);
export default Mentor;
