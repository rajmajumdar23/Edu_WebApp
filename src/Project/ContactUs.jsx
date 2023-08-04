
import React from "react";

const ContactUs = () => {
    return (
        <div className="ContactUs-Module">
            <img src="/images/ContactUsBanner.png" id="ContactUs-Banner" />
            <div className="carbox2" style={{marginLeft:"-22vh", backgroundColor:"transparent", boxShadow:"0px 0px 0px 0px"}}>
                <label id='addhome1-2' style={{color:"#FFFFFF", fontSize:"3rem",width:"34rem", marginLeft:"7rem"}}>Empowering<br />Humanity with the<br /> infinite power of Knowledge</label>
            </div>

            <div className="Midtext">
                <label id="ContactUs-Title">Our Origins</label>
                <div className="ContactUs-text-box-color">
                    <label id="ContactUs-Text">Growing up in the small city Ashoknagar, West Bengal, <b>Raj Majumdar</b>, the founder of The IT School, had limited educational opportunities. However, everything changed when he got a computer. Fueled by his dream of pursuing computer science, he utilized the internet to teach himself web development.
                        <br /><br />Having experienced firsthand how online learning transformed his life, <b>Raj</b> joined forces to achieve a
                        common goal: making quality, affordable education accessible to all.<br /><br />Their inspiring story revolves around Raj's journey from limited educational opportunities
                        to becoming a web developer through self-learning. It showcases the incredible power of the internet and online resources in <b>empowering individuals to pursue their dreams</b> and acquire new skills.</label></div>
            </div>
            <label id="Img-City_box_heading">Our Offices</label>
            <div className="Image-City-box-1">
                <div className="container text-center">
                    <div className="row" style={{ display: "flex", width: "81rem", marginLeft: "-3.2rem",marginTop:"-6rem"}}>
                        <div className="col">
                            <div className="ImgBoxSet1">
                                <img src="/images/Kolkata.jpg" id="City-img" alt="Kolkata" /><br />
                                <label style={{ fontSize: "1.3rem", fontWeight: "500", marginTop: "1rem", marginLeft: "-3.8rem" }}>Kolkata, West Bengal</label>
                            </div>
                        </div>
                        <div className="col">
                            <div className="ImgBoxSet2">
                                <img src="/images/Delhi.jpg" id="City-img" alt="Kolkata" /><br />
                                <label style={{ fontSize: "1.3rem", fontWeight: "500", marginTop: "1rem", marginLeft: "-6.3rem" }}>New Delhi, Delhi</label>
                            </div>
                        </div>
                        <div className="col">
                            <div className="ImgBoxSet3">
                                <img src="/images/mumbai.png" id="City-img" alt="Kolkata" /><br />
                                <label style={{ fontSize: "1.3rem", fontWeight: "500", marginTop: "1rem", marginLeft: "-3rem" }}>Mumbai, Maharashtra</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Image-City-box-2">
                <div className="container text-center" >
                <div className="row" style={{ display: "flex", width: "81rem", marginLeft: "-3.2rem",marginTop:"-5.3rem" }}>
                        <div className="col">
                            <div className="ImgBoxSet1">
                                <img src="/images/Karnataka.png" id="City-img" alt="Kolkata" /><br />
                                <label style={{ fontSize: "1.3rem", fontWeight: "500", marginTop: "1rem", marginLeft: "-3.7rem" }}> Bengaluru, Karnataka</label>
                            </div>
                        </div>
                        <div className="col">
                            <div className="ImgBoxSet2">
                                <img src="/images/Rajasthan.jpg" id="City-img" alt="Kolkata" /><br />
                                <label style={{ fontSize: "1.3rem", fontWeight: "500", marginTop: "1rem", marginLeft: "-6rem" }}>Jaipur, Rajasthan</label>
                            </div>
                        </div>
                        <div className="col">
                            <div className="ImgBoxSet3">
                                <img src="/images/Gujrat.jpg" id="City-img" alt="Kolkata" /><br />
                                <label style={{ fontSize: "1.3rem", fontWeight: "500", marginTop: "1rem", marginLeft: "-6rem" }}>Junagadh, Gujrat</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Image-City-box-3" style={{ marginBottom: "5vh" }}>
                <div className="container text-center">
                <div className="row" style={{ display: "flex", width: "81rem", marginLeft: "-3.2rem",marginTop:"-5.3rem" }}>    
                        <div className="col">
                            <div className="ImgBoxSet1">
                                <img src="/images/Tamilnadu.png" id="City-img" alt="Kolkata" /><br />
                                <label style={{ fontSize: "1.3rem", fontWeight: "500", marginTop: "1rem", marginLeft: "-3.1rem" }}>Tirunelveli, Tamilnadu</label>
                            </div>
                        </div>
                        <div className="col">
                            <div className="ImgBoxSet2">
                                <img src="/images/Punjab.jpg" id="City-img" alt="Kolkata" /><br />
                                <label style={{ fontSize: "1.3rem", fontWeight: "500", marginTop: "1rem", marginLeft: "-6.5rem" }}>Amritsar, Punjab</label>
                            </div>
                        </div>
                        <div className="col">
                            <div className="ImgBoxSet3">
                                <img src="/images/Goa.jpg" id="City-img" alt="Kolkata" /><br />
                                <label style={{ fontSize: "1.3rem", fontWeight: "500", marginTop: "1rem", marginLeft: "-9.8rem" }}>Colva, Goa</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="contactUs-form-Module">
                <div class="card mb-3" style={{ width: "101rem", marginLeft: "-16rem", border: "transparent", backgroundColor: "#f7f9fa", height: "29rem", paddingLeft: "6rem" }}>
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src="/images/Contact-Form_Img.png" class="img-fluid" style={{width:"50rem",marginLeft:"1rem",marginTop:"-1rem"}}/>
                        </div>
                        <div class="col-md-8">
                            <label id="Form-card-heading">Feeling utterly perplexed? Connect with us now for expert guidance!</label>
                            <div class="card-body">
                                <input type="text" className="form-control" id="Input-Contact-Form-Fname" aria-describedby="PasswordHelp" placeholder="Enter Your First Name" />
                                <input type="text" className="form-control" id="Input-Contact-Form-Lname" aria-describedby="PasswordHelp" placeholder="Enter Your Last Name" />
                                <input type="text" className="form-control" id="Input-Contact-Form-Mail" aria-describedby="PasswordHelp" placeholder="Enter Your Email Address" />
                                <input type="number" className="form-control" id="Input-Contact-Form-Phone" aria-describedby="PasswordHelp" placeholder="Enter Your Phone Numer" />
                                <textarea placeholder="Reason to contact us" id="Input-Contact-Form-Phone-Reason"></textarea><br />
                                <button type="submit" id="Contact-submit-btn">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ContactUs;