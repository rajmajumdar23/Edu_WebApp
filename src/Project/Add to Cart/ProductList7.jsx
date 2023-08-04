import React from 'react';
import Product from './Product';
import { useCart } from './CartProvider';
import { Link } from 'react-router-dom';

const ProductList7 = () => {
  const { handleAddToCart } = useCart();

  const filterDataRange = (Product) => {
    return Product.id >= 123 && Product.id <= 142;
  };

  const filteredProduct = Product.filter(filterDataRange);

  return (
    <div style={{ marginTop: "10rem" }}>
      <img src="/Course-img/MySql.jpg" alt="" style={{width:"95rem",marginLeft:"-10rem",marginTop:"-8rem"}}/>
      <div className="label" style={{ width: "95rem", padding: "1rem", background: "black", color: "white", fontSize: "1.5rem", fontWeight: "600", marginLeft: "-10rem", marginBottom: "2rem" }}>
        "Master MySql's power! Enroll now for a top-notch MySql course, code your dreams."
      </div>
      <div className="row">
        {filteredProduct.map((Product, index) => (
          <div key={index} className="col-md-12 mb-3">
            <div className="card" style={{ width: "60rem", height: "10rem", marginLeft: "8rem" }}>
              <div className="row g-0">
                <div className="col">
                  <Link to={`/Product/${Product.id}`}>
                    <img
                      src={Product.img}
                      className="img-fluid rounded-start"
                      alt="Product"
                      style={{ width: "14.9rem", marginLeft: "-5rem" }}
                    />
                  </Link>
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title" style={{ fontSize: "1.2rem", marginLeft: "-5rem" }}>{Product.title}</h5>
                    <label className="card-text" style={{ ffontSize: "1rem", marginTop: "-.5rem", marginLeft: "-5rem",color:"blue",fontWeight:"600"}}>Course: {Product.topic}</label><br/>
                    <label className="card-text" style={{ fontSize: "1rem", marginTop: "-.5rem", marginLeft: "-5rem",color:"red",fontWeight:"600"}}>₹{Product.price}</label><br/>
                    <button style={{ fontSize: ".8rem", marginTop: ".8rem", marginLeft: "-5rem" }} className="btn btn-primary" id="atc" onClick={() => handleAddToCart(Product)}>
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList7;
