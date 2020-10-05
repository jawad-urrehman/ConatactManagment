
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from "./components/nav"
import Add from "./components/add";
import Home from "./components/home";
import edit from './components/edit';
import show from './components/show';


function App() {
  return (
    <Router>
      <div>
      <Navbar />
      <br/>
      <div className="container">
      <Route path="/" exact component={Home} />
      <Route path="/add" component={Add} />
      <Route path="/edit/:id" component={edit} />
      <Route path="/show/:id" component={show} />
      </div>
      </div>
    </Router>
  );
}

export default App;