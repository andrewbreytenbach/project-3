const User = require('../models/User');
const Entry = require('../models/Entry');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id });
        return userData;
      }
      throw new Error('Not authenticated');
    },
    allEntries: async () => {
      try {
        const entries = await Entry.find();
        return entries;
      } catch (error) {
        throw new Error('Failed to fetch entries');
      }
    },
  },

  Mutation: {
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new Error('Invalid email or password');
      }

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

    createEntry: async (_, { entryData }) => {
      const entry = new Entry(entryData);
      await entry.save();
      return entry;
    },

    updateEntry: async (_, { entryId, entryData }) => {
      const entry = await Entry.findByIdAndUpdate(entryId, entryData, { new: true });

      if (!entry) {
        throw new Error('Entry not found');
      }

      return entry;
    },
    deleteEntry: async (_, { entryId }) => {
      const entry = await Entry.findByIdAndDelete(entryId);

      if (!entry) {
        throw new Error('Entry not found');
      }

      return entry;
    },
  },
};

module.exports = resolvers;
