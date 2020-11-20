import React from 'react';
import PropTypes from 'prop-types';
import Keg from './Keg';

// const masterKegList = [
//   {name: IPA}
// ]

function KegList(props) {

  function handlePouringKegSubmission(event) {
    event.preventDefault();
    console.log(event.target.quantity.value);
  }

  return (
    <React.Fragment>
      {props.KegList.map((keg) =>
      <Keg name = {keg.name}/>
      
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
