import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Detail from './views/Detail';
import Home from './views/Home';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/:index">
            <Detail />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
