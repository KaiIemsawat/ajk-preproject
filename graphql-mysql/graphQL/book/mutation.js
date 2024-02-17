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

export default { createBook };
