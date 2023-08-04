import React, { useState } from "react";
import { useNavigate } from "react-router";
import HSlider1 from "./HSlider1.jsx";
import HSlider2 from "./HSlider2.jsx";
import HSlider3 from "./HSlider3.jsx";
import HSlider4 from "./HSlider4.jsx";
import HSlider5 from "./HSlider5.jsx";
import HSlider6 from "./HSlider6.jsx";
import HSlider7 from "./HSlider7.jsx";
import HSlider8 from "./HSlider8.jsx";
import HSlider9 from "./HSlider9.jsx";
import HSlider10 from "./HSlider10.jsx";

const Tabs = () => {
  const PythonNavigate = useNavigate();
  const handlePython = () => {
    PythonNavigate('/productlist1');
  };

  const WebdevNavigate = useNavigate();
  const handleWebdev = () => {
    WebdevNavigate('/productlist2');
  };

  const DsNavigate = useNavigate();
  const handleDs = () => {
    DsNavigate('/productlist3');
  };

  const JavaNavigate = useNavigate();
  const handleJava = () => {
    JavaNavigate('/productlist4');
  };

  const CsNavigate = useNavigate();
  const handleCs = () => {
    CsNavigate('/productlist5');
  };

  const CnNavigate = useNavigate();
  const handleCn = () => {
    CnNavigate('/productlist6');
  };

  const MySqlNavigate = useNavigate();
  const handleMySql = () => {
    MySqlNavigate('/productlist7');
  };

  const ReactNavigate = useNavigate();
  const handleReact = () => {
    ReactNavigate('/productlist8');
  };

  const VueNavigate = useNavigate();
  const handleVue = () => {
    VueNavigate('/productlist9');
  };

  const NextNavigate = useNavigate();
  const handleNext = () => {
    NextNavigate('/productlist10');
  };

  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="container" style={{ width: "75vh", height: "50vh", position: "relative" }}>
      <div className="tab-btn2">
        <div className="container text-center">
          <div className="row" style={{ width: "89rem", marginLeft: "-28.6rem",marginTop:"10rem",marginTop:"-10rem" }}>
            <div className="col">
              <button className={toggleState === 1 ? "tabs2 active-tabs" : "tabs2"} onClick={() => toggleTab(1)} style={{ marginRight: "6vh", width: "10rem" , fontSize:"1rem" }}>Python</button>
            </div>
            <div className="col">
              <button className={toggleState === 2 ? "tabs2 active-tabs" : "tabs2"} onClick={() => toggleTab(2)} style={{ marginLeft: "-18rem", width: "9rem", fontSize:"1rem"  }}>Web Development</button>
            </div>
            <div className="col">
              <button className={toggleState === 3 ? "tabs2 active-tabs" : "tabs2"} onClick={() => toggleTab(3)} style={{ marginLeft: "-15.8rem", width: "6rem" , fontSize:"1rem" }}>Data Science</button>
            </div>
            <div className="col">
              <button className={toggleState === 4 ? "tabs2 active-tabs" : "tabs2"} onClick={() => toggleTab(4)} style={{ marginLeft: "-18.8rem", width: "-35rem", fontSize:"1rem" }}>Java</button>
            </div>
            <div className="col">
              <button className={toggleState === 5 ? "tabs2 active-tabs" : "tabs2"} onClick={() => toggleTab(5)} style={{ marginLeft: "-13rem", width: "20rem", fontSize:"1rem"  }}>Cyber Security</button>
            </div>
            <div className="col">
              <button className={toggleState === 6 ? "tabs2 active-tabs" : "tabs2"} onClick={() => toggleTab(6)} style={{ marginLeft: "-16.8rem", width: "18rem" , fontSize:"1rem" }}>Computer Networks</button>
            </div>
            <div className="col">
              <button className={toggleState === 7 ? "tabs2 active-tabs" : "tabs2"} onClick={() => toggleTab(7)} style={{ marginLeft: "-16rem", width: "12rem", fontSize:"1rem"  }}>MySql</button>
            </div>
            <div className="col">
              <button className={toggleState === 8 ? "tabs2 active-tabs" : "tabs2"} onClick={() => toggleTab(8)} style={{ marginLeft: "-29.5rem", width: "5rem", fontSize:"1rem"  }}>React</button>
            </div>
            <div className="col">
              <button className={toggleState === 9 ? "tabs2 active-tabs" : "tabs2"} onClick={() => toggleTab(9)} style={{ marginLeft: "-36rem", width: "6rem" , fontSize:"1rem" }}>Vue Js</button>
            </div>
            <div className="col">
              <button className={toggleState === 10 ? "tabs2 active-tabs" : "tabs2"} onClick={() => toggleTab(10)} style={{ marginLeft: "-41.5rem", width: "7rem" , fontSize:"1rem" }}>Next Js</button>
            </div>
          </div>
        </div>
      </div>

      <div className="ContentTab">
       
          <div className={toggleState === 1 ? "content active-content" : "content"}>
            <div className="container text-center">
              <label id="Tab-heading">Embrace a World of Possibilities with Python: Unlock Limitless Career Opportunities</label><br />
              <label id="Tab-topic">Dive into the World of Python: Explore ITS's Vast Range of Courses. Master the Power of Python's Simple Syntax and Readability. Code Websites, Apps, and Games. Excel in Flask, Django, Data Science, and Machine Learning. Beginner-Friendly and Advanced Options Available for All Developers.</label>
              <button id="Multicr-Tab-btn" style={{ width: "22vh" }} onClick={handlePython}>Explore Python</button>
              <HSlider1 />
            </div>
          </div>
          <div className={toggleState === 2 ? "content active-content" : "content"}>
            <div className="container text-center">
              <label id="Tab-heading" style={{ marginLeft: "-30rem" }}>Craft Dynamic Websites and Applications with Web Development with frameworks</label><br />
              <label id="Tab-topic">Embrace Web Development's Vast World: Internet's Influence on Social and Vocational Lives. Thrive in Creating, Managing, and Debugging Websites and Applications. Seize Opportunities in Rapidly Growing Industries.</label>
              <button id="Multicr-Tab-btn" style={{ width: "35vh" }} onClick={handleWebdev}>Explore Web Development</button>
              <HSlider2 />
            </div>
          </div>
          <div className={toggleState === 3 ? "content active-content" : "content"}>
            <div className="container text-center">
              <label id="Tab-heading" style={{ marginLeft: "-35.5rem" }}>Drive Data-Driven Decisions through the Power of Data Science and Python</label><br />
              <label id="Tab-topic">Unleash Your Potential with Data Science: Python, Statistics, Machine Learning. In-Demand across Finance, Transportation, Education, Manufacturing, HR, Banking. Embrace the Future with Training, Research, and Statistics. Unlock Limitless Career Opportunities in Diverse Industries Worldwide.</label>
              <button id="Multicr-Tab-btn" style={{ width: "28vh" }} onClick={handleDs}>Explore Data Science</button>
              <HSlider3 />
            </div>
          </div>
          <div className={toggleState === 4 ? "content active-content" : "content"}>
            <div className="container text-center">
              <label id="Tab-heading" style={{ marginLeft: "-4rem", width: "145vh" }}>Java and Advanced Java: Learn the skills you need to build powerful and scalable applications.</label><br />
              <label id="Tab-topic">Unleash Your Potential with Data Science: Python, Statistics, Machine Learning. In-Demand across Finance, Transportation, Education, Manufacturing, HR, Banking. Embrace the Future with Training, Research, and Statistics. Unlock Limitless Career Opportunities in Diverse Industries Worldwide.</label>
              <button id="Multicr-Tab-btn" style={{ width: "22vh" }} onClick={handleJava}>Explore Java</button>
              <HSlider4 />
            </div>
          </div>
          <div className={toggleState === 5 ? "content active-content" : "content"}>
            <div className="container text-center">
              <label id="Tab-heading">Embrace a World of Possibilities with Python: Unlock Limitless Career Opportunities</label><br />
              <label id="Tab-topic">Dive into the World of Python: Explore ITS's Vast Range of Courses. Master the Power of Python's Simple Syntax and Readability. Code Websites, Apps, and Games. Excel in Flask, Django, Data Science, and Machine Learning. Beginner-Friendly and Advanced Options Available for All Developers.</label>
              <button id="Multicr-Tab-btn" style={{ width: "35vh" }} onClick={handleCs}>Explore Cyber Security</button>
              <HSlider5 />
            </div>
          </div>
          <div className={toggleState === 6 ? "content active-content" : "content"}>
            <div className="container text-center">
              <label id="Tab-heading" style={{ marginLeft: "-30rem" }}>Craft Dynamic Websites and Applications with Web Development with frameworks</label><br />
              <label id="Tab-topic">Embrace Web Development's Vast World: Internet's Influence on Social and Vocational Lives. Thrive in Creating, Managing, and Debugging Websites and Applications. Seize Opportunities in Rapidly Growing Industries.</label>
              <button id="Multicr-Tab-btn" style={{ width: "35vh" }} onClick={handleCn}>Explore Computer Networks</button>
              <HSlider6 />
            </div>
          </div>
          <div className={toggleState === 7 ? "content active-content" : "content"}>
            <div className="container text-center">
              <label id="Tab-heading" style={{ marginLeft: "-35.5rem" }}>Drive Data-Driven Decisions through the Power of Data Science and Python</label><br />
              <label id="Tab-topic">Unleash Your Potential with Data Science: Python, Statistics, Machine Learning. In-Demand across Finance, Transportation, Education, Manufacturing, HR, Banking. Embrace the Future with Training, Research, and Statistics. Unlock Limitless Career Opportunities in Diverse Industries Worldwide.</label>
              <button id="Multicr-Tab-btn"style={{ width: "25vh" }}  onClick={handleMySql}>Explore MySql</button>
              <HSlider7 />
            </div>
          </div>
          <div className={toggleState === 8 ? "content active-content" : "content"}>
            <div className="container text-center">
              <label id="Tab-heading" style={{ marginLeft: "-4rem", width: "145vh" }}>Java and Advanced Java: Learn the skills you need to build powerful and scalable applications.</label><br />
              <label id="Tab-topic">Unleash Your Potential with Data Science: Python, Statistics, Machine Learning. In-Demand across Finance, Transportation, Education, Manufacturing, HR, Banking. Embrace the Future with Training, Research, and Statistics. Unlock Limitless Career Opportunities in Diverse Industries Worldwide.</label>
              <button id="Multicr-Tab-btn"style={{ width: "25vh" }}  onClick={handleReact}>Explore React</button>
              <HSlider8 />
            </div>
          </div>
          <div className={toggleState === 9 ? "content active-content" : "content"}>
            <div className="container text-center">
              <label id="Tab-heading">Embrace a World of Possibilities with Python: Unlock Limitless Career Opportunities</label><br />
              <label id="Tab-topic">Dive into the World of Python: Explore ITS's Vast Range of Courses. Master the Power of Python's Simple Syntax and Readability. Code Websites, Apps, and Games. Excel in Flask, Django, Data Science, and Machine Learning. Beginner-Friendly and Advanced Options Available for All Developers.</label>
              <button id="Multicr-Tab-btn" style={{ width: "25vh" }} onClick={handleVue}>Explore Vue.js</button>
              <HSlider9 />
            </div>
          </div>
          <div className={toggleState === 10 ? "content active-content" : "content"}>
            <div className="container text-center">
              <label id="Tab-heading" style={{ marginLeft: "-30.5rem" }}>Craft Dynamic Websites and Applications with Web Development with frameworks</label><br />
              <label id="Tab-topic">Embrace Web Development's Vast World: Internet's Influence on Social and Vocational Lives. Thrive in Creating, Managing, and Debugging Websites and Applications. Seize Opportunities in Rapidly Growing Industries.</label>
              <button id="Multicr-Tab-btn" style={{ width: "25vh" }} onClick={handleNext}>Explore Next.js</button>
              <HSlider10 />
            </div>
          </div>
        </div>
        </div>
  
  );
};

export default Tabs;
