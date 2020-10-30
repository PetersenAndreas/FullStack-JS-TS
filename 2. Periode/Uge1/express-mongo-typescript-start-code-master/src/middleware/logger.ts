const winston = require('winston');
const expressWinston = require('express-winston');
 
const logger = expressWinston.logger({
    transports: [
        new winston.transports.File({ filename: './logs/all.log' }),
      ],
    format: winston.format.combine(
    winston.format.colorize(),
    winston.format.timestamp(),
    winston.format.json(),
    winston.format.prettyPrint(),
  )})

const errorLog  = expressWinston.errorLogger({
    transports: [
        new winston.transports.File({ filename: './logs/error.log' }),
      ],
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.json(),
        winston.format.prettyPrint(),
      )
    })

  export {logger, errorLog};
