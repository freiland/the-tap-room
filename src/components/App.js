import React from 'react';
import Header from "./Header";
import ReactDOM from 'react-dom';
import KegControl from "./KegControl";
import Jumbotron from 'react-bootstrap/Jumbotron'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Jumbotron';


function App() {
  return (
    <React.Fragment>
      <div className='jumbotron'>
      <Header />
      
      </div>
      <div class='container'>
      <KegControl />
      </div>
    </React.Fragment>
  );
}

export default App;
