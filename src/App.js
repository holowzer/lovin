import React from 'react';
import Homepage from './comp/cores/Homepage'
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import ScrollToTop from "react-router-scroll-top"
import BeachFront from './comp/cores/BeachFront'
import AboutUs from "./comp/cores/AboutUs"
import Cruise from './comp/cores/Cruise'
import Menu from './comp/cores/Menu'
import Footer from "./comp/cores/Footer"
import Cta from "./comp/cores/Cta"

function App() {


  




  return (
  <Router onUpdate={() => window.scrollTo(0, 0)}>


    <ScrollToTop>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Homepage}/>
          <Route path="/BeachFront" component={BeachFront}/>
          <Route path="/CruiseShip" component={Cruise}/>
          <Route path="/AboutUs" component={AboutUs}/>

        <Redirect to="/" />
        </Switch>
        <Menu/>
        <Cta/>
       <Footer/>
      </div>
      </ScrollToTop>

  </Router>
  );
}

export default App;
