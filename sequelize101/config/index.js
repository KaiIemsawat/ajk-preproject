const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("ajk_db", "root", "rootroot", {
    host: "localhost",
    dialect: "mysql",
});

sequelize
    .authenticate()
    .then(() => {
        console.log("DATABASE CONNECTED ...");
    })
    .catch((error) => console.log("Failed to connect to DB : ", error));

module.exports = sequelize;
