import gql from "graphql-tag";
import { ApolloServer } from "apollo-server";
const { models, db } = require("./db");
import schema from "./schema";
import resolvers from "./resolvers";

(async () => {
  const apolloServer = new ApolloServer({
    typeDefs: schema,
    resolvers,
    context() {
      return { models };
    },
  });

  const { port } = await apolloServer.listen(4000);
  console.log(`Apollo listening on ${port}...`);
})()
  .then()
  .catch(console.log);
