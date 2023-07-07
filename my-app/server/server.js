const express = require('express');
const path = require('path');
const { ApolloServer } = require('apollo-server-express');
const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');
const { authMiddleware } = require('./utils/auth');
const listRoutes = require('./routes/listRoutes'); 
const entryRoutes = require('./routes/entryRoutes'); 

const app = express();
const PORT = process.env.PORT || 3001;

// Apollo Server setup
const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

// Your API endpoints go here
app.use('/api', listRoutes); // Use the list routes
app.use('/api', entryRoutes); // Use the entry routes

// Connect to the database and start the server
db.once('open', () => {
  apolloServer.start().then(() => {
    console.log('Connected to the database');
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}${apolloServer.graphqlPath}`);
    });
  });
});




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
