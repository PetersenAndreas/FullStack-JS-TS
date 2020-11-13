import { NextFunction, Response } from 'express'
import {ApiError} from '../errors/apiError'


export const endpointError = function (req: any, res: Response, next: NextFunction) {
    if(req.originalUrl.startsWith("/api")){
        res.status(404).json({ code: 404, msg: "this API does not contain this endpoint" })
    }
    next()
}

export const errorFormat = function (err: Error, req: any, res: Response, next: NextFunction) {
    if(err instanceof ApiError){
        const e = <ApiError>err;
        res.status(Number(e.errorCode)).send({code: e.errorCode, message: e.message})
    }
    next(err)  //Pass on to the default error-handler --> makes an (ugly) html response
}

//export {endpointError, errorFormat};