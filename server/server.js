const express = require('express');
const path = require('path');
const { ApolloServer } = require('apollo-server-express');
const { typeDefs , resolvers} = require('./schemas')
const db = require('./config/connection');
const { authMiddleware } = require('./utils/auth')
const listRoutes = require('./routes/listRoutes'); 
const entryRoutes = require('./routes/entryRoutes'); 



// async function startApolloServer() {
const app = express();
const PORT = process.env.PORT || 3001;

// Apollo Server setup
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,

});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.use('/api', listRoutes); // Use the list routes
app.use('/api', entryRoutes); // Use the entry routes

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




//   app.use(routes);

//   
