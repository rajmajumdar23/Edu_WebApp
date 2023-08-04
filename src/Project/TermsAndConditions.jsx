import React from 'react';

const TermsAndConditions = () => {
  return (
    <>
      <img src="/images/tnc.jpg" style={{marginLeft: "-10rem",width: "95rem",marginTop:"-2rem"}} />
      <h1 id='TermsnCon-Label'>Terms and Conditions</h1>
      <div className="terms-container">
        <section>
          <h2 id="Tnc-heading" style={{ textAlign: "left", fontSize:"1.5rem", marginBottom:"2rem",marginTop:"2rem",color:"#ffb001" }}>1. Website Usage</h2>
         <label style={{textAlign:"left",marginLeft:"-17.5rem"}}>
            1.1. The IT School provides online educational services through the Website, including courses, tutorials, and other learning materials.
          </label>
         <label style={{textAlign:"left"}}>
            1.2. You agree to use the Website and its services for lawful purposes only. You will not engage in any activity that violates applicable laws or infringes upon the rights of others.
          </label>
         <label style={{textAlign:"left",marginLeft:"-18.5rem"}}>
            1.3. The IT School reserves the right to modify, suspend, or discontinue any part of the Website or its services without prior notice.
          </label>
        </section>

        <section>
          <h2 id="Tnc-heading" style={{ textAlign: "left", fontSize:"1.5rem", marginBottom:"2rem",marginTop:"2rem",color:"#ffb001" }}>2. User Accounts</h2>
         <label style={{textAlign:"left"}}>
            2.1. To access certain features or services on the Website, you may be required to create a user account. You agree to provide accurate and up-to-date information during the registration process.
          </label>
         <label style={{textAlign:"left"}}>
            2.2. You are responsible for maintaining the confidentiality of your account credentials and for any activity that occurs under your account. You must notify The IT School immediately of any unauthorized use or security breach.
          </label>
        </section>

        <section>
          <h2 id="Tnc-heading" style={{ textAlign: "left", fontSize:"1.5rem", marginBottom:"2rem",marginTop:"2rem",color:"#ffb001" }}>3. Intellectual Property</h2>
         <label style={{textAlign:"left"}}>
            3.1. The content provided on the Website, including text, graphics, logos, and videos, is protected by intellectual property laws and is the exclusive property of The IT School or its licensors.
          </label>
         <label style={{textAlign:"left"}}>
            3.2. You are granted a limited, non-exclusive, and non-transferable license to access and use the content for personal, non-commercial purposes. You may not reproduce, modify, distribute, or exploit the content without prior written permission.
          </label>
        </section>

        <section>
          <h2 id="Tnc-heading" style={{ textAlign: "left", fontSize:"1.5rem", marginBottom:"2rem",marginTop:"2rem",color:"#ffb001" }}>4. Payment and Refunds</h2>
         <label style={{textAlign:"left",marginLeft:"-10rem"}}>
            4.1. Certain services on the Website may require payment. You agree to provide accurate and complete payment information when making a purchase.
          </label>
         <label style={{textAlign:"left",marginLeft:"-6.5rem"}}>
            4.2. The IT School utilizes third-party payment processors to handle transactions securely. The IT School does not store or have access to your payment details.
          </label>
         <label style={{textAlign:"left"}}>
            4.3. Refunds may be provided in accordance with The IT School's refund policy, which can be found on the Website. The IT School reserves the right to modify the refund policy at its discretion.
          </label>
        </section>

        <section>
          <h2 id="Tnc-heading" style={{ textAlign: "left", fontSize:"1.5rem", marginBottom:"2rem",marginTop:"2rem",color:"#ffb001" }}>5. Disclaimer of Warranties</h2>
         <label style={{textAlign:"left"}}>
            5.1. The IT School strives to provide accurate and reliable information on the Website. However, the Website and its services are provided on an "as is" and "as available" basis, without any warranties or representations, expressed or implied.
          </label>
         <label style={{textAlign:"left"}}>
            5.2. The IT School does not guarantee the accuracy, completeness, or timeliness of the content on the Website. You acknowledge that any reliance on such content is at your own risk.
          </label>
        </section>

        <section>
          <h2 id="Tnc-heading" style={{ textAlign: "left", fontSize:"1.5rem", marginBottom:"2rem",marginTop:"2rem",color:"#ffb001" }}>6. Limitation of Liability</h2>
         <label style={{textAlign:"left"}}>
            6.1. In no event shall The IT School or its affiliates be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in connection with your use of the Website or its services.
          </label>
         <label style={{textAlign:"left"}}>
            6.2. The IT School shall not be responsible for any disruptions, errors, or omissions on the Website or for any loss or damage caused by viruses or other harmful components.
          </label>
        </section>

        <section>
          <h2 id="Tnc-heading" style={{ textAlign: "left", fontSize:"1.5rem", marginBottom:"2rem",marginTop:"2rem",color:"#ffb001" }}>7. Governing Law and Jurisdiction</h2>
         <label style={{textAlign:"left"}}>
            7.1. These Terms shall be governed by and construed in accordance with the laws of [Jurisdiction]. Any dispute arising out of or relating to these Terms shall be subject to the exclusive jurisdiction of the courts in [Jurisdiction].
          </label>
        </section>

        <section>
          <h2 id="Tnc-heading" style={{ textAlign: "left", fontSize:"1.5rem", marginBottom:"2rem",marginTop:"2rem",color:"#ffb001" }}>8. Modifications to the Terms</h2>
         <label style={{textAlign:"left"}}>
            8.1. The IT School reserves the right to update or modify these Terms at any time without prior notice. It is your responsibility to review the Terms periodically for any changes.
          </label>
         <label style={{textAlign:"left",marginLeft:"-18.5rem",marginBottom:"3rem"}}>
            8.2. By continuing to use the Website after the Terms have been updated or modified, you agree to be bound by the revised Terms.
          </label>
        </section>
      </div>
    </>
  );
};

export default TermsAndConditions;
