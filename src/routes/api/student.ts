import express from 'express';

const student = express.Router();

student.get('/', (req, res) => {
    res.send('student route');
});

export default student;