import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './CartProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';


const Cart = () => {
  const { cartItems, removeFromCart, incrementQuantity, decrementQuantity } = useCart();

  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
  };

  const handleIncrement = (productId) => {
    incrementQuantity(productId);
    const updatedItem = cartItems.find((item) => item.id === productId);
    if (updatedItem && updatedItem.quantity === 0) {
      removeFromCart(productId);
    }
  };

  const handleDecrement = (productId) => {
    decrementQuantity(productId);
    const updatedItem = cartItems.find((item) => item.id === productId);
    if (updatedItem && updatedItem.quantity === 1) {
      removeFromCart(productId);
    }
  };

  const getUniqueItems = () => {
    const uniqueItems = cartItems.reduce((acc, item) => {
      const existingItem = acc.find((i) => i.id === item.id);
      if (existingItem) {
        existingItem.quantity += item.quantity;
      } else {
        acc.push({ ...item });
      }
      return acc;
    }, []);
    return uniqueItems;
  };

  const getTotalPrice = () => {
    return cartItems.map((item) => item.price * item.quantity).reduce((total, item) => total + item, 0);
  };

  return (
    <div>
      <img src="/images/cart.jpg" style={{width:"85rem",marginLeft:"-5rem",marginTop:"2.5rem"}}/>
      <div className="label" style={{ width: "95rem", padding: "1rem", background: "#ecc6b3", color: "black", fontSize: "1.8rem", fontWeight: "600", marginLeft: "-10rem", marginBottom: "2rem" }}>
      Empower your IT journey - cart the future now!
      </div>
      {getUniqueItems().map((item) => (
        <div key={item.id} className="card mb-3" style={{ width:"60rem",marginLeft:"8rem"}}>
          <div className="row g-0">
            <div className="col-md-4">
              <img src={item.img} className="img-fluid rounded-start" alt="Product" style={{ width: '100%' }} />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <label style={{fontSize:"1rem"}} className="card-title">{item.content}</label>
                <label style={{fontSize:"1rem",fontWeight:"bold"}} className="card-title">{item.description}</label>
                <p className="card-text" style={{color:"red",fontWeight:"600"}}>Price: ₹{item.price}</p>
                <div>
                  <button onClick={() => handleDecrement(item.id)} style={{height:"2rem",width:"2rem",marginRight:".5rem",background:"#CCEDFF",border:"#CCEDFF",fontSize:"1.2rem"}}>-</button>&nbsp;
                  {item.quantity}
                  <button onClick={() => handleIncrement(item.id)} style={{height:"2rem",width:"2rem",marginLeft:".5rem",background:"#CCEDFF",border:"#CCEDFF",fontSize:"1.2rem"}}>+</button>
                  <button onClick={() => handleRemoveFromCart(item.id)} className="btn btn-transparent" style={{marginLeft:"24rem",fontSize:"1.2rem"}} id="rem"><FontAwesomeIcon icon={faTrash} style={{color: "#ff0000",}} /></button>
                </div>    
              </div>
            </div>
          </div>
        </div>
      ))}
      <label style={{fontSize:"1.2rem",marginLeft:"40rem",width:"20rem",background:"#ecc6b3",padding:".8rem",borderRadius:".2rem",marginBottom:".4rem"}}>Total Cart Price: ₹{getTotalPrice()}</label><br/>
      <button style={{fontSize:"1.2rem",background:"red",border:"red",padding:".8rem",width:"20rem",color:"white",fontWeight:"600",marginLeft:"40rem",marginBottom:"1rem",borderRadius:".2rem"}}>
              Buy Now
            </button>
      </div>
  );
};

export default Cart;
