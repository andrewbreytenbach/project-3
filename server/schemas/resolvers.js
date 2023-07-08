const { User, List } = require('../models')
const { signToken } = require('../utils/auth');


const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id }).populate('list');
        return userData;
      }
      throw new Error('Not authenticated');
    },
    allLists: async (parent, args, context) => {
      if (context.user) {
        const listData = await List.find();
        return listData;
      }
      throw new Error('Not authenticated');
    }, 
  },

  Mutation: {
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new Error('Invalid email or password');
      }

      console.log(user)
      const correctPassword = await user.isCorrectPassword(password);

      if (!correctPassword) {
        throw new Error('Invalid email or password');
      }

      const token = signToken(user);
      return {
        token,
        user,
      };
    },

    addUser: async (parent, args) => {
      const user = await User.create(args);

      const token = signToken(user);
      return {
        token,
        user,
      };
    },

    createList: async (parent, args, context) => {
      if (context.user) {
        const listData = await List.create(args);

        const userData = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $push: { list: listData._id } },
          { new: true },
        )

        console.log(userData)
        console.log(listData)
        return userData
      }

      throw new Error("You're not logged in!!")

    },

    addEntry: async (parent, { _id, entryInput }, context) => {
      if (context.user) {
        const list = await List.findOneAndUpdate(
          { _id: _id },
          { $push: { entries: entryInput } },
          { new: true },
        )

        return list
      }

      throw new Error("You're not logged in!!")
    },

    deleteEntry: async (parent, { _id, entries }, context) => {
      if (context.user) {
        const list = await List.findOneAndUpdate(
          { _id: _id },
          { $pull: {entries} },
          { new: true }
        )
        
        console.log(list)
        return list
      }

      throw new Error("You're not logged in!!")
    },

  }
};

module.exports = resolvers;
