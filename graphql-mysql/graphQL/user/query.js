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
import { connect } from "../../config/index.js";
import User from "../../model/userModel.js";

const getUser = {
    type: UserType,
    args: {
        id: { type: GraphQLNonNull(GraphQLInt) },
    },
    resolve: async (parent, args, context, info) => {
        await connect();
        const user = await User.findByPk(args.id, { include: ["books"] });
        return user;
    },
};

const getAllUsers = {
    type: new GraphQLList(UserType),
    resolve: async (parent, args) => {
        await connect();
        const users = await User.findAll({ include: ["books"] });
        return users;
    },
};

export default { getUser, getAllUsers };
