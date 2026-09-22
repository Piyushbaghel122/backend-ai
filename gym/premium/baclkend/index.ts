import express from "express";

const app =  express();

app.get("/", (req, res) => {
    res.send("working");
});

app.listen(4000, () => {
    console.log("server started on port http://localhost:4000");
});