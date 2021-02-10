import express from 'express';
import mongoose from 'mongoose';

import routes from './routes';

const app = express();

mongoose.connect(
  'mongodb+srv://lccoronel7:lulu2013@overall.ci1ht.mongodb.net/week_9_ts?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
);

app.use(express.json());
app.use(routes);

app.listen(5555, () => {
  console.log('🚀  server started on port 5555');
});
