import { DataTypes } from "sequelize";
import * as db from "../config/index.js";
// import Book from "./bookModel.js";

const User = db.sequelize.define("user", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    firstname: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [2],
        },
    },
    lastname: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [2],
        },
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
        },
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [5],
        },
    },
    isRegistered: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
});

// User.hasMany(Book, { as: "books" });

// User.sync({ alter: true })
//     .then(() => console.log(`USER TABLE CREATED`.cyan.bold))
//     .catch((error) => console.log("error : ", error));

export default User;
