const { Router } = require("express");
const {
    createBook,
    deleteBookById,
    getAllBooks,
    getBookById,
    updateBookById,
} = require("../controllers/bookController.js");

const router = Router();

router.route("/").post(createBook).get(getAllBooks);

router
    .route("/:id")
    .get(getBookById)
    .put(updateBookById)
    .delete(deleteBookById);

module.exports = router;
