import React from 'react';
import { BrowserRouter as Router, HashRouter, Route, Switch } from 'react-router-dom';
import { Home, Welcome, About, Contact, Archive } from './components';
import { GamesContainers, AddGameContainer } from './containers';


const routes = () => {
  return(
    <div>
      <Router>
        <div className="main">
          <Switch>
            <Route path="/games" component={Archive} />
            <Route path="/" component={Home} />
          </Switch>
              <Route exact path="/" component={Welcome} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route exact path="/games" component={GamesContainers} />
              <Route path="/games/add" component={AddGameContainer} />
              <footer className="text-center" style={{position: "fixed", bottom: "0px"}}>
                <p>© 2017 Adams ROY</p>
              </footer>
        </div>
      </Router>
    </div>
  )
}

export default routes;
