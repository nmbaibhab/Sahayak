import mongoose from "mongoose";

var Schema = mongoose.Schema;

const teacherSchema = new Schema({
  question_id:{
    type: String,
    required: true,
  },
  query:{
    type: String,
    // required: true,
  },
  teacher_name: {
    type: String,
    required: true,
  },
  authority_position: {
    type: String,
    required: true,
  },
  reply : {
      type: String,
      required: true,
      minlength: 15
  },
},
{
  timestamps: true
});

const Teacher = mongoose.model('Teacher', teacherSchema);
export default Teacher;