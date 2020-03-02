import React from 'react'
import AddForm from './containers/AddForm'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import PostsList from './containers/PostsList'
import Header from './containers/Header'
import FullPost from './containers/FullPost'
import EditForm from './containers/EditForm'

import './App.scss';


function App() {
  return (
    <div className="App">
    <Router>
      <div>
        <Header />
        <div className="container">
          <div className="content">
          <Link to='/add'>    
            <button type="button" className="btn btn-primary">
              Add post
            </button>
          </Link>
            <div className="content">
              <Switch>
                <Route path="/" exact component={() => <PostsList />} />
                <Route path="/post/:id" exact component={FullPost} />
                <Route path="/add" exact component={() => <AddForm />} />
                <Route path="/post/:id/edit" exact component={EditForm} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </Router>
  </div>
  );
}

export default App;
