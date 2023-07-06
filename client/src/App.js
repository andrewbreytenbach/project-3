import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './pages/Navbar';
import About from './pages/About';
import EntryForm from './pages/EntryForm';
import Favorites from './pages/Favorites';
import ListForm from './pages/ListForm';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import Signup from './pages/SignUp';

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/about' component={About} />
          <Route exact path='/entryform' component={EntryForm} />
          <Route exact path='/favorites' component={Favorites} />
          <Route exact path='/listform' component={ListForm} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/signup' component={Signup} />
          {/* catch-all route that is rendered when none of the defined paths match */}
          <Route render={() => <h1 className='display-2'>Wrong page!</h1>} />
        </Switch>
      </>
    </Router>
  );
}

export default App;
