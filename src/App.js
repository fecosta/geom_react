// import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import{ BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import Maps from './Maps';
import Details from './Details';

function App() {
  const title = 'GEOM';

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/"><Home /></Route>
            <Route path="/create"><Create /></Route>
            <Route path="/maps"><Maps /></Route>
            <Route path="/maps/:id"><Details /></Route>
          </Switch>
        </div>      
      </div>
    </Router>
  );
}

export default App;
