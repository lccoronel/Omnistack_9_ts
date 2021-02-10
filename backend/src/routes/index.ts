import { Router } from 'express';
import multer from 'multer';

import uploadConfig from '../config/upload';
import SessionControler from '../controllers/SessionController';
import SpotController from '../controllers/SpotController';

const routes = Router();
const upload = multer(uploadConfig);

routes.post('/sessions', SessionControler.create);
routes.post('/spots', upload.single('thumbnail'), SpotController.create);

export default routes;
