import express from "express";

import "./config/index.js";
import "./model/bookModel.js";
import "./model/userModel.js";

const port = 3300;
const app = express();

app.listen(port, () => {
    console.log(`SERVER CONNECTED TO PORT :: ${port}`.cyan.bold);
});
