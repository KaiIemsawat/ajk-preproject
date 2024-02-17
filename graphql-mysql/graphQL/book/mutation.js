import {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLSchema,
    GraphQLList,
    GraphQLNonNull,
    GraphQLEnumType,
    GraphQLBoolean,
    GraphQLInt,
} from "graphql";

import { connect } from "../../config/index.js";
import BookType from "../../graphQL/book/schema.js";
import Book from "../../model/bookModel.js";

const createBook = {
    type: BookType,
    args: {
        title: { type: GraphQLNonNull(GraphQLString) },
        description: { type: GraphQLNonNull(GraphQLString) },
        avalible: { type: GraphQLNonNull(GraphQLBoolean) },
        userId: { type: GraphQLNonNull(GraphQLInt) },
    },
    resolve: async (parent, args, context, info) => {
        await connect();
        const book = await Book.create(args);
        return book;
    },
};

const updateBook = {
    type: BookType,
    args: {
        id: { type: GraphQLNonNull(GraphQLInt) },
        title: { type: GraphQLString },
        description: { type: GraphQLString },
        avalible: { type: GraphQLBoolean },
    },
    resolve: async (parent, args) => {
        await connect();

        // Update the book and get the number of affected rows
        const [numRows] = await Book.update(args, {
            where: {
                id: args.id,
            },
        });

        if (numRows > 0) {
            // If rows were affected, fetch the updated book
            const updatedBook = await Book.findByPk(args.id);
            return updatedBook;
        } else {
            // If no rows were affected, return null or handle accordingly
            return null;
        }
    },
};

const deleteBook = {
    type: BookType,
    args: {
        id: { type: GraphQLNonNull(GraphQLInt) },
    },
    resolve: async (parent, args) => {
        await connect();

        const bookToDelete = await Book.findByPk(args.id);
        if (!bookToDelete) {
            return null;
        }

        const deletedBook = await Book.destroy({
            where: {
                id: args.id,
            },
        });

        return deletedBook;
    },
};

export default { createBook, updateBook, deleteBook };
