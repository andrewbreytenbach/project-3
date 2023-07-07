import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
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

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/about' component={About} />
          <Route exact path='/createentry' component={CreateEntry} />
          <Route exact path='/favorites' component={Favorites} />
          <Route exact path='/createlist' component={CreateList} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/signup' component={Signup} />
          <Route exact path='/deleteentry' component={DeleteEntry} />
          <Route exact path='/deletelist' component={DeleteList} />
          <Route exact path='/updateentry' component={UpdateEntry} />
          <Route exact path='/updatelist' component={UpdateList} />
          {/* catch-all route that is rendered when none of the defined paths match */}
          <Route render={() => <h1 className='display-2'>Wrong page!</h1>} />
        </Switch>
      </>
    </Router>
  );
}

export default App;
