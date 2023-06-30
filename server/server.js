// Import necessary libraries and modules
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const { authMiddleware } = require('./utils/auth');

// Import GraphQL type definitions and resolvers from the schemas file
const { typeDefs, resolvers } = require('./schemas');

// Import database connection configuration
const db = require('./config/connection');

// Set the port for the server to listen on
const PORT = process.env.PORT || 3001;

// Create an instance of the Express application
const app = express();

// Create an instance of the Apollo Server
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware, // Middleware function for authentication
});

// Configure middleware for parsing URL-encoded and JSON data
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Serve static files from the client build folder in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

// Route for serving the index.html file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

// Asynchronous function to start the Apollo Server
const startApolloServer = async () => {
  await server.start();
  server.applyMiddleware({ app });

  // Open the database connection
  db.once('open', () => {
    // Start the Express server
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    });
  });
};

// Call the async function to start the server
startApolloServer();
