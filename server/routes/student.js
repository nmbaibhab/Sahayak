import express from 'express';
import student from '../models/student.schema.js';
import teacher from '../models/teacher.schema.js';

const router = express.Router();

router.route('/').get((req,res)=>{
    teacher.find()
        .then(data => res.json(data))
        .catch(err => res.status(400).json('Error:'+ err));
});

router.route('/add').post(async(req,res)=>{
    const name = req.body.name;
    const university = req.body.university;
    const enrollmentNum = Number(req.body.enrollmentNum) ;
    const query = req.body.query;
    const question_id = req.body.question_id ;

    const newStudent = new student({
        name,
        university,
        enrollmentNum,
        query,
        question_id,
    });
    console.log(newStudent);

    await newStudent.save()
    .then(()=> res.json('Query Sent'))
    .catch(err=> {res.status(400).json('Error'+err);console.log(err)});
});

export default router;