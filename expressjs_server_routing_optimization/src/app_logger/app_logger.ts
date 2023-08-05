import express from 'express';

let appLogger = (request: express.Request, response: express.Response, next: express.NextFunction) => {
    const time = new Date().toLocaleTimeString()
    const date = new Date().toLocaleDateString()
    const url = request.url
    const method = request.method

    console.log(`[${date}] |[${time}] |[${url}] |[${method}] |`)

    next();
}

export default appLogger