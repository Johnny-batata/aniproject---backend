import React from 'react';
import { Route } from 'react-router-dom';
import Login from './pages/Login';
import SignIn from './pages/SignIn';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Explore from './pages/explore/explore';
import Animes from './pages/explore/animes';
import Categories from './pages/explore/categories';
import Movies from './pages/explore/movies';
import CardsDetails from './components/cardsDetails';

function App() {
  return (
    <div height="100%" width="100%">
      <Route exact path="/detalhes/:id" component={ CardsDetails } />
      <Route exact path="/explore/movies" component={ Movies } />
      {/* <Route exact path="/explore/categories" component={ Categories } /> */}
      <Route exact path="/explore/animes" component={ Animes } />
      <Route exact path="/explore" component={ Explore } />
      <Route exact path="/profile" component={ Profile } />
      <Route exact path="/inicio" component={ Home } />
      <Route exact path="/cadastrar" component={ SignIn } />
      <Route exact path="/" component={ Login } />
    </div>
  );
}

export default App;
