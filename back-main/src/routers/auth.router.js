import { Router } from "express";
import { deleted,register,shows,update,showOne } from "../controllers/auth.controller.js";

const router = Router();

router.post("/register", register);

router.get("/", shows);

router.get('/:id',showOne)

router.put("/update/:id", update);

router.delete("/deleted/:id",deleted);

export default router;