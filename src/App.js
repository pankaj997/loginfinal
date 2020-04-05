import React from "react";
import Login from "./Login.js";
import About from "./About.js";
import Home from "./Home.js";
 import Move from "./Move.js"
import Side from "./Side.js";
 import Backdrop from "./Backdrop.js"; 
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles.css";
class App extends React.Component {
  state={
    sideDrawerOpen: false
  };
  drawerHandleCLick = () =>
{
  this.setState((prevState) => {
    return{sideDrawerOpen : !prevState.sideDrawerOpen};
  });
};
  render() {
    let sideDrawer;
    let backDrop;
    if(this.state.sideDrawerOpen)
{
  sideDrawer=<Side />
  backDrop=<Backdrop />
}  
    return (
      <Router>
        <div>
        <Move drawerClickHandler={this.drawerHandleCLick} />
        {sideDrawer}
       {backDrop}
       <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/About" component={About} />
            <Route path="/Login" component={Login} />
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
