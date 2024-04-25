import express from "express";
import cors from "cors";
import fs from "fs";

const app = express();
app.use(cors());


// const fs = require("fs");
const fileName = "data.json";
var data = 'dd';

if(fs.existsSync(fileName)) {
   console.log("File exists");
} else {
   console.log("File does not exist!! Creating file...");
   fs.writeFile(fileName, data, (err) => {
      if (err) {
         console.error("Error creating file: ", err);
      } else {
         console.log("File created successfully");
      }
   });

}

app.get("/", (req, res) => {
   res.send("Hello from server.js!!!!!!!!!! File stuff should be good or whatever");
});

app.get("/getData", (req, res) => {
   res.send(data);
});


app.listen(2000, ()=> console.log("App is running"));



// }
// populate();
// import {createServer} from 'node:http';

// // http = require('node:http');
// const listener = function (request, response) {
//    // Send the HTTP header 
//    // HTTP Status: 200 : OK
//    // Content Type: text/html
//    response.writeHead(200, {'Content-Type': 'text/html'});
  
//    // Send the response body as "Hello World"
//    response.end('<h2 style="text-align: center;">Hello World</h2>');
// };

// const server = createServer(listener);
// // server = http.createServer(listener);
// server.listen(3000);

// // Console will print the message

// console.log('Server running at http://127.0.0.1:3000/');
