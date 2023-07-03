const express = require('express');
const path = require('path');
const { ApolloServer } = require('apollo-server-express');
const { typeDefs , resolvers} = require('./schemas')
const db = require('./config/connection');
const { authMiddleware } = require('./utils/auth')

// const routes = require('./routes');
// const { GraphQLModule } = require('graphql-modules');
// const { ApolloServerPluginLandingPageGraphQLPlayground } = require('apollo-server-core'); // Import the necessary plugin

// async function startApolloServer() {
const app = express();
const PORT = process.env.PORT || 3007;

// Apollo Server setup
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
  //     plugins: [ApolloServerPluginLandingPageGraphQLPlayground()], // Add the playground plugin
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}


const startApolloServer = async () => {
  await server.start();
  server.applyMiddleware({app})

  // Connect to the database and start the server
  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    })
  })
};

//Initiate the server 
startApolloServer()

//   // Apply Apollo Server middleware before other middleware and routes
//   server.applyMiddleware({ app });

//   const driverConfig = {
//     driver: ApolloDriver,
//     cache: 'bounded',
//     // Other configuration options for your Apollo Driver
//   };

//   const graphqlModule = new GraphQLModule(driverConfig);

//   // Middleware and routes



//   app.use(routes);

//   

// startApolloServer().catch((err) => console.error(err));
