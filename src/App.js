
import './App.css';

import CityItem from "./Component/city-item.component";
import { Route } from "react-router-dom";
import HomePage from "../src/home-page/home-page.component"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welocme to food joint</h1>
      </header>
      <Route exact path="/" component={CityItem} />
      <Route exact path="/:id" component={HomePage} />
    </div>
  );
}

export default App;
