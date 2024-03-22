import mongoose from "mongoose";

const studschema = mongoose.Schema({
  FirstName: String,
  LastName: String,
  Phone: Number,
  Email: String,
  Course: String,
  Batch: String,
  StudId: Number,
  Mentor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Mentor",
  },
});

const Student = mongoose.model("Student", studschema);
export default Student;
