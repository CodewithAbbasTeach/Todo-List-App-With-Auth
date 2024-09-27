const express = require("express"); // Fixed spelling of 'express'
const app = express();
require("./conn/conn"); // Fixed spelling of 'express'
const auth= require("./routes/auth")


app.use(express.json());
app.get("/", (req, res) => {
    res.send("hello world");
});

app.use("/api/v1/",auth);



app.listen(1000, () => {
    console.log("server started on port 1000"); // Added port number to the log
});
