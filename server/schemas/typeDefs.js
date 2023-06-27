const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    me: User!
  }

  type Mutation {
    login(email: String!, password: String!): Auth!
    addUser(username: String!, email: String!, password: String!): Auth!
    saveBook(bookInput: BookInput!): User!
    removeBook(bookId: String!): User!
  }

  type User {
    _id: ID!
    username: String!
    email: String!
    bookCount: Int!
    savedBooks: [Book!]!
  }

  type Book {
    bookId: String!
    authors: [String!]!
    description: String!
    title: String!
    image: String!
    link: String!
  }

  type Auth {
    token: String!
    user: User!
  }

  input BookInput {
    bookId: String!
    authors: [String!]!
    description: String!
    title: String!
    image: String!
    link: String!
  }
`;

module.exports = typeDefs;
