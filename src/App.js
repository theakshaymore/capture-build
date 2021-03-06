import React from 'react';
//Global Style
import GlobalStyle from './components/GlobalStyle';
//Import Pages
import AboutUs from './pages/AboutUs';
import OurWork from './pages/OurWork';
import ContactUs from './pages/ContactUs';
import MovieDetail from './pages/MovieDetail';
import Nav from './components/Nav';
//Router
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Switch>
        <Route path="/" exact>
          <AboutUs />
        </Route>
        <Route path="/work" exact>
          <OurWork />
        </Route>
        <Route path="/contact">
          <ContactUs />
        </Route>
        <Route path="/work/:id">
          <MovieDetail />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
