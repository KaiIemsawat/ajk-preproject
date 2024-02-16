import { DataTypes } from "sequelize";
import { sequelize } from "../config/dbConfig";

const User = sequelize.define("users", {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
    },
    firstname: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [2, 64],
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
});

export default User;
