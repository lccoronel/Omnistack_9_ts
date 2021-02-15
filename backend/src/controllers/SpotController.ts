import { Response, Request } from 'express';
import Spot from '../models/Spot';
import User from '../models/User';

class SpotController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { tech } = request.query;

    const spots = await Spot.find({ techs: tech });

    return response.json(spots);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { filename } = request.file;
    const { company, techs, price } = request.body;
    const { user_id } = request.headers;

    const user = await User.findById(user_id);

    if (!user) {
      return response.status(400).json({ error: 'Usuario nao existe' });
    }

    const spot = await Spot.create({
      user: user_id,
      thumbnail: filename,
      company,
      techs: techs.split(',').map((tech: string) => tech.trim()),
      price,
    });

    return response.json(spot);
  }
}

export default SpotController;
