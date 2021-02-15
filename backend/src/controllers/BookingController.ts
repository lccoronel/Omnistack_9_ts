import { Response, Request } from 'express';
import Booking from '../models/Booking';

class BookingController {
  public async store(request: Request, response: Response): Promise<Response> {
    const { user_id } = request.headers;
    const { spot_id } = request.params;
    const { date } = request.body;

    const booking = await Booking.create({
      user: user_id,
      spot: spot_id,
      date,
    });

    await booking.populate('spot').populate('user').execPopulate();

    return response.json(booking);
  }
}

export default BookingController;
