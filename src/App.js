import { Route, Switch } from "react-router-dom";
import Details from "./page/details/details";
import Home from "./page/home/home";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/:imdbId" component={Details} />
      </Switch>
    </div>
  );
}

export default App;
