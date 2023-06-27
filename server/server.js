const express = require('express');
const path = require('path');
const { ApolloServer } = require('apollo-server-express');
const { typeDefs, resolvers } = require('./schemas/schemas');
const db = require('./config/connection');
const routes = require('./routes');
const { GraphQLModule } = require('graphql-modules');
const { ApolloServerPluginLandingPageGraphQLPlayground } = require('apollo-server-core'); // Import the necessary plugin

async function startApolloServer() {
  const app = express();
  const PORT = process.env.PORT || 3001;

  // Apollo Server setup
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => ({ req }),
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground()], // Add the playground plugin
  });

  await server.start();

  // Apply Apollo Server middleware before other middleware and routes
  server.applyMiddleware({ app });

  const driverConfig = {
    driver: ApolloDriver,
    cache: 'bounded',
    // Other configuration options for your Apollo Driver
  };

  const graphqlModule = new GraphQLModule(driverConfig);

  // Middleware and routes
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
  }

  app.use(routes);

  // Connect to the database and start the server
  db.once('open', () => {
    app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
  });
}

startApolloServer().catch((err) => console.error(err));
