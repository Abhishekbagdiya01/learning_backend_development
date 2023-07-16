import express from "express";

const app: express.Application = express()
const hostName: string = "localhost"
const portNumber: number = 5000

app.get("/", (request: express.Request, response: express.Response) => {
    response.status(200)
    response.send("<h1>This is a Get Method</h1>");
})

app.post("/create", (request: express.Request, response: express.Response) => {
    response.status(200)
    response.send("<h1>Create user  Post Method</h1>");
})

app.put("/update", (request: express.Request, response: express.Response) => {
    response.status(200)
    response.send("<h1>Update user  Put Method</h1>");
})

app.delete("/delete", (request: express.Request, response: express.Response) => {
    response.status(200)
    response.send("<h1>Delete user  Delete Method</h1>");
})




app.listen(portNumber, hostName, () => {
    console.log("Express server successfully established ")
})