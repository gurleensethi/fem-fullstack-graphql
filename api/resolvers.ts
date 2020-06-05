export default {
  Query: {
    pets(_, { input }, { models }) {
      return models.Pet.findMany({ ...input });
    },
    pet(_, { id }, { models }) {
      return models.Pet.findOne({ id });
    },
    user(_, { id }, { models }) {
      return models.User.findOne({ id });
    },
  },
  Mutation: {
    newPet(_, { input: { name, type, user } }, { models }) {
      return models.Pet.create({ name, type, user });
    },
  },
  Pet: {
    user(pet, args, { models }) {
      return models.User.findOne({ id: pet.user });
    },
  },
  User: {
    pets(user, args, { models }) {
      return models.Pet.findMany({ user: user.id });
    },
  },
};
