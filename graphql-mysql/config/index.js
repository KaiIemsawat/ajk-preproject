import { Sequelize } from "sequelize";
import colors from "colors";

const sequelize = new Sequelize("ajk_todo", "root", "rootroot", {
    host: "localhost",
    dialect: "mysql",
});

const connect = async () => {
    try {
        await sequelize.authenticate();
        console.log(`DATABASE CONNECTED`.cyan.bold);
    } catch (error) {
        console.error("error : ", error);
    }
};

const close = () => {
    sequelize.close();
};

export { sequelize, connect, close };
