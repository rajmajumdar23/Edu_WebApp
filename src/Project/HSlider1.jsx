import React, { useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Product from './Add to Cart/Product.jsx';
import Modal from 'react-responsive-modal';

const HSlider1 = () => {
  const filteredProduct = Product.filter(course => course.id >= 1 && course.id <= 10);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    }
  };

  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const openModal = (content) => {
    setModalContent(content);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalContent(null);
  };
  return (
    <div className="carousel-wrapper">
      <Carousel responsive={responsive} style={{}}>
        {filteredProduct.map((e, index) => (
          <div key={index} className="card" style={{ width: '16.5rem', height: '24rem', gap: "2rem 1rem", margin: '0' }}>
            <img src={e.img} className="card-img-top" alt={e.title} />
            <div className="card-body" style={{ height: "15rem", width: "40rem" }}>
              <h5 className="card-title" style={{ fontSize: "1rem", marginTop: "-1rem", width: "28rem", position: "relative" }}>{e.title.substring(0, 30)}</h5>
              <p className="card-text" style={{ marginBottom: "-1rem", fontSize: "1.1rem", width: "28rem",marginTop:".8rem" }}>{e.description}</p>
              <p className="card-text" style={{ marginBottom: "-1rem", fontSize: "1.3rem", width: "28rem",marginTop:"2rem",color:"red"}}>₹{e.price}</p>
              <button className="btn btn-secondary" onClick={() => openModal(e)} style={{marginTop:"2.2rem",background:"rgb(6, 78, 27)",fontSize:"1.2rem"}}>Course Details</button>
            </div>
          </div>
        ))}
      </Carousel>
      {showModal && (
        <Modal onClose={closeModal} open={showModal}>
          {modalContent && (
         <div>
         <img src={modalContent.img} alt={modalContent.title} style={{width:"25rem",marginTop:"5rem"}}/>
         <p style={{fontSize:"1.2rem",color:"red",marginTop:"2rem"}}>{modalContent.title}</p>
         <p style={{fontSize:"1.5rem",color:"blue"}} >{modalContent.description}</p>
         <p style={{fontSize:"1.3rem",color:"black",width:"25rem",textAlign:"justify"}} >Course Objective - {modalContent.content}</p>
       </div>
          )}
        </Modal>
      )}
    </div>
  );
};

export default HSlider1;
