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

app.get("/select", (req, res) => {
    db.query("SELECT * FROM countries", (err, result) => {
        if (err) {
            console.log(err);
        }

        res.send(result);
    });
});

app.post("/insert", (req, res) => {
    const countryName = "Panama";
    const population = 39000000;

    db.query(
        "INSERT INTO countries (countryName, population) VALUES (?, ?)",
        [countryName, population],
        (err, result) => {
            if (err) {
                console.log(err);
            }

            res.send(result);
        }
    );
});

app.listen(port, () => {
    console.log(`SERVER HAS STARTED ON PORT :: ${port}`);
});
