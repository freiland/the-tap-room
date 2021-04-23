import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ReactDOM from 'react-dom';
import KegControl from "./KegControl";
import Jumbotron from 'react-bootstrap/Jumbotron'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Jumbotron';
import '../index.css';
import ProminentAppBar from './ProminentAppBar';


function App() {
  return (
    <Router>
    <React.Fragment>
      
      <ProminentAppBar />
      
     
      <div class='container'>
      <KegControl />
      </div>
    </React.Fragment>
    </Router>
  );
}

export default App;
