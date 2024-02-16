const express = require("express");
require("./config/index.js");
require("./models/bookModel.js");

const app = express();

// app.use("/books", bookRouter);
// app.use("/users", userRouter);

app.listen(3300, () => {
    console.log("SERVER CONNECTED...");
});
