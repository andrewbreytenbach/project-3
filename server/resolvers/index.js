const userResolvers = require('./userResolvers');

module.exports = {
  Query: {
    me: userResolvers.me,
  },
  Mutation: {
    login: userResolvers.login,
    addUser: userResolvers.addUser,
    saveBook: userResolvers.saveBook,
    removeBook: userResolvers.removeBook,
  },
};
