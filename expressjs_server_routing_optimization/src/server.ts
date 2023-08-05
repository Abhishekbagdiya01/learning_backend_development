import express from "express";
import userRouting from "../routing/user_routing";
import postRouting from "../routing/post_routing";
import appLogger from "./app_logger/app_logger";

const app: express.Application = express()
app.use(express.json())  // for accepting the json response
app.use(appLogger)


// for app routing
app.use("/v1/user", userRouting)
app.use("/v1/post", postRouting)



const hostName: string = "localhost"
const portNumber: number = 5000

// app.get("/", (request: express.Request, response: express.Response) => {
//     response.status(200)
//     response.send("<h1>This is a Get Method</h1>");
// })

// app.post("/create", (request: express.Request, response: express.Response) => {
//     response.status(200)
//     response.send("<h1>Create user  Post Method</h1>");
// })

// app.put("/update", (request: express.Request, response: express.Response) => {
//     response.status(200)
//     response.send("<h1>Update user  Put Method</h1>");
// })

// app.delete("/delete", (request: express.Request, response: express.Response) => {
//     response.status(200)
//     response.send("<h1>Delete user  Delete Method</h1>");
// })




app.listen(portNumber, hostName, () => {

    console.log(`${hostName}:${portNumber}/v1/user`)
    console.log("Welcome to the Express server routing optimization ")
})