import express from 'express';

const postRouting = express.Router()

postRouting.get("/getPost/:id", (request: express.Request, response: express.Response) => {
    let postId = request.params.id
    console.log("PostId " + postId)
    response.send(`<h1>PostId  ${postId}</h1>`)
})

postRouting.post("/login", (request: express.Request, response: express.Response) => {

    // let body = request.body
    // response.status(200).json(body)

    let { name, email } = request.body
    if (name == "abhishek" && email == "abhishek@gmail.com") {
        response.status(200).json({
            "message": "Welcome to the app!",
            "data": request.body,
            "status": response.statusCode

        })
    } else {
        response.status(401).json({
            "message": "User is not authorized",
            "data": request.body,
            "status": response.statusCode

        })
    }

})

export default postRouting