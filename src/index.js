import express from "express"; 
import dotenv from "dotenv";
import morgan from "morgan";

dotenv.config();

const app = express();

const port = process.env.PORT || 8080;

// Middlewares
app.use(express.json());

app.use(morgan("dev"));


app.get('/', (req, res) => {
    res.json({ 
        success: true ,
        message: "Welcome to leetcode api "
    })
})

app.listen(port, () =>{ 
    console.log(`Example app listening at http://localhost:${port}`)
})