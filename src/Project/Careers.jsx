import Dropdown1 from './Dropdown1'
import Dropdown2 from './Dropdown2'
import React from 'react'

const Careers = () => {
    return (
        <div className='Career-Module'>
            <div className="CareersBanner">
                <div className="Bannerbox">
                    <div><label id='CareersHeadingText'>Let’s<br /> revolutionize learning with earning</label><br /></div>
                    <div><label id='CareersHeadingTopic'>Together, we harness our diverse perspectives to revolutionize knowledge sharing, positively
                        impacting employees, learners, instructors, and businesses alike.</label></div>
                    <div></div><img src="/images/CareersBanner.jpg" alt="CareersBanner" id='CareersBanner' />
                </div>
                <div class="container text-center">
                    <div class="row" style={{ display: "flex", width: "94.5", marginLeft: "-1vh" }}>
                        <div class="col">
                            <Dropdown1 />
                        </div>
                        <div class="col">
                            <Dropdown2 />
                        </div>
                        <div class="col">
                            <button type='submit' id='Career-btn'>Search</button>
                        </div>
                    </div>
                </div>
                <div className="CareerCard-Grid">
                    <div class="container text-center">
                        <div class="row" style={{ marginTop: "8rem", width: "86.5rem", marginLeft: "-2rem" }}>
                            <div class="col">
                                <div class="card" style={{ width: "58vh", height: "51vh", border: "transparent" }}>
                                    <img src="/images/CareerGrid-1.jpg" class="card-img-top" />
                                    <div class="card-body">
                                        <div className="CareerTextbox" style={{ height: "16rem",borderLeft: ".2rem solid #014179", marginLeft: "-1rem", marginTop: "-1rem" }}>
                                            <label className='CareerGrid-Title'>Comprehensive</label><br />
                                            <label className='CareerGrid-Text'>We believe in the power of support to benefit all. To make this a reality, we are dedicated to
                                                building diverse teams that mirror our platform's users. Through this inclusivity, we gain valuable
                                                perspectives and strive to create an environment where everyone feels supported.</label></div>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card" style={{ width: "58vh", height: "51vh", border: "transparent" }}>
                                    <img src="/images/CareerGrid-2.jpg" class="card-img-top" />
                                    <div class="card-body">
                                        <div className="CareerTextbox" style={{ height: "16rem",borderLeft: ".2rem solid #014179", marginLeft: "-1rem", marginTop: "-1rem" }}>
                                            <label className='CareerGrid-Title'>Inquisitive</label><br />
                                            <label className='CareerGrid-Text'>At our core, we are passionate about learning in every aspect of our existence. The driving
                                                force behind our relentless efforts to democratize education worldwide is our recognition of its
                                                transformative power, not only for Udemy but also for individuals like you who are constantly evolving.</label></div>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card" style={{ width: "58vh", height: "16vh", border: "transparent" }}>
                                    <img src="/images/CareerGrid-3.jpg" class="card-img-top" />
                                    <div class="card-body">
                                        <div className="CareerTextbox" style={{ height: "16rem",borderLeft: ".2rem solid #014179", marginLeft: "-1rem", marginTop: "-1rem" }}>
                                            <label className='CareerGrid-Title'>Innovative</label><br />
                                            <label className='CareerGrid-Text'>Why confine innovation within boundaries? We choose to share it with those who can benefit
                                                the most. Through our innovative approach, we revolutionize the lives of learners and instructors, empowering them to flourish
                                                and unleash their full potential, driving positive change in the world..</label></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="CareerCard" style={{ width: "66rem", marginLeft: "15rem", marginTop:"20rem" }}>
                    <div class="card mb-3" style={{ border: "transparent" }}>
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src="/images/BookStack.jpg" class="img-fluid" />
                            </div>
                            <div class="col-md-8" style={{ borderTop: "1px solid #DEE2E6", borderBottom: "1px solid #DEE2E6", }}>
                                <div class="card-body">
                                    <h5 class="card-title" id='Career-card-title2'>Why The IT School?</h5>
                                    <p class="card-text" id='Career-card-text2'>People choose to join us at <b>The15T Sc,marginTop:"hool</b> for our mission-driven culture, growth opportunities, and the
                                        chance to make an impact. With a focus on <b>high-quality IT education,</b> we foster collaboration and innovation, providing a supportive
                                        environment where individuals can thrive, learn, and advance their careers in the technology industry.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <img src="/images/CareerEnd-img.png" id='LastImg' />
            <div className="CareerLastGrid">
                <div class="container text-center">
                    <div class="row" style={{ width:"82rem", marginTop:"15rem"}}>
                        <div class="col" style={{fontSize:"1.5rem",textAlign:"left", borderLeft:".55rem solid #014179",paddingLeft:"1.2rem", marginRight:"6rem"}}>
                            The IT School prioritizes Best, Easy, Different, Institution (BEDI) by implementing inclusive practices and fostering an environment that celebrates diverse backgrounds.
                        </div>
                        <div class="col" style={{fontSize:"1.5rem",textAlign:"left", borderLeft:".55rem solid #014179",paddingLeft:"1.2rem", }}>
                            The IT School proudly showcases their ESG programs and metrics, highlighting their commitment to environmental, social, and corporate governance.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Careers