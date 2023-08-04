import React from "react";
import { useNavigate } from "react-router";
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { useState } from 'react';
import Tabs from "./Tabs";

const Its = () => {
    const [open, setOpen] = useState(false);
    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

    const itslognavigate = useNavigate();

    const handleTeachLogin = () => {
        itslognavigate("/login")
    }
    return (
        <>
            <div className="banner">
                <div className="bannerimg">
                    <img src="images/bannerIts.jpg" id="teachbanner" />
                    <div className="Itsbox">
                        <label id='addits-1'>Join and teach with us</label><br />
                        <label id='addits-2'>Inspire as a teacher, <br/>transforming lives including your own.</label><br/>
                        <button onClick={onOpenModal} id="teachmodal-btn1">Get Started</button>
                    </div>
                </div>
                <div className="GridHeading">So many reasons to start</div>
                <div class="itscontainer text-center">
                    <div class="teachItsrow">
                        <div class="teachItscol">
                            <img src="./images/TeachGrid1.jpg" id="TeachGrid" /><br />
                            <lable id="Gridtitle">Empowering skills</lable><br />
                            <lable id="Gridtext" >Unlock your communication potential with this empowering course,
                                putting you in control of your content and learning experience.</lable>
                        </div>
                        <div class="teachItscol">
                            <img src="./images/TeachGrid2.jpg" id="TeachGrid" /><br />
                            <lable id="Gridtitle">Empowering skills</lable><br />
                            <lable id="Gridtext" >Unlock your communication potential with this empowering course,
                                putting you in control of your content and learning experience.</lable>
                        </div>
                        <div class="teachItscol">
                            <img src="./images/TeachGrid3.jpg" id="TeachGrid" /><br />
                            <lable id="Gridtitle">Empowering skills</lable><br />
                            <lable id="Gridtext" >Unlock your communication potential with this empowering course,
                                putting you in control of your content and learning experience.</lable>
                        </div>
                    </div>
                </div>
            </div>
            <div className="GridModule2">
                <div class="itscontainer2 text-center">
                    <div class="teachItsrow2">
                        <div class="teachItscol2">

                            <div className="Gridtitle2"><lable>1M</lable></div>
                            <div className="Gridtext2"><lable>Students</lable></div>
                        </div>
                        <div class="teachItscol2">
                            <div className="Gridtitle2"><lable>15+</lable></div>
                            <div className="Gridtext2"><lable>Languages</lable></div>
                        </div>
                        <div class="teachItscol2">
                            <div className="Gridtitle2"><lable>6M</lable></div>
                            <div className="Gridtext2"><lable>Enrollments</lable></div>
                        </div>
                        <div class="teachItscol2">
                            <div className="Gridtitle2"><lable>50+</lable></div>
                            <div className="Gridtext2"><lable>Courses</lable></div>
                        </div>
                        <div class="teachItscol2">
                            <div className="Gridtitle2"><lable>500+</lable></div>
                            <div className="Gridtext2"><lable>Practice Sets</lable></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="TabHeading">How to Start as a Teacher</div>
            <Tabs />
            <div className="grid2-moudleadjst">
            <label id="TeachlogHeading">Empowering minds, shaping futures: Educators' Hub for limitless learning.</label>
                <div class="container text-center">
                    <div class="row" id="gridmodulerow2">
                        <div class="col" id="gridmodulecol2">
                            <div className="gridimg">
                                <img src="/images/Grid2-1.png" id="gridimg" />
                            </div>
                            <div className="gridheadline">
                                Learn to Teach
                            </div>
                            <div className="gridtopic">
                                Enhance students' logic and technical skills through commands and conditions as essential teaching elements.
                            </div>
                        </div>
                        <div class="col" id="gridmodulecol2">
                            <div className="gridimg">
                                <img src="/images/Grid2-2.png" id="gridimg" />
                            </div>
                            <div className="gridheadline">
                                User Interface
                            </div>
                            <div className="gridtopic">
                                Design thinking empowers students to create porjects transforming their role from consumers to creators of technology.
                            </div>
                        </div>
                        <div class="col" id="gridmodulecol2">
                            <div className="gridimg">
                                <img src="/images/Grid2-3.png" id="gridimg" />
                            </div>
                            <div className="gridheadline">
                                Conceptual reasoning
                            </div>
                            <div className="gridtopic">
                                Enhance students' abstract thinking scores by teaching decomposition and algorithmic thinking, in Olympiads and IB entrance tests.
                            </div>
                        </div>
                        <div class="col" id="gridmodulecol2">
                            <div className="gridimg">
                                <img src="/images/Grid2-4.png" id="gridimg" />
                            </div>
                            <div className="gridheadline">
                                Development mindset
                            </div>
                            <div className="gridtopic">
                                Students exhibit determination, creating code and get confidence in producing  which reinforces their love for learning.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid3">
                <div class="container text-center">
                    <div class="row" id="GridRow2">
                        <div class="col">
                            <img src="/images/Endingleft.jpg" alt="" id="Endingleft" />
                        </div>
                        <div class="col" style={{ marginLeft: "-8vh",marginTop:"-20rem" }}>
                            <lable id="ItsEndingTitle">You don't have to face it by yourself alone.</lable><br /><br />
                            <lable id="ItsEndingText">Get personalized support from our <b>Instructor Support Team</b>. Access resources in our Teaching Center.
                                Engage with experienced instructors in our  <b>online community</b> for assistance.</lable><br />
                        </div>
                        <div class="col">
                            <img src="/images/Endingright.png" alt="" id="Endingright" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="TeachLoginDash">
                <div className="TeachLogTitle">
                    <label id="TeachLogTitle">Become a teacher today</label>
                </div>
                <div className="TeachLogtext" id="TeachLogtext">
                    <label id="TeachLogtext">Join one of the world’s best online learning company.</label>
                </div>
                <div className="TeachlogButton">
                    <button onClick={onOpenModal} id="teachmodal-btn2">Get Started</button>
                </div>
            </div>
            <div className="modaladjst">
                <Modal
                    open={open}
                    onClose={onCloseModal}
                    center
                    styles={{
                        modal: {
                            maxWidth: '90vh',
                            maxHeight: '90vh',
                            padding: '2vh'
                        },
                        overlay: {
                            background: 'rgba(0, 0, 0, 0.5)',
                        },
                    }}
                >
                    <div class="containerterms text-left" style={{ position: "relative" }}>
                        <div class="row">
                            <label id='ItsHeadline'>Become a ITS Teacher</label></div>
                        <div class="row">
                            <lable id="ItsCaption">Join an empowering community of online teacher. Access comprehensive course creation resources instantly. Elevate your impact and thrive together.</lable></div>
                        <div class="row">
                            <input type="text" className="form-control" id="Input-ItsSignup" aria-describedby="PasswordHelp" placeholder="Full name" /></div>
                        <div class="row">
                            <input type="text" className="form-control" id="Input-ItsSignup" aria-describedby="PasswordHelp" placeholder="Email address or phone number" /></div>
                        <div class="row">
                            <input type="password" className="form-control" id="Input-ItsSignup" aria-describedby="PasswordHelp" placeholder="Password" /></div>
                        <div class="row">
                            <div class="col">
                                <input type='checkbox' id='Itssignup-checkbox' />
                            </div>
                            <div class="col" style={{ marginLeft: "-34vh" }}>
                                <label id='Itssecondline'>I want to get the most out of my experience, by receiving emails with insider tips,
                                    motivation, special updates and promotions reserved for teacher.</label><br />
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <button type="submit" id="ItsSignupB">Signup</button><br /></div>
                    <div class="row">
                        <div className="teachlinesign" style={{ width: "53vh", marginTop: "-4vh", marginBottom: "1vh", borderBottom:"1px solid #c6c6c6",marginLeft:"1.4rem"}}></div></div>
                    <div class="row">
                        <div class="col">
                            <label id='teachitsahan'>Already have an account?</label></div>
                        <div class="col">
                            <button onClick={handleTeachLogin} id="ItsLoginb">Log in</button><br /></div>
                    </div>
                </Modal>
            </div>
        </>
    )
}

export default Its;



