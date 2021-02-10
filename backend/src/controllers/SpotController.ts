import { Response, Request } from 'express';
import Spot from '../models/Spot';

export default {
  create(request: Request, response: Response): Response {
    console.log(request.body);
    console.log(request.file);
    return response.json({ message: 'ola' });
  },
};
