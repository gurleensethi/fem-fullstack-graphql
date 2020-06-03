import { gql } from "apollo-server";

export default gql`
  type Pet {
    id: ID!
    name: String!
    createdAt: String!
    type: String!
  }

  type User {
    id: ID!
    username: String!
  }

  type Query {
    pets: [Pet]!
  }
`;
