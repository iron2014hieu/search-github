import './App.css';
import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import routes from './pages/routes';
import githubIcon from './assets/icons/github.svg'

function App() {
  return (
    <div className="App">
      <div className="side-bar">
        <img width="100" height="100" src={githubIcon} alt="github-icon"/>
        <h2>Github User Search</h2>
      </div>
      <Router>
        
        <Switch>
          {routes.map((route, i) => (
            <Route
              key={i}
              path={route.path}
              exact ={route.exact}
              render={props => (
                // pass the sub-routes down to keep nesting
                <Suspense fallback="">
                  <route.component {...props} />
                </Suspense>
              )}
            />
          ))}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
