import { Router } from 'express';

const routes = Router();

routes.post('/users', (req, res) => {
  res.json({ message: 'Hello word' });
});

export default routes;
