const { DataTypes } = require("sequelize");
const sequelize = require("../config/index.js");

const User = sequelize.define("user", {
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
    age: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            isInt: true,
            min: 13,
        },
    },
    isMember: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
});

User.sync({ alter: true })
    .then(() => console.log("User table created"))
    .catch((error) => console.log("error : ", error));

module.exports = User;
