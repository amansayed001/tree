import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";


// .env configuration
dotenv.config();

// express application instance
const app = express();

// Current environment
const currentEnv = process.env.ENVIRONMENT || "DEV";

// express middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan((currentEnv === "PROD") ? "combined" : "dev"));
app.use(cors());


// temp
app.get("/", (req, res) => {
    res.send({
        message: "API is working.."
    });
});


const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log("SERVER STARTED..");
});

