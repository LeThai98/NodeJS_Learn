import express from 'express';
import teacher from './api/teacher';
import student from './api/student';
import logger from '../utilities/logger';

const routes = express.Router();

routes.get('/', (req, res) => {
    res.send('main API route');
});

routes.use('/teacher',logger, teacher);
routes.use('/student',logger, student);

export default routes;