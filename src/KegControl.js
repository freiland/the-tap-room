import React from 'react';
import NewKegForm from "./NewKegForm";
import KegList from "./KegList";
import KegDetail from "./KegDetail";

class KegControl extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
    formVisibleOnPage: false, 
    masterKegList: [],
    kegQuantity: 0,
    selectedKeg: null
  };
  //this.handleClick = this.handleClick.bind(this);
}

handleAddingNewKegToList = (newKeg) => {
  const newMasterKegList = this.state.masterKegList.concat(newKeg);
  this.setState({masterKegList: newMasterKegList,
                formVisibleOnPage: false });
  }

  handleClick = () => {
    this.setState(prevState => ({formVisibleOnPage: !prevState.formVisibleOnPage}));
  }

render(){
  let currentlyVisibleState = null;
  let buttonText = null;
  if (this.state.selectedKeg != null) {
    currentlyVisibleState = <KegDetail item = {this.state.selectedKeg} onClickingDelete = {this.handleDeletingKeg}/>
    buttonText = 'Return to Keg List'

  }
  
  else if(this.state.formVisibleOnPage) {
    currentlyVisibleState = <NewKegForm onNewKegCreation={this.handleAddingNewKegToList} />;
    buttonText = "Return to Keg List";
  } else {
    currentlyVisibleState = <KegList kegList={this.state.masterKegList} onKegSelection={this.handleChangingSelectedKeg} onPourKeg={this.handlePouringKeg} onStockKeg={this.handleRestockingKeg} />;
    
    // currentVisibleState = <ItemList onBuyItem={this.state.handleBuyingItem} />;
    buttonText = "Add New Keg"
  }
  return (
    <React.Fragment>
      {currentlyVisibleState}
      <button onClick={this.handleClick}>{buttonText}</button>
    </React.Fragment>
  );
}
}



export default KegControl;
