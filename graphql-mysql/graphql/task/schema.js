import {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLID,
    GraphQLString,
} from "graphql";

const TaskType = new GraphQLObjectType({
    name: "Task",
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
            type: GraphQLInt,
        },
        createdAt: {
            type: GraphQLString,
        },
        updatedAt: {
            type: GraphQLString,
        },
        userId: {
            type: GraphQLInt,
        },
    }),
});

export default TaskType;
