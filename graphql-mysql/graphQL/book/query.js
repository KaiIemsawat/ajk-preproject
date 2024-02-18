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
import BookType from "../../graphQL/book/schema.js";
import { connect } from "../../config/index.js";
import Book from "../../model/bookModel.js";

const getBook = {
    type: BookType,
    args: {
        id: { type: GraphQLNonNull(GraphQLInt) },
    },
    resolve: async (parent, args, context, info) => {
        await connect();
        const book = await Book.findByPk(args.id, { include: ["user"] });
        return book;
    },
};

const getAllBooks = {
    type: new GraphQLList(BookType),
    resolve: async (parent, args) => {
        await connect();
        const books = await Book.findAll({ include: ["user"] });
        return books;
    },
};

export default { getBook, getAllBooks };
