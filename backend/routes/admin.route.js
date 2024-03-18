import express from "express";
import { Login, Test } from "../controllers/admin.controller.js";
import { jwtValidate } from "../middleware.js";

const router = express.Router();

router.post("/login", Login);
router.get("/test", jwtValidate, Test);

export default router;
