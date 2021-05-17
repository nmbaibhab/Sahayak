import express from 'express';
import student from '../models/student.schema.js';
import teacher from '../models/teacher.schema.js';

const router = express.Router();

router.route('/').get((req,res)=>{
    teacher.find()
        .then(data => res.json(data))
        .catch(err => res.status(400).json('Error:'+ err));
});

router.route('/add').post((req,res)=>{
    const name = req.body.name;
    const university = req.body.university;
    const enrollment_num = Number(req.body.enrollment_num);
    const query = req.body.query;

    const newStudent = new student({
        name,
        university,
        enrollment_num,
        query,
    });

    newStudent.save()
    .then(()=> res.json('Query Sent'))
    .catch(err=> res.status(400).json('Error'+err));
});

export default router;