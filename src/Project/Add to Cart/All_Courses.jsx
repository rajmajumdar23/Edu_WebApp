import React from 'react';
import { useCart } from './CartProvider';
import { Link } from 'react-router-dom';
import Product from './Product';

const All_Courses = () => {
  const { handleAddToCart } = useCart();

  const filterDataRange = (Product) => {
    return Product.id >= 1 && Product.id <= 198;
  };

  const filteredProduct = Product.filter(filterDataRange);

  return (
    <div style={{ marginTop: "10rem" }}>
      <img src="/Course-img/ac.jpg" alt="" style={{ width: "79rem", marginLeft: "6rem", marginTop: "-5rem" }} />
      <div style={{ textAlign: "left", width: "37rem", marginLeft: " -4rem", marginTop: "-23.5rem", fontSize: "2rem", fontWeight: "700" }}>Unlocking the Digital World: Empowering Minds with IT School's Computer Science Courses!</div>
      <div className="label" style={{ width: "95rem", padding: "1rem", background: "black", color: "white", fontSize: "1.5rem", fontWeight: "600", marginLeft: "-10rem", marginBottom: "2rem", marginTop: "15rem" }}>
        "Master Python's power! Enroll now for a top-notch Python course, code your dreams."
      </div>
      <div className="row">
        {filteredProduct.map((Product, index) => (
          <div key={index} className="col-md-3 mb-3">
            <div className="card" style={{ width: "18rem", height: "100%" }}>
              <img
                src={Product.img}
                className="card-img-top"
                alt="Product"
                style={{ height: "10rem" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ fontSize: "1rem" }}>{Product.title}</h5>
                <p className="card-text" style={{ fontSize: "1rem", color: "blue", fontWeight: "600" }}>Course: {Product.description}</p>
                <p className="card-text" style={{ fontSize: "1rem", color: "red", fontWeight: "600" }}>₹{Product.price}</p>
                <button
                  style={{ fontSize: ".8rem" }}
                  className="btn btn-primary"
                  id="atc"
                  onClick={() => handleAddToCart(Product)}
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default All_Courses;
