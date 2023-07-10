import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import App from './App';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


// import React from 'react';
// import ReactDOM from 'react-dom';
// import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './index.css';
// import App from './App';

// // Create the Apollo Client instance
// const client = new ApolloClient({
//   uri: 'http://localhost:3000/graphql',
//   cache: new InMemoryCache(),
// });

// ReactDOM.render(
//   <ApolloProvider client={client}> {/* Wrap the App component with ApolloProvider */}
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>
//   </ApolloProvider>,
//   document.getElementById('root')
// );


// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );