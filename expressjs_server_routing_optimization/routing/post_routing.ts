import express from 'express';
import appLogger from '../src/app_logger/app_logger';
import bcrypt from 'bcrypt';
import { body, ExpressValidator, validationResult } from 'express-validator';


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

postRouting.post("/create/newUser", [
    body('name').notEmpty().withMessage("Name can not be empty"),
    body('email').notEmpty().isEmail().withMessage("Required field must not be empty")
], async (request: express.Request, response: express.Response) => {

    //to encrypt password


    let { name, email, password } = request.body


    let salt = await bcrypt.genSalt()
    let encryptPass = await bcrypt.hash(password, salt)



    let error = validationResult(request)

    if (!error.isEmpty()) {
        response.status(400).json({
            "status": request.statusCode,
            "error": error
        })
    }
    else {
        response.status(200).json({
            "message": "Welcome to the app!",
            "data": request.body,
            "encryptPass": encryptPass

        })
    }

    console.log(encryptPass);
})
export default postRouting