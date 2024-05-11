import express from 'express';

const logger = (req: express.Request, res: express.Response, next: express.NextFunction): void => {
    console.log(`${req.method} - ${req.url} was visited at ${new Date()}`);
    next();
}

export default logger;