import express from 'express';
import teacher from '../models/teacher.schema.js';
import student from '../models/student.schema.js';

const router = express.Router();

router.route('/').get((req,res)=>{
    student.find()
        .then(data => res.json(data))
        .catch(err => res.status(400).json('Error:'+ err));
});

router.route('/add').post((req,res)=>{
    const question_id = req.body.question_id;
    const query = req.body.query;
    const teacher_name = req.body.teacher_name;
    const authority_position = req.body.authority_position;
    const reply = req.body.reply;


    const newTeacher = new teacher({
        question_id,
        query,
        teacher_name,
        authority_position,
        reply,
    });

    newTeacher.save()
    .then(()=> res.json('Reply Sent'))
    .catch(err=> res.status(400).json('Error'+err));
});

export default router;