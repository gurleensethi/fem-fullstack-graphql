export default {
  Query: {
    pets(_, { input }, { models }) {
      return models.Pet.findMany({ ...input });
    },
    pet(_, { id }, { models }) {
      return models.Pet.findOne({ id });
    },
  },
  Mutation: {
    newPet(_, { input: { name, type } }, { models }) {
      return models.Pet.create({ name, type });
    },
  },
  Pet: {},
  User: {},
};
