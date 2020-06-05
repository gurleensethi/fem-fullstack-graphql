import { gql } from "apollo-server";

export default gql`
  type Pet {
    id: ID!
    name: String!
    createdAt: String!
    type: String!
    user: User!
  }

  input PetInput {
    name: String
    type: String
  }

  input NewPetInput {
    name: String!
    type: String!
    user: Int!
  }

  type User {
    id: ID!
    username: String!
    pets: [Pet]!
  }

  type Query {
    pets(input: PetInput): [Pet]!
    pet(id: ID!): Pet!
    user(id: ID!): User!
  }

  type Mutation {
    newPet(input: NewPetInput): Pet!
  }
`;
