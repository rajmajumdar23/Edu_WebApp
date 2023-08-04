import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './Designing.css';
import Home from '../Home';
import ContactUs from '../ContactUs';
import AboutUs from '../AboutUs';
import Services from '../Services';
import Its from '../Its';
import Navbar from './Navbar';
import Notes from '../Notes';
import ForgotPage from '../ForgotPage';
import LoginPage from '../LoginPage';
import SignUp from '../SignUp';
import Footer from './Footer';
import PrivacyPolicy from '../PrivacyPolicy';
import Blogs from '../Blogs';
import Careers from '../Careers';
import TermsAndConditions from '../TermsAndConditions';
import ProductList1 from '../Add to Cart/ProductList1.jsx';
import ProductList2 from '../Add to Cart/ProductList2.jsx';
import ProductList3 from '../Add to Cart/ProductList3.jsx';
import ProductList4 from '../Add to Cart/ProductList4.jsx';
import ProductList5 from '../Add to Cart/ProductList5.jsx';
import ProductList6 from '../Add to Cart/ProductList6.jsx';
import ProductList7 from '../Add to Cart/ProductList7.jsx';
import ProductList8 from '../Add to Cart/ProductList8.jsx';
import ProductList9 from '../Add to Cart/ProductList9.jsx';
import ProductList10 from '../Add to Cart/ProductList10.jsx';
import Cart from '../Add to Cart/Cart';
import CartProvider from '../Add to Cart/CartProvider';
import ProductDetails from '../Add to Cart/ProductDetails';
import All_Courses from '../Add to Cart/All_Courses';


const RoutingPoint = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product]);
  };
  return (
    <>
      <Router>
      <Navbar cartItemCount={cartItems.length} />
<CartProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/forgot" element={<ForgotPage />} />
          <Route path="/teachits" element={<Its />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/ac" element={<All_Courses />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/productlist1"  element={<ProductList1 onAddToCart={handleAddToCart} />}/>
          <Route path="/productlist2"  element={<ProductList2 onAddToCart={handleAddToCart} />}/>
          <Route path="/productlist3"  element={<ProductList3 onAddToCart={handleAddToCart} />}/>
          <Route path="/productlist4"  element={<ProductList4 onAddToCart={handleAddToCart} />}/>
          <Route path="/productlist5"  element={<ProductList5 onAddToCart={handleAddToCart} />}/>
          <Route path="/productlist6"  element={<ProductList6 onAddToCart={handleAddToCart} />}/>
          <Route path="/productlist7"  element={<ProductList7 onAddToCart={handleAddToCart} />}/>
          <Route path="/productlist8"  element={<ProductList8 onAddToCart={handleAddToCart} />}/>
          <Route path="/productlist9"  element={<ProductList9 onAddToCart={handleAddToCart} />}/>
          <Route path="/productlist10"  element={<ProductList10 onAddToCart={handleAddToCart} />}/>
          <Route path="/cart" element={<Cart cartItems={cartItems} />}/>
          <Route path="/terms" element={<TermsAndConditions />} />
          <Route exact path="/product/:id" element={<ProductDetails />} />
        </Routes>
        </CartProvider>
        <Footer />
      </Router>
    </>
  );
};

export default RoutingPoint;
