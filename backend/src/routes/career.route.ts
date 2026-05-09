import { Router } from 'express';
import { getCareers, createCareer } from '../controllers/career.controller';

const router = Router();

router.get('/', getCareers);
router.post('/', createCareer);

export default router;
