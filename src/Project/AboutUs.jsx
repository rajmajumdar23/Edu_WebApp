import React from 'react';
import { useNavigate } from 'react-router';


const AboutUs = () => {
  const CareerNavigate = useNavigate();
  const handleCareer =()=>{
    CareerNavigate('/careers')  
  }
  const OtherCourseNavigate = useNavigate();
  const handleOtherCourse =()=>{
    OtherCourseNavigate('/courses')
  }
  const BlogNavigate = useNavigate();
  const handleBlog =()=>{
    BlogNavigate('/blogs')
  }
  
  return (
    <div className='Aboutus-Module'>
      <img src='/images/AboutUs-Banner.jpg' id='AboutUs-Banner-img' />
      <div className="AboutUs-Banner-Heading">We ignite the<br /> world with the almighty<br /> force of shared knowledge.</div>
      <div className="BannerFooter">"Embark on an enlightening journey as we unveil the limitless horizons of knowledge."</div>
      <div className="BannerHeading">Improving lives through learning</div>
      <div className="BannerHeading-Text">Whether you want to learn or to share what you know, you’ve come to the right place. As a
        global destination for online learning, we connect people through knowledge.</div>
      <div className="BioWithPic">
        <div class="card mb-3" style={{ border: "transparent", marginTop: "5rem", background: "transparent" }}>
          <div class="row g-0">
            <div class="col-md-4">
              <img src="/images/MyPic.jpeg" class="img-fluid rounded-start" style={{ width: "30rem", height: "16", marginLeft: "7rem",marginTop:"4.5rem" }} />
            </div>
            <div class="col-md-8" style={{ width: "107rem" }}>
              <div class="card-body" style={{ width: "80rem" }}>
                <h5 class="card-title" style={{ fontSize: "2.5rem", color: "#014179", fontWeight: "790", marginLeft: "13.6rem" }}>Our Founder</h5>
                <p class="card-text" style={{ textAlign: "justify", width: "50rem", fontSize: "1.2rem", color: "#535555", fontWeight: "500", marginLeft: "38.5rem",marginTop:"-23.5rem" }}>The IT School of Computer Education was founded in [Year] by Raj Majumdar, a visionary entrepreneur hailing from the small city of Ashoknagar. With a strong background
                  in BCA (Bachelor of Computer Applications), Raj embarked on a mission to provide affordable education to middle-class students, bridging the gap between cost and accessibility.</p>
                <p class="card-text" style={{ textAlign: "justify", width: "50rem", fontSize: "1.2rem", color: "#535555", fontWeight: "500", marginLeft: "38.5rem" }}>Under IT School's guidance, The IT School offers competitive tuition fees, scholarship programs, and flexible payment options to ensure that middle-class students can pursue their educational
                  aspirations without financial burdens. Raj's passion for empowering individuals through technology is reflected in the school's state-of-the-art facilities and comprehensive curriculum.</p>
                <p class="card-text" style={{ textAlign: "justify", width: "50rem", fontSize: "1.2rem", color: "#535555", fontWeight: "500", marginLeft: "38.5rem" }}>The IT School of Computer Education has become a beacon of hope for aspiring IT professionals. By creating an inclusive and supportive learning environment, Raj aims to equip middle-class students
                  with the knowledge and skills they need to succeed in the ever-evolving IT industry. Join us and unlock your potential under the guidance of our visionary founder, Raj Majumdar.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ComapnyState-Banner">
        <div className='Company-State-Text'>We just keep growing</div>
        <div className='Company-State-Title'>Our global community and our course catalog get bigger every day.Check out our latest numbers as of July 2023.</div>
        <div class="container text-center">
          <div class="row" style={{ width: "70rem", marginLeft: "5rem", marginTop: "-5rem" }}>
            <div class="col">
              <div className="Col-Title">100+</div>
              <div className="Col-Text" style={{ marginLeft: "-2vh" }}>Teachers</div>
            </div>
            <div class="col">
              <div className="Col-Title">8M</div>
              <div className="Col-Text" style={{ marginLeft: ".5vh" }}>Students</div>
            </div>
            <div class="col">
              <div className="Col-Title">1000+</div>
              <div className="Col-Text">Courses</div>
            </div>
            <div class="col">
              <div className="Col-Title">60k+</div>
              <div className="Col-Text">New Enrollments</div>
            </div>
          </div>
           <div class="row" style={{ width: "68rem", marginLeft: "5.5rem", marginTop: "1rem" }}>
            <div class="col-6">
              <div className="Col-Title">100+</div>
              <div className="Col-Text">Languages</div>
            </div>
            <div class="col-6">
              <div className="Col-Title">1k+</div>
              <div className="Col-Text">Enterprise Customer</div>
            </div>
          </div>
        </div>
      </div>
      <div className="AboutUsGrid-Points">
        <div class="container text-center">
          <div class="row" style={{ width: "85rem", display: "flex", marginLeft: "40.2rem" }}>
            <div class="col">
              <div class="card" style={{ width: "25rem", height: "25rem", border: "transparent", borderRight: "2px solid #0676d8" }}>
                <div class="card-title" style={{ background: "transparent", textAlign: "left", marginBottom: "-4rem", fontSize: "4rem", color: "#167dd6", marginLeft: "-1rem" }}>“</div>
                <div class="card-body" style={{ fontSize: "1.2rem", width: "25rem", textAlign: "justify", marginLeft: "-1rem" }}>The IT School: Tailor-Made for Your Learning Needs. Our dedicated team meticulously curates cutting-edge courses
                  from our expansive marketplace, bringing you unrivaled opportunities for growth and mastery.
                  <div className="card-Commenter-name" style={{ marginTop: "6rem", fontSize: "1rem", fontWeight: "600" }}>Amit Patel</div>
                  <div className="card-Commenter-Details" style={{ fontSize: ".9rem",  }}>Senior Manager of HR Development</div>
                  <p class="card-text"><img style={{ height: "2rem", width: "8rem" }} src='images/Logo1.png' /></p>
                </div>
              </div>
            </div>
            <div class="col" style={{ marginLeft: "-3rem" }}>
              <div class="card" style={{ width: "25rem", height: "25rem", border: "transparent", borderRight: "2px solid #0676d8" }}>
                <div class="card-title" style={{  background: "transparent", textAlign: "left", marginBottom: "-4rem", fontSize: "4rem", color: "#167dd6", marginLeft: "-1rem" }}>“</div>
                <div class="card-body" style={{ fontSize: "1.2rem", width: "25rem", textAlign: "justify", marginLeft: "-1rem" }}>A resounding triumph, captivating hearts and minds. Overflowing with praise, emails inundated us, extolling its magnificence
                  as a truly exceptional resource, igniting a wave of inspiration and awe.
                  <div className="card-Commenter-name" style={{ marginTop: "6rem", fontSize: "1rem",fontWeight: "600"  }}>Jyoti Ghosh</div>
                  <div className="card-Commenter-Details" style={{ fontSize: ".9rem",   }}>Executive Training Manager</div>
                  <p class="card-text"><img style={{ height: "2rem", width: "8rem"}} src='images/Logo1.png' /></p>
                </div>
              </div>
            </div>
            <div class="col" style={{ marginLeft: "-3rem" }}>
              <div class="card" style={{ width: "25rem", height: "25rem", border: "transparent", borderRight: "2px solid #0676d8" }}>
                <div class="card-title" style={{  background: "transparent", textAlign: "left", marginBottom: "-4rem", fontSize: "4rem", color: "#167dd6", marginLeft: "-1rem"  }}>“</div>
                <div class="card-body" style={{ fontSize: "1.2rem", width: "25rem", textAlign: "justify", marginLeft: "-1rem" }}>The IT School: Tailor-Made for Your Learning Needs. Our dedicated team meticulously curates cutting-edge courses from our expansive
                  marketplace, bringing you unrivaled opportunities for growth and mastery.
                  <div className="card-Commenter-name" style={{ marginTop: "6rem", fontSize: "1rem" , fontWeight: "600" }}>Rashmika Banerjee</div>
                  <div className="card-Commenter-Details" style={{ fontSize: ".9rem",   }}>Executive Training Manager</div>
                  <p class="card-text"><img style={{ height: "2rem", width: "8rem"}} src='images/Logo1.png' /></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="CompanyLogo-Grid">
        <label id='Company-Caption'>"Empowering Students: Partnering with Leading Companies to Propel the Nation Forward"</label>
        <div class="container text-center">
          <div class="row" style={{ width: "80rem", marginTop: "-1rem" }}>
            <div class="col">
              <img style={{ height: "5rem", width: "11rem", marginTop: "-2.5rem" }} src='/images/CLogo1.png' />
            </div>
            <div class="col">
              <img style={{ height: "4rem", width: "12rem" }} src='/images/CLogo2.png' />
            </div>
            <div class="col">
              <img style={{ height: "6rem", width: "18rem" ,marginTop:"-1rem"}} src='/images/CLogo3.png' />
            </div>
            <div class="col">
              <img style={{ height: "9rem", width: "20rem", marginTop: "-3rem" }} src='/images/CLogo4.png' />
            </div>
          </div>
           <div class="row" style={{ width: "60rem", marginLeft: "12rem", marginTop: "4rem" }}>
            <div class="col-6">
              <img style={{ height: "11rem", width: "20rem", marginTop: "-3rem" }} src='/images/CLogo5.png' />
            </div>
            <div class="col-6">
              <img style={{ height: "4rem", width: "12rem" }} src='/images/CLogo6.png' />
            </div>
          </div>
          <div class="row" style={{ width: "86rem", marginLeft: "-3rem", marginTop: "4rem" }}>
            <div class="col">
              <img style={{ height: "5rem", width: "13rem" }} src='/images/CLogo7.png' />
            </div>
            <div class="col">
              <img style={{ height: "7rem", width: "12rem", marginTop: "-1rem" }} src='/images/CLogo8.png' />
            </div>
            <div class="col">
              <img style={{ height: "8rem", width: "13rem", marginTop: "-1rem", marginLeft: "-3rem" }} src='/images/CLogo9.png' />
            </div>
            <div class="col">
              <img style={{ height: "4rem", width: "18rem",marginTop:"1rem" }} src='/images/CLogo10.png' />
            </div>
          </div>
          <div class="row" style={{ width: "60rem", marginLeft: "11rem", marginTop: "3rem" }}>
            <div class="col-6">
              <img style={{ height: "10rem", width: "14rem" }} src='/images/CLogo11.png' />
            </div>
            <div class="col-6">
              <img style={{ height: "8rem", width: "21rem",marginTop:"1rem"}} src='/images/CLogo12.png' />
            </div>
          </div>
          <div class="row" style={{ width: "75rem", marginTop: "8rem", marginLeft:"3rem" }}>
            <div class="col">
              <img style={{ height: "9rem", width: "16rem", marginTop: "-6.5rem" }} src='/images/CLogo13.png' />
            </div>
            <div class="col">
              <img style={{ height: "4rem", width: "14rem", marginTop: "-5.4rem", marginLeft:"3rem" }} src='/images/CLogo14.png' />
            </div>
            <div class="col">
              <img style={{ height: "5rem", width: "11rem", marginTop: "-7.5rem", marginLeft: "3rem" }} src='/images/CLogo15.png' />
            </div>
            <div class="col">
              <img style={{ height: "5.5rem", width: "16rem", marginTop: "-7rem",marginLeft:"3rem" }} src='/images/CLogo16.png' />
            </div>
          </div>
        </div>
      </div>
      <div className="LastGrid-card">
        <div class="container text-center">
          <div class="row" style={{ width: "86rem",display:"flex", marginLeft:"-1rem"}}>
            <div class="col">
              <div class="card" style={{width:"27rem",height:"30rem",padding:"2rem",paddingTop:"2.5rem", backgroundColor:"#066E5D"}}>
                <div class="card-body">
                  <h5 class="Aboutus-card-title"style={{color:"white"}}>Work with us</h5>
                  <p class="Aboutus-card-text"style={{color:"white"}}>At The IT School, we are all avid learners and teacher. Each day, we embody our core values to cultivate a culture that celebrates diversity, 
                  and wholeheartedly supports our employees' flourishing. Together, we are committed to empowering their growth and success within our community.</p>
                 <button id='About-Nav-btn' onClick={handleCareer}style={{color:"white"}}>Join our team</button>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card" style={{width:"27rem",height:"30rem",padding:"2rem",paddingTop:"2.5rem", backgroundColor:"#dddb36"}}>
                <div class="card-body">
                  <h5 class="Aboutus-card-title">Explore our Courses</h5>
                  <p class="Aboutus-card-text">Embark on a Transcendent Journey: Explore Our Dynamic Courses. Discover a curated collection of transformative learning experiences by The IT School. 
                  Ignite your curiosity, enhance your skills, and unlock infinite possibilities as you immerse yourself in our diverse course offerings..</p>
                 <button id='About-Nav-btn' onClick={handleOtherCourse}>Explore courses</button>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card" style={{width:"27rem",height:"30rem",padding:"2rem",paddingTop:"2.5rem", backgroundColor:"#a435f0"}}>
                <div class="card-body">
                  <h5 class="Aboutus-card-title"style={{color:"white"}}>Read the blog</h5>
                  <p class="Aboutus-card-text"style={{color:"white"}}>Curious about our latest endeavors? Dive into The IT School's vibrant blog for a captivating glimpse into our recent news, groundbreaking ideas,
                  exciting projects, and much more. Stay informed and inspired as we share our journey of innovation, knowledge, and endless possibilities.</p>
                 <button id='About-Nav-btn' onClick={handleBlog} style={{color:"white"}}>Read now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs