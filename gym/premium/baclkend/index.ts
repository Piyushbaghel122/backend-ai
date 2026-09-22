import express, { Request, Response } from "express";

const app = express();

app.get("/", (req: Request, res: Response) => {
    res.send("hello-service");
});

app.listen(4000, () => {
    console.log("server started on port http://localhost:4000");
});