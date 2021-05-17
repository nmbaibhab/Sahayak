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
  enrollment_num: {
    type: Number,
    required: true,
    unique: true,
    trim: true
  },
  query : {
      type: String,
      required: true,
      minlength: 25
  },
},
{
  timestamps: true
});

const Student = mongoose.model('Student', studentSchema);
export default Student;