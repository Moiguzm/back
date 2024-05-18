import app from "./app.js";
import http from "http";
import MySQLDatabase from "./database.js";
import { PORT } from "./config.js";
const connection=new MySQLDatabase();
const server = http.createServer(app);

server.listen(PORT, () => {
    console.log(`Server is running ${PORT}`);
  });