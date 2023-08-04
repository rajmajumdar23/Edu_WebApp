import React from 'react';
import { useNavigate } from 'react-router';
import Tab2 from './Tab2';

const Home = () => {
  const joinnavigate = useNavigate();
  const explorenavigate = useNavigate();
  const checkoutnavigate = useNavigate();

 
  const handlejoin = () => {
    joinnavigate('/signup');
  };

  const handleexplore = () => {
    explorenavigate('/signup');
  };

  const handlecheckout = () => {
    checkoutnavigate('/ac');
  };

  return (
    <div className='Homepage' style={{ marginTop: '80rem' }}>
      <img src='' id='img1' />
      <div id='carouselExampleAutoplaying' className='carousel slide' data-bs-ride='carousel'>
        <div className='carousel-inner'>
          <div className='carousel-item'>
            <img src='images/cimage2.jpg' className='homecorouselimg' />
            <div className='carbox2'>
              <label id='addhome'>Think different ? </label>
              <label id='addhome1-2'>Save on learning that fits your life. Log in to learn different.</label><br />
              <button onClick={handleexplore} id='Explorebtn'>Explore now</button>
            </div>
          </div>
          <div className='carousel-item active'>
            <img src='images/cimage1.jpeg' className='homecorouselimg' />
            <div className='carbox1'>
              <label id='addhome-1'>Join a community </label><br />
              <label id='addhome1'>of exceptional learners and excel in your educational pursuits.</label>
              <button onClick={handlejoin} id='Joinbutton'>Join</button><br />
            </div>
          </div>
          <div className='carousel-item'>
            <img src='images/cimage3.jpg' className='homecorouselimg' />
            <div className='carbox3'>
              <label id='addhome2-3'>Shocking right?</label><br />
              <label id='addhome1-3'>Jaw-breaking surprise with our unbelievably low course fees!</label><br />
              <button onClick={handlecheckout} id='Checkbutton'>Checkout</button><br />
            </div>
          </div>
        </div>
        <button className='carousel-control-prev' type='button' id='homecbtn' data-bs-target='#carouselExampleAutoplaying' data-bs-slide='prev'>
          <span className='carousel-control-prev-icon' aria-hidden='true'></span>
          <span className='visually-hidden'>Previous</span>
        </button>
        <button className='carousel-control-next' type='button' id='homecbtn' data-bs-target='#carouselExampleAutoplaying' data-bs-slide='next'>
          <span className='carousel-control-next-icon' aria-hidden='true'></span>
          <span className='visually-hidden'>Next</span>
        </button>
      </div>
      <label id='addhome4'>Learn a broad selection of courses with The IT School </label><br/>
      <label id='addhome5'>Choose from over 210,000 online video courses with new additions published every month</label>
        <div className="contentgap" style={{height:"42rem"}}>
        <Tab2 />
        </div> 
      </div>
  );
};

export default Home;
