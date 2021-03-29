import React from 'react'
import PropTypes from 'prop-types';
import Keg from './Keg'
import KegList from './KegList'
import KegControl from './KegControl'

function KegDetail(props) {
  
  const { keg } = props;
  alert(keg)
  return (
    <React.Fragment>
      <h1>
        Details:
      </h1>
      <p>{keg}</p>
      
      <hr/>
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingDelete: PropTypes.func
};

export default KegDetail;