const { User, Entry, List } = require('../models')
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

    addEntry: async (parent, args, context) => {
      if (context.user) {
      const entry = await Entry.create(args);
      return entry;
    }

      throw new Error("You're not logged in!!")
    },

    deleteEntry: async (parent, {entry_id}, context) => {
      if (context.user) {
      return await Entry.findOneAndDelete({_id: entry_id})
      }
    },
    
    updateEntry: async (parent, {entry_id}, context) => {
      if (context.user) {
       const entryData = await Entry.findOneAndUpdate(
        {}
       )
      }
    }
  }
};

module.exports = resolvers;
