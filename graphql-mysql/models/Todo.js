import { DataTypes } from "sequelize";
import { sequelize } from "../config/dbConfig";

const Todo = sequelize.define("todos", {
    id: {
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
            len: [3],
        },
    },
    workLoadPoint: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            isInt: true,
            min: 1,
            max: 8,
        },
    },
});

export default Todo;
