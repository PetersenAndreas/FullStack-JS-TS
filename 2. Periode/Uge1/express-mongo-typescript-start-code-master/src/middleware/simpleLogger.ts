import { NextFunction, Response } from "express"

const loggerSimple = (req: any, res: Response, next: NextFunction) => {
    console.log(`Logged Time: ${new Date()}\nMethod: ${req.method}\nURL: ${req.get('host') + req.originalUrl}`);
    next();
}

export default loggerSimple;