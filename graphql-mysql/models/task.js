import { DataTypes } from "sequelize";
import sequelize from "../config/index.js";
import User from "./User.js";
import colors from "colors";

const Task = sequelize.define("task", {
    taskId: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [2],
        },
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [5],
        },
    },
    workLoad: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            min: 1,
            max: 5,
        },
    },
});

Task.belongsTo(User);
User.hasMany(Task);

Task.sync({ alter: true })
    .then(() => console.log(`Task table created`.cyan.bold))
    .catch((err) => console.log("error :", err));

export default Task;
