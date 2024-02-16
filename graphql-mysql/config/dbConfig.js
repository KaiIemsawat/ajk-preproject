import { Sequelize } from "sequelize";
import User from "../models/User";
import Todo from "../models/Todo";

const sequelize = new Sequelize("ajk_db", "root", "rootroot", {
    host: "localhost",
    dialect: "mysql",
});

const connectDb = async () => {
    try {
        await sequelize.authenticate();
        console.log("DATABASE CONNECTED ...");
    } catch (error) {
        console.log("Failed to connect to DB : ", error);
    }
};

const closeDb = () => {
    sequelize.close();
};

export { sequelize, connectDb, closeDb };
