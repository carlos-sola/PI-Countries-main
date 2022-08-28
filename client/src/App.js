import { Route } from 'react-router';
import './App.css';
import LandingPage from '../src/Pages/LandingPage';
import Home from './Pages/Home';
import Detail from './Pages/Detail';
import CreateActivity from './Pages/CreateActivities';


function App() {
  return (
    <div className="App">
      <Route path="/" exact component={LandingPage}/>
      <Route path="/home" exact component={Home}/>
      <Route path="/detail/:id" exact component={Detail}/>
      <Route path="/create" exact component={CreateActivity}/>
    </div>
    
  );
}

export default App;
