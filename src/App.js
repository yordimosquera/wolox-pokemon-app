import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './scenes/Home';
import PokemonList from './scenes/PokemonList';
import SignUp from './scenes/SignUp';
import CountriesWrapper from './store/Countries';
import PokemonWrapper from './store/Pokemon';
import './App.scss';

function App() {
  return (
    <>
      <CountriesWrapper>
        <PokemonWrapper>
          <Router>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/pokemonlist" component={PokemonList} />
              <Route path="/sign-up" component={SignUp} />
            </Switch>
          </Router>
        </PokemonWrapper>
      </CountriesWrapper>
    </>
  );
}

export default App;

// <Button className="btns" buttonStyle="btn--primary">
// GET STARTED
// </Button>
