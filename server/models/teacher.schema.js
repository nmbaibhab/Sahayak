import mongoose from "mongoose";

var Schema = mongoose.Schema;

const teacherSchema = new Schema({
  name: {
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
      minlength: 25
  },
},
{
  timestamps: true
});

const Teacher = mongoose.model('Teacher', teacherSchema);
export default Teacher;