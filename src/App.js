import Navbar from './NavBar';
import Home from './Home';
import Skills from './Skills';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import ProjectDetails from './ProjectDetails';
import Projects from './Projects';
import Contacts from './Contacts';
import NotFound from './NotFound';

function App() {
  const title = 'Welcome to my portfolio';

  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="content">
          <Switch>
            <Route exact path="/"> 
              <Home/>
            </Route>
            <Route exact path="/projects"> 
              <Projects/>
            </Route>
            <Route path="/skills"> 
              <Skills/>
            </Route>
            <Route exact path="/contacts"> 
              <Contacts/>
            </Route>
            <Route path="/projects/:id"> 
              <ProjectDetails/>
            </Route>
            <Route path="*">
              <NotFound/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
