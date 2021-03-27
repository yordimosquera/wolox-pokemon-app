import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './scenes/Home';

import SignUp from './scenes/SignUp';
import CountriesWrapper from './store/Countries';
import PokemonWrapper from './store/Pokemon';
import SignUpWrapper from './store/SignUp/SignUpWrapper';
import PrivateRoute from './components/PrivateRoute';
import TermsAndConditions from './scenes/TermsAndConditions/';
import PokemonList from './scenes/PokemonList';
import './App.scss';

// const PokemonList = lazy(() => import('./scenes/PokemonList'));

function App() {
  const token = localStorage.getItem('token');

  return (
    <>
      <CountriesWrapper>
        <PokemonWrapper>
          <SignUpWrapper>
            <Router>
              <Switch>
                <Route path="/" exact component={Home} />
                <PrivateRoute
                  exact
                  path="/sign-up"
                  secondaryPath={'/pokemonlist'}
                  component={SignUp}
                  condition={token ? false : true}
                />
                <Route exact path="/terms" component={TermsAndConditions} />
                <Route
                  path="/twitter"
                  render={() => (window.location = 'https://twitter.com/Wolox')}
                />
                <Route
                  path="/wolox"
                  render={() => (window.location = 'https://www.wolox.com.ar/')}
                />
                {/* <Suspense fallback={<div>Loading...</div>}> */}
                {/* <PrivateRoute
                    exact
                    path="/pokemonlist"
                    secondaryPath={'/sign-up'}
                    component={PokemonList}
                    condition={token ? true : false}
                  /> */}
                <Route path="/pokemonlist" exact component={PokemonList} />
                {/* </Suspense> */}
              </Switch>
            </Router>
          </SignUpWrapper>
        </PokemonWrapper>
      </CountriesWrapper>
    </>
  );
}

export default App;
