import express from "express";
import { HandleGetAllUsers, HandleRegisterUser } from "../controllers/UserController.js";

const router = express.Router();


router.get("/get-users", HandleGetAllUsers)


router.post("/user-signup", HandleRegisterUser)

export default router;