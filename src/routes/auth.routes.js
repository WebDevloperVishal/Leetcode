import express from "express";
import { login, logout, register } from "../contollers/auth.contoller.js";

const router = express.Router();

// 1.register

router.post('/register',register);
// 2.login
router.post('/login',login);
// 3.logout
router.post('/logout',logout);
// 4.check

export default router;