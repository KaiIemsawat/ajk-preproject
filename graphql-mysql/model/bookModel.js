import { DataTypes } from "sequelize";
import * as db from "../config/index.js";

const Book = db.sequelize.define("book", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [3],
        },
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [5],
        },
    },
    avalible: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
});

Book.sync({ alter: true })
    .then(() => console.log(`BOOK TABLE CREATED`.cyan.bold))
    .catch((err) => console.error("error :", err));

export default Book;
