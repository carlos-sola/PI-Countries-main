import { Route } from 'react-router';
import './App.css';
import LandingPage from '../src/Pages/LandingPage';
import Home from './Pages/Home';


function App() {
  return (
    <div className="App">
      <Route path="/" exact component={LandingPage}/>
      <Route path="/home" exact component={Home}/>
    </div>
    
  );
}

export default App;
