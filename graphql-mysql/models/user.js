import { DataTypes } from "sequelize";
import sequelize from "../config/index.js";
import colors from "colors";
import Task from "./task.js";

const User = sequelize.define("user", {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [2],
        },
    },
    lastName: {
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

User.sync({ alter: true })
    .then(() => {
        User.hasMany(Task, { as: "tasks" });
        console.log(`User table created`.cyan.bold);
    })
    .catch((err) => console.log("error :", err));

export default User;
