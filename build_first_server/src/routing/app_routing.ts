import http, { IncomingMessage, ServerResponse } from 'http';
import * as url from 'url';

import { UserData } from '../user/user_data';

export class AppRouting {
    static appRouting(request: IncomingMessage, response: ServerResponse) {

        let pathName = url.parse(request.url!).pathname
        let queryParam = url.parse(request.url!).query
        let queryParamFilter = queryParam?.split("data").pop()!.replaceAll("%20", " ")
        let method = request.method

        if (pathName == "/userdata") {
            let userData = new UserData()
            let username = userData.addUser("Abhishek");

            response.write(`<h1>${username} </h1>`)
            userData.getAllUser((result) => {
                response.end(`<pre>${result}</pre>`)
            })


        }
        else if (pathName == "/createUser" && method == "POST") {


            let body: any = ""
            request.on('data', (chunk) => {
                body += chunk
            }).on('end', () => {

                let responseJson = JSON.parse(body)
                console.log(body)
                response.end(`<h1>${responseJson.name}</h1>`)
            })


            let userData = new UserData()
            let username = userData.addUser("Abhishek");

            response.end(`<h1>${username}</h1>`)




        }

        else if (pathName == "/login" && method == "POST") {
            let body: any = ""
            request.on("data", (chunk) => {
                body += chunk
            }).on("end", () => {
                let jsonResponse = JSON.parse(body)
                console.log(body)
                if (jsonResponse.name == "Abhishek" && jsonResponse.pass == "1234") {
                    response.end(`<h1  style= "color:green">Login success Mr ${jsonResponse.name}</h1>`)
                }
                else response.end(`<h1  style= "color:green">Invalid name and password</h1>`)
            })
        }

        else {
            response.write(`<h1 style= "color:red" > query : ${queryParamFilter} , path name : ${pathName}, method : ${method}  <h1`)
            response.end()
        }



    }
}
