import express from "express";
import Task from "./models/task.js";
import User from "./models/User.js";
import sequelize from "./config/index.js";
import colors from "colors";

const app = express();

const port = 3300;

app.listen(port, () =>
    console.log(`SERVER HAS LAUNCH ON PORT :: ${port}`.cyan.bold)
);
