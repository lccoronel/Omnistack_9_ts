import { Response, Request } from 'express';
import Spot from '../models/Spot';

class DashboardController {
  public async show(request: Request, response: Response): Promise<Response> {
    const { user_id } = request.headers;

    const spots = await Spot.find({ user: user_id });

    return response.json(spots);
  }
}

export default DashboardController;
