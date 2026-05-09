import { Request, Response } from 'express';

export const getCareers = (req: Request, res: Response) => {
  res.json({ message: 'Get careers' });
};

export const createCareer = (req: Request, res: Response) => {
  res.json({ message: 'Create career' });
};
