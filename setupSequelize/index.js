const express = require("express");
const mysql = require("mysql");

const app = express();
const port = 3300;

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "rootroot",
    database: "demo-schema",
});

app.listen(port, () => {
    console.log(`SERVER HAS STARTED ON PORT :: ${port}`);
});
