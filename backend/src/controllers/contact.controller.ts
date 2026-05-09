import { Request, Response } from 'express';

export const getContacts = (req: Request, res: Response) => {
  res.json({ message: 'Get contacts' });
};

export const createContact = (req: Request, res: Response) => {
  res.json({ message: 'Create contact' });
};
