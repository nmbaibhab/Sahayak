import express from 'express';
import teacher from '../models/teacher.schema.js';
import student from '../models/student.schema.js';

const router = express.Router();

router.route('/teacher').get((req,res)=>{
    teacher.find()
        .then(data => res.json(data))
        .catch(err => res.status(400).json('Error:'+ err));
});

router.route('/student').get((req,res)=>{
    student.find()
        .then(data => res.json(data))
        .catch(err => res.status(400).json('Error:'+ err));
});


export default router;