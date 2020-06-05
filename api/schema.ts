import { gql } from "apollo-server";

export default gql`
  type Pet {
    id: ID!
    name: String!
    createdAt: String!
    type: String!
  }

  input PetInput {
    name: String
    type: String
  }

  input NewPetInput {
    name: String!
    type: String!
  }

  type User {
    id: ID!
    username: String!
  }

  type Query {
    pets(input: PetInput): [Pet]!
    pet(id: ID!): Pet!
  }

  type Mutation {
    newPet(input: NewPetInput): Pet!
  }
`;
