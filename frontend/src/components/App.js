import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//components
import PostIndex from './PostIndex';
import PostShow from './PostShow';

const App = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <Switch>
          <Route path="/posts/:id" component={PostShow} />
          <Route path="/" component={PostIndex} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App;
