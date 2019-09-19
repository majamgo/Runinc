import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Events from './components/Events';
import Shop from './components/Shop';
import ContactUs from './components/ContactUs';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
      <Switch> 
      <Route exact path='/' component={Home} />
      <Route path='/events' component={Events} />
      <Route path='/shop' component={Shop} />
      <Route path='/contactus' component={ContactUs} />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
