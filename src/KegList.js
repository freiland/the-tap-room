import React from 'react';
import PropTypes from 'prop-types';
import Keg from './Keg';
import NewKegForm from './NewKegForm';


function KegList(props) {

  function handlePouringKegSubmission(event) {
    event.preventDefault();
    console.log(event.target.quantity.value);
  }

  return (
    <React.Fragment>
      
      {props.kegList.map((keg, index) =>
      
      <Keg 
      
      name = {keg.name} key={index}

       quantity = {keg.pintsAvail} />
      )}
      
    </React.Fragment>
  );
};

KegList.propTypes = {
  kegList: PropTypes.array, 
  onKegSelection: PropTypes.func,
  onPourKeg: PropTypes.func, 
  onStockKeg: PropTypes.func

}

export default KegList; 
