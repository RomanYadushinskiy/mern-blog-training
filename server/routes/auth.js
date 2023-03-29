import { Router } from "express";
import { register, login, getMe } from "../controllers/auth.js";


const router = new Router();

// Register
// http://localhost:3002/api/auth/register
router.post('/register', register)

// Login
// http://localhost:3002/api/auth/login
router.post('/lohin', login)

// Get Me
// http://localhost:3002/api/auth/me
router.post('/me', getMe)

export default router;