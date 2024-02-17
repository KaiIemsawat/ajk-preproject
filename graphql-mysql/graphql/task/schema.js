import {
    GraphQLObjectType,
    GraphQLBoolean,
    GraphQLID,
    GraphQLString,
} from "graphql";

const TaskType = new GraphQLObjectType({
    name: "User",
    fields: () => ({
        taskId: {
            type: GraphQLID,
        },
        title: {
            type: GraphQLString,
        },
        description: {
            type: GraphQLString,
        },
        workLoad: {
            type: GraphQLString,
        },
    }),
});

export default UserType;
