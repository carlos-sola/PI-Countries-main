import { Route } from 'react-router';
import './App.css';
import LandingPage from '../src/Pages/LandingPage';
import Home from './Pages/Home';
import Detail from './Pages/Detail';


function App() {
  return (
    <div className="App">
      <Route path="/" exact component={LandingPage}/>
      <Route path="/home" exact component={Home}/>
      <Route path="/detail/:id" exact component={Detail}/>
    </div>
    
  );
}

export default App;
