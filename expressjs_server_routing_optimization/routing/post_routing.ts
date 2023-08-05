import express from 'express';
import appLogger from '../src/app_logger/app_logger';
import bcrypt from 'bcrypt';

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

postRouting.post("/create/newUser", async (request: express.Request, response: express.Response) => {

    //to encrypt password


    let { name, email, password } = request.body


    let salt = await bcrypt.genSalt()
    let encryptPass = await bcrypt.hash(password, salt)

    response.status(200).json({
        "message": "Welcome to the app!",
        "data": request.body,
        "encryptPass": encryptPass

    })

    console.log(encryptPass);
})
export default postRouting