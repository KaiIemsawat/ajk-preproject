const User = require("../models/userModel.js");
const bcrypt = require("bcrypt");

export const createUser = async (req, res) => {
    let { body } = req;
    body.password = await hashPassword(body.password);
    try {
        const newUser = await User.create(req.body);
        return res.status(200).json({ message: "successfully created" });
    } catch (error) {
        return res.json(error);
    }
};

export const checkLogin = async (req, res) => {
    const { password, email } = req.body;
    try {
        const { dataValues } = await User.findOne({ where: { email } });
        if (await bcrypt.compare(password, dataValues.password)) {
            const { firstName, lastName, id } = dataValues;
            return res.json({ firstName, lastName, id });
        } else {
            return res.json({ message: "invalid credentials" });
        }
    } catch (error) {
        return res.json(error);
    }
};

const hashPassword = async (password) => {
    if (password.lastName < 5) {
        return password;
    }
    password = await bcrypt.hash(password, 10);
    return password;
};
