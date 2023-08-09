import express from 'express';
import { getDb } from '../data/mongodb_client';
import { ObjectId } from 'mongodb';


const userRouting = express.Router()

/* CRUD operation
CREATE || RETRIEVE || UPDATE || DELETE
*/

userRouting.post("/addNewUser", async (request: express.Request, response: express.Response) => {
    let db = getDb()
    let userCollection = db.collection("users")

    let body = request.body

    const data = await userCollection.insertOne(body)

    response.status(200).json({
        "response": data
    })
})

userRouting.get("/getUsers", async (request: express.Request, response: express.Response) => {
    let db = getDb()
    let usersCollection = db.collection('users')
    const data = await usersCollection.find({}).toArray()

    response.status(200).json({
        "response": data
    })
})

userRouting.put("/updateUser", async (request: express.Request, response: express.Response) => {
    let db = getDb()
    let body = request.body
    let usersCollection = db.collection('users')

    let userObject = {
        "name": body.name,
        "email": body.email
    }
    const data = await usersCollection.updateOne({ "_id": new ObjectId(body.userId) }, {
        $set: userObject
    })
    response.status(200).json({
        "response": data,
    })

})

userRouting.delete("/deleteUser", async (request: express.Request, response: express.Response) => {
    let db = getDb()
    let userId = request.body.userId
    let usersCollection = db.collection('users')


    const data = await usersCollection.deleteOne({ "_id": new ObjectId(userId) })
    response.status(200).json({
        "response": data,
    })

})

export default userRouting