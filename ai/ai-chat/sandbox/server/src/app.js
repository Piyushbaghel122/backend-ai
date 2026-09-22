import express from "express";
import  morgan from "morgan";

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/api/sandbox/health", (req,  res) => {
    res.status(200).json({
        message: "sandbox API is healthly",
        status: "ok"
    });
});



export default app;
