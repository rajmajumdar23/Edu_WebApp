import React, { useState } from "react";

const Tabs = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="container" style={{ width: "75vh", height: "20vh", marginLeft:"57vh",marginTop:"-5px" }}>
      <div className="tab-btn">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Plan course roadmap
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Film your video
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          Upload to ITS
        </button>
      </div>

      <div className="content-tabs" >
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}>
          <div class="container text-center" style={{ display: "flex" }}>
            <div class="row" style={{ width: "74vh", height: "20vh", marginLeft: "-4vh" }}>
              <div class="col" id="tab-text-1">
                Craft a detailed course roadmap, meticulously outlining the curriculum for your course.
                Strategically sequence topics, modules, and objectives to facilitate a progressive learning experience.
                Cover essential subjects, enabling learners to acquire comprehensive knowledge and skills.<br />
                <div class="col" id="tab-text-midline">
                  Here's how our services can support you<br />
                </div>
                <div class="col" id="tab-text-2">
                  Utilize our coupon tool for enrollment incentives and global promotions to drive course traffic.
                  Unlock further opportunities by being chosen for ITS Business.
                </div>
              </div>
              <div class="col">
                <img src="/images/tab1.png" id="tab-img1" />
              </div>
            </div>
          </div>
        </div>
        <div className={toggleState === 2 ? "content  active-content" : "content"} >
          <div class="container text-center" style={{ display: "flex" }}>
            <div class="row" style={{ width: "74vh", height: "20vh", marginLeft: "-4vh"  }}>
              <div class="col" id="tab-text-1">
                With the addition of a smartphone or DSLR camera and a good microphone, you'll have all the necessary
                tools to get started. If appearing on camera isn't your preference, you can opt for screen capture instead.
                Whichever method you choose, we recommend aiming for a duration of two hours or more for your course.<br />
                <div class="col" id="tab-text-midline">
                  Here's how our services can support you<br />
                </div>
                <div class="col" id="tab-text-2">
                  Our support team is here to provide you with continuous assistance and offer constructive
                  feedback on your test videos, ensuring you receive guidance every step of the way.
                </div>
              </div>
              <div class="col">
                <img src="/images/tab2.jpg" id="tab-img2" />
              </div>
            </div>
          </div>
        </div>
        <div className={toggleState === 3 ? "content  active-content" : "content"} >
          <div class="container text-center" style={{ display: "flex" }}>
            <div class="row" style={{ width: "74vh", height: "20vh", marginLeft: "-4vh" }}>
              <div class="col" id="tab-text-1">
                Amass your initial ratings and reviews by actively promoting your course through social media and leveraging
                your professional networks. As your course gains visibility in our marketplace, you'll earn revenue from each paid enrollment.<br />
                <div class="col" id="tab-text-midline">
                  Here's how our services can support you<br />
                </div>
                <div class="col" id="tab-text-2">
                  Utilize our custom coupon tool for enrollment incentives and benefit from our global promotions that drive
                  course traffic. Additionally, Udemy Business selection opens up further opportunities for your courses.
                </div>
              </div>
              <div class="col">
                <img src="/images/tab3.png" id="tab-img3" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
