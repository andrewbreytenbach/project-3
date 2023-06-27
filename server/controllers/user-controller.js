const { User } = require('../models');
const { signToken } = require('../utils/auth');

module.exports = {
  // Resolver for getting a user by their ID
  getUser: async (_, { userId }) => {
    try {
      const user = await User.findById(userId);
      return user;
    } catch (err) {
      throw new Error('Failed to fetch user');
    }
  },

  // Resolver for creating a new user
  createUser: async (_, { input }) => {
    try {
      const user = await User.create(input);
      const token = signToken(user);
      return { user, token };
    } catch (err) {
      throw new Error('Failed to create user');
    }
  },

  // Resolver for user login
  login: async (_, { input }) => {
    try {
      const { username, password } = input;
      const user = await User.findOne({ username });

      if (!user) {
        throw new Error("Can't find this user");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new Error('Wrong password!');
      }

      const token = signToken(user);
      return { user, token };
    } catch (err) {
      throw new Error('Failed to login');
    }
  },

  // Resolver for getting a single user by their ID
  getSingleUser: async (_, args) => {
    try {
      const user = await User.findById(args.userId);
      return user;
    } catch (err) {
      throw new Error('Failed to fetch user');
    }
  },

  // Resolver for saving a book to a user's savedBooks field
  saveBook: async (_, { userId, bookInput }) => {
    try {
      const updatedUser = await User.findByIdAndUpdate(
        userId,
        { $addToSet: { savedBooks: bookInput } },
        { new: true, runValidators: true }
      );
      return updatedUser;
    } catch (err) {
      throw new Error('Failed to save book');
    }
  },

  // Resolver for deleting a book from a user's savedBooks field
  deleteBook: async (_, { userId, bookId }) => {
    try {
      const updatedUser = await User.findByIdAndUpdate(
        userId,
        { $pull: { savedBooks: { bookId } } },
        { new: true }
      );
      return updatedUser;
    } catch (err) {
      throw new Error('Failed to delete book');
    }
  },
};
