const Book = require("../models/bookModel.js");

export const createBook = async (req, res) => {
    try {
        const newBook = await Book.create(req.body);
        return res.status(200).json(newBook);
    } catch (error) {
        return res.json(error);
    }
};

export const getAllBooks = async (req, res) => {
    try {
        const books = await Book.findAll();
        return res.status(200).json(books);
    } catch (error) {
        return res.json(error);
    }
};

export const deleteBookById = async (req, res) => {
    const { id } = req.params;

    try {
        await Book.destroy({
            where: { id },
        });
        return res.status(200);
    } catch (error) {
        return res.json(error);
    }
};

export const getBookById = async (req, res) => {
    const { id } = req.params;
    try {
        const book = await Book.findByPk(id);
        return res.status(200).json(book);
    } catch (error) {
        return res.json(error);
    }
};

export const updateBookById = async (req, res) => {
    const { id } = req.params;
    try {
        const updatedBook = await Book.update(req.body, { where: { id } });
        return res.status(200).json(updatedBook);
    } catch (error) {
        return res.json(error);
    }
};
