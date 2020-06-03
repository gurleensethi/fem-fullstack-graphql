export default {
  Query: {
    pets(_, args, { models }) {
      return models.Pet.findMany();
    },
  },
  // Mutation: {},
  Pet: {},
  User: {},
};
