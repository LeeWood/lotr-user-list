import React from 'react';
import logo from './logo.svg';
import { Route, Link } from 'react-router-dom';
import UserList from './components/UserList';

import './App.css';

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={UserList} />
    </div>
  );
}
//for dynamic user post urls...refer to HTTP movies <Route path='/movies/:id' return<Movie {...props} />
export default App;
