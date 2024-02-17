import {
    GraphQLObjectType,
    GraphQLBoolean,
    GraphQLID,
    GraphQLString,
    GraphQLList,
} from "graphql";
import TaskType from "../task/schema";

const UserType = new GraphQLObjectType({
    name: "User",
    fields: () => ({
        id: {
            type: GraphQLID,
        },
        firstName: {
            type: GraphQLString,
        },
        lastName: {
            type: GraphQLString,
        },
        email: {
            type: GraphQLString,
        },
        // password: {
        //     type: GraphQLString,
        // },
        isRegistered: {
            type: GraphQLBoolean,
        },
        tasks: {
            type: GraphQLList(TaskType),
        },
    }),
});

export default UserType;
