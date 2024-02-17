import { Sequelize } from "sequelize";

const sequelize = new Sequelize("ajk_todo", "root", "rootroot", {
    host: "localhost",
    dialect: "mysql",
});

sequelize
    .authenticate()
    .then(() => {
        console.log(`DATABASE CONNECTED ...`);
    })
    .catch((error) => console.log("Failed to connect to DB : ", error));

export default sequelize;
