const { DataTypes } = require("sequelize");

const sequelize = require("../config/index.js");
const User = require("./userModel.js");

const Book = sequelize.define("book", {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [2],
        },
    },
    author: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

Book.belongsTo(User);
User.hasMany(Book);

Book.sync({ alter: true })
    .then(() => console.log("Book table created"))
    .catch((error) => console.log("error : ", error));

module.exports = Book;
