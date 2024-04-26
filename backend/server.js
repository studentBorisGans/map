import express from "express";
import cors from "cors";
import fs from "fs";

const app = express();
app.use(cors());


// const fs = require("fs");
const fileName = "data.json";
var data = 'it works!!!';

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

app.get("/getData", (req, res) => {
   res.send(data);
});

app.get("/", (req, res) => {
   res.send("Hello from server.js!!!!!!!!!! File stuff should be good or whatever");
});




app.listen(4000, ()=> console.log("App is running"));