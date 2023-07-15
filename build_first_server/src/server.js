"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("http");
var url = require("url");
var fs = require("fs");
var path = require("path");
var hostName = "localhost";
var portNum = 5000;
http_1.default.createServer(function (req, res) {
    res.statusCode == 200;
    res.setHeader("content-type", "text/html");
    // res.write('<h1 style= "color:red" >Server created successfully<h1>')
    //res.write("hello this is my first server")
    var _url = req.url;
    var pathName = url.parse(_url).pathname;
    var queryParam = url.parse(_url).query;
    var queryParamFilter = queryParam === null || queryParam === void 0 ? void 0 : queryParam.split("data").pop().replaceAll("%20", " ");
    fs.readFile(path.join(__dirname, "user-response.json"), "utf-8", function (error, result) {
        console.log(result);
    });
    res.write("<h1 style= \"color:red\" > query : ".concat(queryParamFilter, " , path name : ").concat(pathName, "  <h1"));
    res.end();
}).listen(portNum, hostName, function () {
    console.log("http://".concat(hostName, ":").concat(portNum, "}"));
});
