import React from 'react';
import Header from './Components/header';
import Home from './Components/home';
import About from './Components/about';
import Services from './Components/service';
import Contact from './Components/contact';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/service" component={Services}/>
          <Route path="/contact" component={Contact}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
