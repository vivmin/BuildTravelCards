import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/Header'
import Trips from './components/Trips'
import About from './components/About'
import Explore from './components/Explore'
import Faqs from './components/Faqs'
import Contact from './components/Contact'

// import { Container } from './styles';

export default function src() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Trips} />
        <Route path="/about" component={About} />
        <Route path="/explore" component={Explore} />
        <Route path="/faqs" component={Faqs} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </>
  );
}
