import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './scenes/Home';
import PokemonList from './scenes/PokemonList';
import SignIn from './scenes/SignIn/SigIn';
import { Button } from './components/Button/Button';
import './App.scss';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/pokemonlist" component={PokemonList} />
          <Route path="/sign-in" component={SignIn} />
        </Switch>
      </Router>
    </>
  );
}

export default App;

// <Button className="btns" buttonStyle="btn--primary">
// GET STARTED
// </Button>
