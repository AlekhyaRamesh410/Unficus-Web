import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Login from './Login';
import { Navbar, NavbarBrand } from 'reactstrap';

class App extends Component{
  render(){
    return(
      <div>
        <h1>welcome to Dashboard...!</h1>
        <Router>
          <Switch>
          <Route path='/' exact={true} component={Login}/>
          </Switch>
          </Router>
          
      </div>
    );
  }
}
         

export default App;
