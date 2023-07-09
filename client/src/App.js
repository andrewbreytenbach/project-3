import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
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

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  // Function to handle login
  const handleLogin = () => {
    // Perform login authentication logic
    // Set loggedIn to true if login is successful
    setLoggedIn(true);
  };

  return (
    <Router>
      <>
        <Navbar />
        <Switch>
          <Route exact path="/login">
            {loggedIn ? <Redirect to="/" /> : <Login handleLogin={handleLogin} />}
          </Route>
          <Route exact path="/">
            {loggedIn ? <HomePage userName="John" /> : <Redirect to="/login" />}
          </Route>
          <Route exact path="/about">
            {loggedIn ? <About /> : <Redirect to="/login" />}
          </Route>
          <Route exact path="/favorites">
            {loggedIn ? <Favorites /> : <Redirect to="/login" />}
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
          <Route render={() => <h1 className="display-2">Wrong page!</h1>} />
        </Switch>
      </>
    </Router>
  );
}

export default App;
