import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useNavigate } from 'react-router';
import Product from './Add to Cart/Product';

const BlogSwiper = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
  };

  const CourseNav = useNavigate();
  const handleCourseNav = () => {
    CourseNav('/productlist1');
  };

  const BlogteachNav = useNavigate();
  const handleBlogTeach = () => {
    BlogteachNav('/teachits');
  };

  const filteredProduct = Product.filter(course => course.id >= 6 && course.id <= 15 );
  

  return (
    <div className="carousel-wrapper">
      <Carousel responsive={responsive}>
        {filteredProduct.map((e, index) => (
          <div key={index} className="card" style={{ width: '17rem', height: '20rem' }}>
            <img src={e.img} className="card-img-top" alt={e.title} />
            <div className="card-body">
              <h5 className="Blog-card-title">{e.title}</h5>
              <h5 className="Blog-card-title"style={{color:"red"}}>₹{e.price}</h5>
              <h5 className="Blog-card-title"style={{color:"#045580"}}>{e.level}</h5>
              
              </div>
          </div>
        ))}
      </Carousel>
      <button onClick={handleCourseNav} id='BlogCourses-btn'>More Courses</button>
      <div className="BLogTeachGrid">
      <div class="container text-center">
        <div class="BlogTeachrow" >
          <div class="BlogTeachcol">
          <label  className='BlogTeachtitle'>Teach teh Globe through internet with The IT School</label>
          <label className='BlogTeachtitletext'>Create transformative video course, impact learners worldwide, profit from your expertise.</label>
          </div>
          <div class="BlogTeachcol">
          <button onClick={handleBlogTeach} id='BlogTeach-btn'>Teach with ITS</button>
          </div>
        </div>
      </div>
      </div>
      </div>
      );
};
 export default BlogSwiper;
