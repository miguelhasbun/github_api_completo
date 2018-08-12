import React, { Component } from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import Login from './login';
import Search from './Components/Search';
import Repos from './Components/Repos';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

class App extends Component {
  render(){
    return(
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Search} />
        <Route path="/repos/:user" component={Repos}/>
        </Switch>
     </BrowserRouter>
    );
  }

}


export default App;
