import { BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';

import './App.scss';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/projects' component={Projects}/>
          <Route path='/about' component={About}/>
          <Route path='/contact' component={Contact}/>
        </Switch>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
