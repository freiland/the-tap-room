import React from 'react';
import PropTypes from 'prop-types';
import Keg from './Keg';



function KegList(props) {

  function handlePouringKegSubmission(event) {
    event.preventDefault();
    console.log(event.target.quantity.value);
  }

  return (
    <React.Fragment>
      {props.kegList.map((keg, index) =>
      <Keg names = {keg.name} key={index}/>
      
      )}
    </React.Fragment>
  )
}

KegList.propTypes = {
  kegList: PropTypes.array, 
  onKegSelection: PropTypes.func,
  onPourKeg: PropTypes.func, 
  onStockKeg: PropTypes.func

}

export default KegList; 
