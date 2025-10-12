import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";


import {db} from "../lib/db.js";
import { UserRole } from "../generated/prisma/index.js";

export const register = async (req , res)=>{
    const {email, password, name} = req.body;

    try {
        const existingUser = await db.user.findUnique({
            where:{email}
        })

        if(existingUser){
            return res.status(400).json({
                error:"User already exists"
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await db.user.create({
            data:{
                email,
                password:hashedPassword,
                name,
                role:UserRole.USER
            }
        })

        const token = jwt.sign({id:newUser.id});

    } catch (error) {
        
    }
}


export const login = async (req , res)=>{}


export const logout = async (req , res)=>{}


export const checkAuth = async (req , res)=>{}