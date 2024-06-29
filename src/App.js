import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Footer from './components/Footer';
import Services from './components/pages/Services';
import Rooms from "./components/pages/Rooms/pages/Rooms";
import SingleRoom from "./components/pages/Rooms/pages/SingleRoom";
import './components/pages/Rooms/components/CmpRooms.css';



function App() {
  return (
    <>
      <Router>
          <Navbar/>
          <Switch>
              <Route path = '/' exact component={Home} />
              <Route exact path="/rooms/" component={Rooms} />
              <Route exact path="/rooms/:slug" component={SingleRoom} />
              <Route exact path="/Services" component={Services} />
          </Switch>
          <Footer/>
      </Router>

    </>

  );
}

export default App;
