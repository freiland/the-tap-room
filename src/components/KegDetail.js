import React from 'react'
import PropTypes from 'prop-types';
import Keg from './Keg'
//import KegList from './KegList'

function KegDetail(props) {
  
  const { keg } = props;
  //console.log(keg);
  return (
    <React.Fragment>
      <h1>
        Details:
      </h1>
      {/* <p>{keg.name}</p> */}
      
      <hr/>
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingDelete: PropTypes.func
};

export default KegDetail;