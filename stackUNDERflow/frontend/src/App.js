import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';

function App() {
  return (
    <main>
           
            <Switch>
                <Route path="/" component={Login} exact />
                
                <Route path="/home" component={Home} />
                <Route component={Error} />
            </Switch>
        </main>
  );
}

export default App;
