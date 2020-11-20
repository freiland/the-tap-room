import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function Keg (props) {
  return (
    <React.Fragment>
      <div onClick = {() => props.whenKegClicked(props.id)}>
        <Button id = 'detailButton'>Show Details </Button>
      </div>
      <h2>{props.name}</h2>
      <h3></h3>
      <Button onClick={() => props.whenPourClicked(props.id)}>Pour!</Button>
          <button onClick={() => props.whenStockClicked(props.id)}>Restock</button>

    </React.Fragment>
  )

}

Keg.propTypes = {
  name: PropTypes.string,
  pintsAvail: PropTypes.number,
  brand: PropTypes.string,
  price: PropTypes.number,
  alcoholContent: PropTypes.number,
  id: PropTypes.number, 
  whenKegClicked: PropTypes.func,
  WhenPourClicked: PropTypes.func, 
  WhenStockClicked: PropTypes.func

};

export default Keg; 