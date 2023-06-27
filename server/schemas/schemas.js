const { gql } = require('apollo-server-express');
const resolvers = require('./resolvers'); // Update the path according to your file structure

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    savedBooks: [Book]
    bookCount: Int
  }

  type Book {
    _id: ID
    title: String
    author: String
    description: String
    # Add other fields for the Book type if necessary
  }

  type Query {
    me: User
    # Add other query types if necessary
  }

  type Mutation {
    login(email: String!, password: String!): AuthData
    addUser(username: String!, email: String!, password: String!): AuthData
    saveBook(bookInput: BookInput!): User
    removeBook(bookId: ID!): User
    # Add other mutation types if necessary
  }

  input BookInput {
    title: String
    author: String
    description: String
    # Add other fields needed for saving a book
  }

  type AuthData {
    token: String
    user: User
  }
`;

module.exports = {
  typeDefs,
  resolvers,
};
