import React, { lazy, Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import CountriesWrapper from './store/Countries';
import PokemonWrapper from './store/Pokemon';
import SignUpWrapper from './store/SignUp/SignUpWrapper';
import PrivateRoute from './components/PrivateRoute';
import TermsAndConditions from './scenes/TermsAndConditions/';
import ErrorFallBack from './components/ErrorFallback';
import SignUpRoute from './components/SignUpRoute.js';

import './App.scss';

const Home = lazy(() => import('./scenes/Home'));
const PokemonList = lazy(() => import('./scenes/PokemonList'));
const SignUp = lazy(() => import('./scenes/SignUp'));

function App() {
  return (
    <>
      <CountriesWrapper>
        <PokemonWrapper>
          <SignUpWrapper>
            <ErrorBoundary FallbackComponent={ErrorFallBack}>
              <Suspense fallback={<div className="loader">Loading...</div>}>
                <Router>
                  <Switch>
                    <Route path="/" exact component={Home} />
                    <SignUpRoute
                      exact
                      path="/sign-up"
                      secondaryPath={'/pokemonlist'}
                      component={SignUp}
                    />
                    <Route exact path="/terms" component={TermsAndConditions} />
                    <Route
                      path="/twitter"
                      render={() =>
                        (window.location = 'https://twitter.com/Wolox')
                      }
                    />
                    <Route
                      path="/wolox"
                      render={() =>
                        (window.location = 'https://www.wolox.com.ar/')
                      }
                    />

                    <PrivateRoute
                      exact
                      path="/pokemonlist"
                      secondaryPath={'/sign-up'}
                      component={PokemonList}
                    />
                  </Switch>
                </Router>
              </Suspense>
            </ErrorBoundary>
          </SignUpWrapper>
        </PokemonWrapper>
      </CountriesWrapper>
    </>
  );
}

export default App;
