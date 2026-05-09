import { Request, Response } from 'express';

export const getReferrals = (req: Request, res: Response) => {
  res.json({ message: 'Get referrals' });
};

export const createReferral = (req: Request, res: Response) => {
  res.json({ message: 'Create referral' });
};
