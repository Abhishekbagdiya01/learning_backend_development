import express from 'express';

const userRouting = express.Router()


userRouting.get("/", (request: express.Request, response: express.Response) => {
    response.status(200)
    response.send("<h1>This is a Get Method</h1>");
})

userRouting.post("/create", (request: express.Request, response: express.Response) => {
    response.status(200)
    response.send("<h1>Create user  Post Method</h1>");
})

userRouting.put("/update", (request: express.Request, response: express.Response) => {
    response.status(200)
    response.send("<h1>Update user  Put Method</h1>");
})

userRouting.delete("/delete", (request: express.Request, response: express.Response) => {
    response.status(200)
    response.send("<h1>Delete user  Delete Method</h1>");
})


export default userRouting