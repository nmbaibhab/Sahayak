import mongoose from "mongoose";
var Schema = mongoose.Schema;

const studentSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  university: {
    type: String,
    required: true,
  },
  enrollmentNum: {
    type: Number,
    required: true,
    // unique: true,
  },
  query : {
      type: String,
      required: true,
      minlength: 15
  },
});

const Student = mongoose.model('Student', studentSchema);
export default Student;