import gql from "graphql-tag";
import { ApolloServer, IResolvers } from "apollo-server";

const typeDefs = gql`
  type User {
    email: String!
    avatar: String
    friends: [User]!
  }

  type Query {
    me: User
  }
`;

const resolvers: IResolvers = {
  Query: {
    me() {
      return {
        email: "yoda@masters.com",
        avatar: "Testing",
        friends: [],
      };
    },
  },
};

(async () => {
  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
  });

  const { port } = await apolloServer.listen(4000);
  console.log(`Apollo listening on ${port}...`);
})();