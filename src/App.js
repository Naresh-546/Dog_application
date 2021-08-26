import './App.css';
import Home from './Pages';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import signInPage from './Pages/signin';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/signin" component={signInPage} exact/>
      </Switch>
    </Router>
  );
}

export default App;
