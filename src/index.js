import express from "express"; 
import dotenv from "dotenv";

dotenv.config();

const app = expres();

const port = 3000

app.use(express.json())

app.get('/', (req, res) => {
    res.json({ 
        success: true ,
        message: "Welcome to leetcode api "
    })
})

app.listen(port, () =>{ 
    console.log(`Example app listening at http://localhost:${port}`)
})