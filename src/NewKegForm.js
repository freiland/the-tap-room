import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';

function NewKegForm(props) {
  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({name: event.target.value, pintsAvail: event.target.value, brand: event.target.value, price: event.target.value, alcoholContent: event.target.value, id: v4()})
  };

  return (
    <React.Fragment>
      <form onSubmit={handleNewKegFormSubmission}>
      <input 
      type='text'
      name='name'
      placeholder = 'name' />
    <input
      type='text'
      name='pintsAvail'
      placeholder = "124" />
      <input
      type='text'
      name='brand' 
      placeholder = 'brand'/>
    <input
      name='price'
      placeholder='price' />
      <input
      name='alcoholContent'
      placeholder='5%' />
    <button type='submit'>Add Keg</button></form>
    </React.Fragment>
  );
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKegForm;