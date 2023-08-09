import { MongoClient, Db } from "mongodb";

let mongodb: Db

export async function connectToDb () {
    const url = "mongodb://localhost:27017/"
    const client = new MongoClient(url)

    mongodb = client.db("socialMedia")
    console.log("Db connected...........")
}

export function getDb (): Db {
    return mongodb
}