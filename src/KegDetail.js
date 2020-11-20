import React from 'react'
import PropTypes from 'prop-types';

function KegDetail(props) {
  const { keg, onClickingDelete } = props;

  return (
    <React.Fragment>
      <h1>
        {keg.name} Details
      </h1>
      <p>{keg.name}, {keg.pintsAvail}, {keg.price}, {keg.brand},{keg.alcoholContent}</p>
      <button onClick={()=> onClickingDelete(keg.id) }>Delete Keg</button>
      <hr/>
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingDelete: PropTypes.func
};

export default KegDetail;