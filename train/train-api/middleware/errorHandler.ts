import { Request, Response } from 'express';

const errorHandler = (err: Error, req: Request, res: Response): void => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: err.message || 'Internal Server Error'
  });
};

export default errorHandler;