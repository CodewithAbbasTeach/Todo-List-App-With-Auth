const express = require("express"); // Fixed spelling of 'express'


const app = express(); // Fixed spelling of 'express'
require("./conn/conn");
app.get("/", (req, res) => {
    res.send("hello world");
});

app.listen(1000, () => {
    console.log("server started on port 1000"); // Added port number to the log
});
