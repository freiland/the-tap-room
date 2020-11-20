import React from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';
import Keg from './Keg';

// const masterKegList = [
//   {name: IPA}
// ]

function KegList(props) {

  // function handlePouringKegSubmission(event) {
  //   event.preventDefault();
  //   console.log(event.target.quantity.value);
  // }

  return (
    <React.Fragment>
      {props.masterKegList.map((keg) =>
      <Keg name = {keg.name}/>
      
      )}
    </React.Fragment>
  )
}

KegList.propTypes = {
  kegList: propTypes.array, 
  onKegSelection: propTypes.func,
  onPourKeg: propTypes.func, 
  onStockKeg: propTypes.func

}

export default KegList; 
