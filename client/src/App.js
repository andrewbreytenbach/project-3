import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Favorites from './components/favorites/Favorites';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import NotFound from './pages/NotFound';
import CreateList from './components/favorites/CreateList';
import UpdateList from './components/favorites/UpdateList';
import DeleteList from './components/favorites/DeleteList';
import CreateEntry from './components/favorites/CreateEntry';
import UpdateEntry from './components/favorites/UpdateEntry';
import DeleteEntry from './components/favorites/DeleteEntry';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <Navbar />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/login" element={<Login />} />
              <Route path="/favorites" element={<Favorites />} />
              
            
          <Route path="/createlist" element={<CreateList />} />
          <Route path="/updatelist" element={<UpdateList />} />
          <Route path="/deletelist" element={<DeleteList />} />
          <Route path="/createentry" element={<CreateEntry />} />
          <Route path="/updateentry" element={<UpdateEntry />} />
          <Route path="/deleteentry" element={<DeleteEntry />} />
      
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
};

export default App;
