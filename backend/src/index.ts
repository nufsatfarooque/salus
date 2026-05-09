import express from 'express';
import { env } from './config/env';
import { errorHandler } from './middleware/errorHandler';
import referralRoutes from './routes/referral.route';
import careerRoutes from './routes/career.route';
import contactRoutes from './routes/contact.route';

const app = express();

app.use(express.json());

app.use('/referrals', referralRoutes);
app.use('/careers', careerRoutes);
app.use('/contacts', contactRoutes);

app.use(errorHandler);

app.listen(env.port, () => {
  console.log(`Server running on port ${env.port}`);
});
