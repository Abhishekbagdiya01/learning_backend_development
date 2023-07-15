import http, { IncomingMessage, ServerResponse } from 'http';
import * as url from 'url';
import * as fs from 'fs';
import * as path from 'path';
import { UserData } from './user/user_data';
import { AppRouting } from './routing/app_routing';

const hostName: string = "localhost"
const portNum: number = 5000

http.createServer((request: IncomingMessage, response: ServerResponse) => {
  response.statusCode == 200
  response.setHeader("content-type", "text/html")

  // response.write('<h1 style= "color:red" >Server created successfully<h1>')
  //response.write("hello this is my first server")

  // let _url = req.url

  // let pathName = url.parse(_url!).pathname
  // let queryParam = url.parse(_url!).query
  // let queryParamFilter = queryParam?.split("data").pop()!.replaceAll("%20", " ")
  // if (pathName == "/fs") {
  //   fs.readFile(path.join(__dirname, "user_response.json"), "utf-8", (error, result) => {
  //     // console.log(error);
  //     // console.log(result);

  //     if (error) {
  //       response.write(`<h2>error is  : ${error}</h2>>`)
  //     }
  //     if (result) {
  //       response.write(`<pre>result is  : ${result}</pre>>`)
  //       response.end()
  //     }


  //   })

  // }

  AppRouting.appRouting(request, response)



}).listen(portNum, hostName, () => {

  console.log(`http://${hostName}:${portNum}}`)

})