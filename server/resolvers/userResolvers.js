const { User, Book } = require('../models');

const userResolvers = {
  me: async (parent, args, context) => {
    // Add your authentication logic here
    // Example: Check if the user is authenticated using context

    if (!context.user) {
      throw new Error('Authentication required');
    }

    // Retrieve the currently logged-in user
    const currentUser = await User.findById(context.user._id);

    return currentUser;
  },
  login: async (parent, { email, password }) => {
    // Implement your login logic here
    // Example: Authenticate the user and generate a token

    const user = await User.findOne({ email });

    if (!user) {
      throw new Error('Invalid email or password');
    }

    // Compare password
    const isPasswordValid = await user.comparePassword(password);

    if (!isPasswordValid) {
      throw new Error('Invalid email or password');
    }

    // Generate token
    const token = generateToken(user);

    return {
      token,
      user,
    };
  },
  addUser: async (parent, { username, email, password }) => {
    // Implement your logic to create a new user
    // Example: Create a new user with the provided data

    const existingUser = await User.findOne({ $or: [{ username }, { email }] });

    if (existingUser) {
      throw new Error('Username or email already exists');
    }

    const user = await User.create({ username, email, password });

    // Generate token
    const token = generateToken(user);

    return {
      token,
      user,
    };
  },
  saveBook: async (parent, { bookInput }, context) => {
    // Add your authentication logic here
    // Example: Check if the user is authenticated using context

    if (!context.user) {
      throw new Error('Authentication required');
    }

    // Find the current user
    const currentUser = await User.findById(context.user._id);

    // Create a new book using the bookInput and save it to the database
    const newBook = await Book.create(bookInput);

    // Update the current user's savedBooks array
    currentUser.savedBooks.push(newBook);
    currentUser.bookCount += 1;
    await currentUser.save();

    return currentUser;
  },
  removeBook: async (parent, { bookId }, context) => {
    // Add your authentication logic here
    // Example: Check if the user is authenticated using context

    if (!context.user) {
      throw new Error('Authentication required');
    }

    // Find the current user
    const currentUser = await User.findById(context.user._id);

    // Remove the book from the currentUser's savedBooks array based on bookId
    const bookIndex = currentUser.savedBooks.findIndex((book) => book.bookId === bookId);
    if (bookIndex === -1) {
      throw new Error('Book not found in savedBooks');
    }

    currentUser.savedBooks.splice(bookIndex, 1);
    currentUser.bookCount -= 1;
    await currentUser.save();

    return currentUser;
  },
};

module.exports = userResolvers;
