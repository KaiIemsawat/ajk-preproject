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
import userQuery from "./graphQL/user/query.js";

const port = 3300;
const app = express();

const Query = new GraphQLObjectType({
    name: "Query",
    fields: {
        ...userQuery,
    },
});

const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: () => ({
        ...userMutations,
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
