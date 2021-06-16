import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import studentRouter from './routes/student.js';
import teacherRouter from './routes/teacher.js';
import adminRouter from './routes/vigilance_admin.js';

dotenv.config();

const app = express();

// app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json

app.use(bodyParser.json());
app.use(cors());

const CONNECTION_URL = process.env.DB_URL;

const PORT = process.env.PORT || 8000;



app.use('/student',studentRouter);
app.use('/teacher',teacherRouter);
app.use('/admin',adminRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("DB connection successful");
  })
  .catch((err) => {
    console.log(err);
  });
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
