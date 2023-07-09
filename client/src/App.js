import React, { useState } from 'react';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import Navbar from './pages/Navbar';
import About from './pages/About';
import CreateEntry from './pages/CreateEntry';
import Favorites from './pages/Favorites';
import CreateList from './pages/CreateList';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import Signup from './pages/SignUp';
import DeleteEntry from './pages/DeleteEntry';
import DeleteList from './pages/DeleteList';
import UpdateEntry from './pages/UpdateEntry';
import UpdateList from './pages/UpdateList';
import Logout from './pages/Logout'; // Import the Logout component

// function App() {
//   const [loggedIn, setLoggedIn] = useState(false);

//   // Function to handle login
//   const handleLogin = () => {
//     // Perform login authentication logic
//     // Set loggedIn to true if login is successful
//     setLoggedIn(true);
//   };

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Navbar />
        
          <Route exact path="/login" component={Login}>
            {/* {loggedIn ? <Redirect to="/" /> : <Login handleLogin={handleLogin} />} */}
          </Route>
          <Route exact path="/" component={HomePage}>
            {/* {loggedIn ? <HomePage userName="John" /> : <Redirect to="/login" />} */}
          </Route>
          <Route exact path="/about" component={About}>
            {/* {loggedIn ? <About /> : <Redirect to="/login" />} */}
          </Route>
          <Route exact path="/favorites" component={Favorites}>
            {/* {loggedIn ? <Favorites /> : <Redirect to="/login" />} */}
          </Route>
          <Route exact path="/createentry" component={CreateEntry} />
          <Route exact path="/createlist" component={CreateList} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/deleteentry" component={DeleteEntry} />
          <Route exact path="/deletelist" component={DeleteList} />
          <Route exact path="/updateentry" component={UpdateEntry} />
          <Route exact path="/updatelist" component={UpdateList} />
          <Route exact path="/logout" component={Logout} /> {/* Add the Logout route */}
          {/* catch-all route that is rendered when none of the defined paths match */}
          
        
      </Router>
      </ApolloProvider>
  );
}

export default App;
