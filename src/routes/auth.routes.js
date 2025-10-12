import express from "express";
import { register } from "../contollers/auth.contoller.js";

const router = express.Router();

// 1.register

router.post('/register',register)
// 2.login
// 3.logout
// 4.check

export default router;