import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';



function Keg (props) {

  // let pourButton;
  // let restockButton;

  return (
    <React.Fragment>
      <div onClick = {() => props.whenKegClicked(props.id)}>
        <Button id = 'detailButton'>Show Details </Button>
      </div>
      <h2>{props.name}</h2>
      <h4>{props.quantity}</h4>
      
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
  quantity: PropTypes.number,
  alcoholContent: PropTypes.number,
  id: PropTypes.number, 
  whenKegClicked: PropTypes.func,
  WhenPourClicked: PropTypes.func, 
  WhenStockClicked: PropTypes.func

};

export default Keg; 





// function Product(props) {
//   // CSS OBJECTS
//   const span = {
//     fontSize: 16,
//     color: "#BCB6FF"
//   };
//   const para = {
//     fontSize: 14, 
//     color: "grey"
//   };

//   // CONDITIONAL RENDERING
//   let sellButton;
//   let restockButton;
//   let sellQuantity;
//   let alert = <p style={{color:"#426B69", fontSize: 16}}>In Stock</p>;

//   if (props.quantity !== 0){
//     sellQuantity = props.quantity - 1;
//     if (sellQuantity < 10){
//       alert = <p style={{color:"#E2EB98 ", fontSize: 16}}>Almost Empty</p>;
//     };
//     sellButton = <button className="btn sellBtn w-50" onClick={() => props.whenSellClicked({
//       name: props.name, 
//       brand: props.brand, 
//       price: props.price, 
//       flavor: props.flavor, 
//       quantity: sellQuantity, 
//       id: props.id
//     })}>Sell</button>;
//   } else {
//     alert = <p style={{color:"red", fontSize: 16}}>Out of Stock</p>;
//     restockButton = <button className="btn restockBtn w-50" onClick={() => props.whenRestockClicked({
//       name: props.name, 
//       brand: props.brand, 
//       price: props.price, 
//       flavor: props.flavor, 
//       quantity: 124, 
//       id: props.id
//     })}>Restock</button>;
//   };

//   return (
//     <React.Fragment>
//       <div onClick={()=>props.whenProductClicked(props.id)} className="productCard">
//         <div className="headingFont card-header text-center text-white" style={{fontSize: 24, color: "#C16E70"}}>
//           {props.name}
//           {alert}
//         </div>
//         <div className="card-body bg-white bodyFont">
//           <p className="bodyFont" style={para}><span className="headingFont" style={span}>Brand:</span> {props.brand}</p>
//           <p className="bodyFont" style={para}><span className="headingFont" style={span}>Flavor:</span> {props.flavor}</p>
//           <p className="bodyFont" style={para}><span className="headingFont" style={span}>Price:</span> ${props.price}</p>
//           <p className="bodyFont" style={para}><span className="headingFont" style={span}>Available Pint(s):</span> {props.quantity}</p>
//         </div>
//       </div>
//       <div className="card-footer text-center">
//         {sellButton}
//         {restockButton}
//       </div>
//     </React.Fragment>
//   );
// }

// Product.propTypes = {
//   name: PropTypes.string,
//   brand: PropTypes.string,
//   price: PropTypes.number,
//   flavor: PropTypes.string,
//   quantity: PropTypes.number,
//   key: PropTypes.string,
//   id: PropTypes.string,
//   whenProductClicked: PropTypes.func,
//   whenSellClicked: PropTypes.func,
//   whenRestockCicked: PropTypes.func
// }

// export default Product;