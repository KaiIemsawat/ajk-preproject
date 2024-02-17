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
import bcrypt from "bcrypt";

import { connect } from "../../config/index.js";
import UserType from "../../graphQL/user/schema.js";
import User from "../../model/userModel.js";

const createUser = {
    type: UserType,
    args: {
        firstname: { type: GraphQLNonNull(GraphQLString) },
        lastname: { type: GraphQLNonNull(GraphQLString) },
        email: { type: GraphQLNonNull(GraphQLString) },
        password: { type: GraphQLNonNull(GraphQLString) },
        isRegistered: { type: GraphQLNonNull(GraphQLBoolean) },
    },
    resolve: async (parent, args, context, info) => {
        args.password = bcrypt.hashSync(args.password, 10);
        await connect();
        const user = await User.create(args);
        return user;
    },
};

export default { createUser };
