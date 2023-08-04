import React from "react";
import { useParams, Link } from "react-router-dom";
import Product from "../Add to Cart/Product";
import { useCart } from "./CartProvider";

const ProductDetails = () => {
  const { handleAddToCart } = useCart();
  const { id } = useParams();
  const product = Product.find((p) => p.id === parseInt(id, 10));

  if (!product) {
    return <div>Product not found.</div>;
  }

  const rating = product.rating;

  return (
    <>
        <div>
          <img src={product.img} style={{marginTop:"5rem",width:"30rem"}}/>
          <br/><label style={{fontSize:"1.3rem",marginTop:".5rem",fontWeight:"600"}}>{product.title}</label>
            <span>{rating} </span><br/>
            {Array.from({ length: 5 }).map((_, index) => (
              <span key={index}>{index + 1 <= rating ? "⭐" : "☆"}</span>
            ))}
          <br/><label style={{fontWeight:"600",color:"red"}}>Price: ₹{product.price}</label><br/>
          <label style={{fontSize:"1.2rem",fontWeight:"600"}}>{product.content}.</label><br/>
          <button
            style={{background:"red",border:"red",padding:".5rem",width:"8rem",color:"white",fontWeight:"600",marginRight:"1rem",marginTop:"1rem",marginBottom:"1rem"}}
            id="atc"
            onClick={() => handleAddToCart(product)}
          >
            Add To Cart
          </button>
          <Link to="#">
            <button style={{background:"blue",border:"red",padding:".5rem",width:"8rem",color:"white",fontWeight:"600",marginRight:"1rem",marginTop:"1rem",marginBottom:"1rem"}}>
              Buy Now
            </button>
          </Link>
        </div>
    </>
  );
};

export default ProductDetails;
