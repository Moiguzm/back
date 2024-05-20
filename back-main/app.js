import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import cookieParser from "cookie-parser";
import router from "./src/routers/auth.router.js";

const app = express();
app.use(
  cors({
    origin: ["https://front-main-three.vercel.app/","http://localhost:5173"],
    credentials: true,
  })
);


app.use(express.json({ limit: "100mb" }));
app.use(cookieParser()); 
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: false, limit: "100mb" }));

app.use(router)

export default app;
