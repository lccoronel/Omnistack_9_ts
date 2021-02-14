import { Response, Request } from 'express';
import Spot from '../models/Spot';

class SpotController {
  public async create(request: Request, response: Response): Promise<Response> {
    console.log(request.body);
    console.log(request.file);
    return response.json({ message: 'ola' });
  }
}

export default SpotController;
