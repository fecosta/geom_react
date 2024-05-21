import{ BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Maps from './Maps';
import Table from './Table';
import Charts from './Charts';

function App() {
  const title = 'GEOM';

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/geom_react"><Home /></Route>
            <Route path="/maps"><Maps /></Route>
            <Route path="/table"><Table /></Route>
            <Route path="/charts"><Charts /></Route>
            {/* <Route path="/maps/:id"><Details /></Route> */}
          </Switch>
        </div>      
      </div>
    </Router>
  );
}

export default App;
