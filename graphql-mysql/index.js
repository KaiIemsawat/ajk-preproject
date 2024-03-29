import express from "express";
import { graphqlHTTP } from "express-graphql";
import {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLSchema,
    GraphQLList,
    GraphQLNonNull,
    GraphQLEnumType,
} from "graphql";

import "./config/index.js";
import "./model/bookModel.js";
import "./model/userModel.js";
import userMutations from "./graphql/user/mutation.js";
import bookMutations from "./graphQL/book/mutation.js";
import userQuery from "./graphQL/user/query.js";
import bookQuery from "./graphQL/book/query.js";
import Book from "./model/bookModel.js";
import User from "./model/userModel.js";

const port = 3300;
const app = express();

User.hasMany(Book, { as: "books" });
Book.belongsTo(User, { as: "user" });

const Query = new GraphQLObjectType({
    name: "Query",
    fields: {
        ...userQuery,
        ...bookQuery,
    },
});

const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: () => ({
        ...userMutations,
        ...bookMutations,
    }),
});

app.use(
    "/graphql",
    graphqlHTTP({
        graphiql: true,
        schema: new GraphQLSchema({
            query: Query,
            mutation: Mutation,
        }),
    })
);

app.listen(port, () => {
    console.log(`SERVER CONNECTED TO PORT :: ${port}`.cyan.bold);
});
