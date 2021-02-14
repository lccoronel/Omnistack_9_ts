import { Router } from 'express';
import multer from 'multer';

import uploadConfig from '../config/upload';
import SessionController from '../controllers/SessionController';
import SpotController from '../controllers/SpotController';

const sessionController = new SessionController();

const routes = Router();
const upload = multer(uploadConfig);

routes.post('/sessions', sessionController.create);
// routes.post('/spots', upload.single('thumbnail'), SpotController.create);

export default routes;
