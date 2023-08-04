import React, { useState } from 'react';
import { useNavigate } from 'react-router';

const PrivacyPolicy = () => {
  const [activeSection, setActiveSection] = useState(null);

  const scrollToContent = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  const ContactNavigate = useNavigate()
  const handlecontact=()=>{
    ContactNavigate('/contact')
  }

  return (
    <>
    <img src='/images/Privacy-Banner.jpg' id='Privacy-Banner' style={{width:"95rem",marginLeft:"-10rem"}}/>
    <div className="privacy-policy-container">
      <div className="row">
        <div className="row" style={{marginLeft: ".1rem",width: "95rem",marginTop:"-45rem"}}>
          <section id="info-collection">
            <h2
            style={{marginTop:"50rem"}}
              className={`section-heading ${activeSection === 'info-collection' ? 'active' : ''}`}
              onClick={() => scrollToContent('info-collection')}
            >
              Information We Collect
            </h2>
            <label style={{textAlign:"justify",fontSize:"1.3rem"}}>
            We collect user information, including personal details like name and email, as well as usage data such as 
            IP address, to enhance our services. Safeguarding your information is a top priority, and we handle it securely 
            in compliance with privacy laws. We maintain transparency by clearly communicating our data collection practices 
            in a privacy policy. Consent is obtained prior to collecting any personal information, and we only collect what is 
            necessary for the intended purpose.Robust security measures are in place to protect your data. We respect your rights, 
            including the right to access, correct, and delete your information. Your privacy and trust are important to us.
            </label>
          </section>
          <section id="information-use">
            <h2
              className={`section-heading ${activeSection === 'information-use' ? 'active' : ''}`}
              onClick={() => scrollToContent('information-use')}style={{marginTop:"2rem",marginBottom:"1rem"}}
            >
              How We Use Your Information
            </h2>
            <label style={{textAlign:"justify",fontSize:"1.3rem"}}>
              Your information is used to personalize your experience, deliver our services, and communicate with you. We may use your data to process payments, fulfill your course purchases, and provide support. Furthermore, we may use the information to improve our platform, analyze user behavior, and send relevant updates and promotional materials. We respect your preferences, and you can opt out of marketing communications at any time.
            </label>
          </section>
          <section id="information-sharing">
            <h2
              className={`section-heading ${activeSection === 'information-sharing' ? 'active' : ''}`}
              onClick={() => scrollToContent('information-sharing')}style={{marginTop:"2rem",marginBottom:"1rem"}}
            >
              Sharing Your Information
            </h2>
            <label style={{textAlign:"justify",fontSize:"1.3rem"}}>
              We prioritize the security and confidentiality of your information. We may share your data with trusted third-party service providers who assist us in delivering our services and maintaining our platform. These providers adhere to strict privacy standards and are only granted access to the necessary information for their respective tasks. We do not sell or disclose your personal information to unrelated third parties without your explicit consent.
            </label>
          </section>
          <section id="security">
            <h2
              className={`section-heading ${activeSection === 'security' ? 'active' : ''}`}
              onClick={() => scrollToContent('security')} style={{marginTop:"2rem",marginBottom:"1rem"}}
            >
              Security
            </h2>
            <label style={{textAlign:"justify",fontSize:"1.3rem"}}>
              The security of your information is of utmost importance to us. We employ industry-standard measures to safeguard your data against unauthorized access, misuse, or alteration. Our security practices include robust data encryption, regular system monitoring, and secure storage. However, it's important to note that no method of transmission or storage is completely foolproof, and we cannot guarantee absolute security.
              </label>
          </section>
          <section id="policy-changes">
            <h2
              className={`section-heading ${activeSection === 'policy-changes' ? 'active' : ''}`}
              onClick={() => scrollToContent('policy-changes')}style={{marginTop:"2rem",marginBottom:"1rem"}}
            >
              Changes to This Privacy Policy
            </h2>
            <label style={{textAlign:"justify",fontSize:"1.3rem"}}>
              Our privacy policy may be updated periodically to reflect changes in our practices or legal requirements. We encourage you to review the policy periodically for any revisions. By continuing to use our services after such changes, you agree to the updated policy. We will also notify you of any significant updates via email or other prominent means of communication.
              </label>  
          </section>
          <section id="contact">
            <h2
              className={`section-heading ${activeSection === 'contact' ? 'active' : ''}`}
              onClick={() => scrollToContent('contact')}style={{marginTop:"2rem",marginBottom:"1rem"}}  
            >
              Contact Us
            </h2>
            <label style={{textAlign:"justify",fontSize:"1.3rem"}}>
              If you have any questions, concerns, or requests related to our privacy policy or the handling of your information, please reach out to us via privacy@theitschool.com. Our dedicated privacy team is here to address your inquiries and provide further assistance or   <button onClick={handlecontact} id='privacy-btn' style={{background:"black",border:"transparent",marginTop:"1rem",marginBottom:"1rem",color:"white",padding:".5rem",width:"10rem",marginLeft:"32rem"}}>Contact Us</button>
              </label>  
          </section>
        </div>
      </div>
    </div>
    </>
  );
};

export default PrivacyPolicy;
