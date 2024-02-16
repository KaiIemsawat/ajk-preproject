import { gql } from "apollo-server-express";

const rootType = gql`
    type Query {
        root: String
    }
    type Mutation {
        root: String
    }
`;

export default [rootType];
