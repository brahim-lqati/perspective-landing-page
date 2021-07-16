import Test from './components/Contact';
import Header from './components/Header';
import Home from './pages/Home';
import Contact from './components/Contact';
import { Route, Switch, BrowserRouter as Router, } from 'react-router-dom';
function App() {
  return (
      <>
        <Router>
        <Switch>
     <Route exact path="/" component={Home} />
     <Route exact path="/contact" component={Contact} />
   </Switch>
        </Router>
      </>
  );
}

export default App;
