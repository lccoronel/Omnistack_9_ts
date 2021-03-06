import { Response, Request } from 'express';

import User from '../models/User';

interface RequestProps {
  email: string;
}

class SeesionCOntroller {
  public async create(request: Request, response: Response): Promise<Response> {
    const { email } = request.body as RequestProps;

    let user = await User.findOne({ email });

    if (!user) {
      user = await User.create({ email });
    }

    return response.json(user);
  }
}

export default SeesionCOntroller;
