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
import UserType from "../../graphQL/user/schema.js";

const BookType = new GraphQLObjectType({
    name: "Book",
    fields: () => ({
        id: { type: GraphQLInt },
        title: { type: GraphQLString },
        description: { type: GraphQLString },
        avalible: { type: GraphQLString },
        createdAt: { type: GraphQLString },
        updatedAt: { type: GraphQLString },
        userId: { type: GraphQLInt },
        user: { type: UserType },
    }),
});

export default BookType;
