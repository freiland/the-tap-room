import React from 'react';
import ReactDOM from 'react-dom';
import KegControl from "./KegControl";
import Jumbotron from 'react-bootstrap/Jumbotron'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Jumbotron';
import '../index.css';
import ProminentAppBar from './ProminentAppBar';


function App() {
  return (
    <React.Fragment>
      
      <ProminentAppBar />
      
     
      <div class='container'>
      <KegControl />
      </div>
    </React.Fragment>
  );
}

export default App;
