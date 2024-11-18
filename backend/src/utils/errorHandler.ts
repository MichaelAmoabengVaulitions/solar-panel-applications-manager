import { Request, Response, NextFunction } from 'express';

const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);

    res.status(500).json({
        message: 'Internal Server Error',
        error: err.message, // Include the error message for debugging
    });
};

export default errorHandler;
