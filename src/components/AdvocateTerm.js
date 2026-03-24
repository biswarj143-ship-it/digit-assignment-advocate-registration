import React, { useState } from 'react';
import { submitTerms } from "../services/api";
import { useNavigate } from "react-router-dom";
import { createAdvocate } from "../services/api";

const AdvocateTerm = () => {
  const [accepted, setAccepted] = useState(false);
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

// const handleProceed = async () => {
//   if (!accepted) return;

//   const res = await submitTerms();
//   console.log("Application ID:", res.applicationId);

//   navigate("/advocate-waiting");
// };

const handleProceed = async () => {
  if (!accepted) return;

  const finalData = {
    ...JSON.parse(localStorage.getItem("finalData")),
    identityMethod: localStorage.getItem("identityMethod"),
  };

  const res = await createAdvocate(finalData);

  const appId = res.Advocates[0].id;

  localStorage.setItem("applicationId", appId);

  navigate("/advocate-waiting");
};

   return (
    <div style={styles.container}>
      <header style={styles.header}>
        <img src="/govt-logo.png" alt="Emblem" style={styles.emblem} />
        <div style={styles.headerRight}>
          <img src="/globe.png" alt="Globe" style={styles.globe} /><span>EN</span>
          <span>Support</span>
        </div>
      </header>

      <main style={styles.mainContent}>
        <button style={styles.backButton} onClick={() => navigate("/advocate-aadhar-otp")}>‹ Back</button>
        <div style={styles.contentWidthLimiter}>
          

          
      <div style={styles.termsContainer}>
      <div style={styles.termsContent}>
        <h1 style={styles.termsTitle}>Terms and Conditions</h1>
        <p style={styles.termsIntro}>
          The platform provides users with a convenient and efficient way to file court cases and manage case-related proceedings online. By using the platform, you agree to these terms and conditions.
        </p>
        
        <div style={styles.contentBody}>
          <div style={styles.section}>
            <h3 style={styles.sectionHeader}>1. User Eligibility</h3>
            <ul style={styles.ul}>
              <li>Age: You must be at least 18 years old to use the platform.</li>
              <li>Legal Capacity: You must have the legal capacity to enter into agreements.</li>
            </ul>
          </div>

          <div style={styles.section}>
            <h3 style={styles.sectionHeader}>2. User Registration and Account</h3>
            <ul style={styles.ul}>
              <li>Account Creation: To use the platform, you must create an account by providing the required information.</li>
              <li>Account Security: You are responsible for maintaining the security of your account credentials.</li>
              <li>Account Termination: We may terminate your account under certain circumstances, such as if you violate these terms and conditions.</li>
            </ul>
          </div>

          <div style={styles.section}>
            <h3 style={styles.sectionHeader}>3. Platform Services</h3>
            <ul style={styles.ul}>
              <li>Service Description: The platform offers services such as case filing, document upload, hearing attendance, and payment processing.</li>
              <li>Limitations: We may limit or restrict the services provided at our discretion.</li>
            </ul>
          </div>

          <div style={styles.section}>
            <h3 style={styles.sectionHeader}>4. User Conduct</h3>
            <ul style={styles.ul}>
              <li>Prohibited Conduct: You may not use the platform for any unlawful or prohibited purpose, including harassment, fraud, or unauthorized access.</li>
              <li>Intellectual Property: All intellectual property rights in the platform and its content belong to [Platform Name].</li>
            </ul>
          </div>

          <div style={styles.section}>
            <h3 style={styles.sectionHeader}>5. Fees and Payments</h3>
            <ul style={styles.ul}>
              <li>Payment Terms: You will be charged fees for using the platform, as outlined in our fee schedule.</li>
              <li>Refund Policy: Our refund policy is available on our website.</li>
            </ul>
          </div>

          <div style={styles.section}>
            <h3 style={styles.sectionHeader}>6. Privacy Policy</h3>
            <ul style={styles.ul}>
              <li>Data Collection and Use: We collect and use your data in accordance with our Privacy Policy.</li>
              <li>Data Sharing: We may share your data with third parties as described in our Privacy Policy.</li>
              <li>Data Security: We take reasonable measures to protect your data from unauthorized access.</li>
            </ul>
          </div>

          <div style={styles.section}>
            <h3 style={styles.sectionHeader}>7. Disclaimer of Warranties</h3>
            <ul style={styles.ul}>
              <li>No Warranties: The platform is provided "as is" without any warranties.</li>
              <li>Limitation of Liability: We are not liable for any damages or losses arising from your use of the platform.</li>
            </ul>
          </div>

          <div style={styles.section}>
            <h3 style={styles.sectionHeader}>8. Indemnification</h3>
            <ul style={styles.ul}>
              <li>User Indemnification: You agree to indemnify us for any claims or losses arising from your use of the platform.</li>
            </ul>
          </div>

          <div style={styles.section}>
            <h3 style={styles.sectionHeader}>9. Governing Law and Jurisdiction</h3>
            <ul style={styles.ul}>
              <li>Governing Law: These terms and conditions are governed by the laws of [Jurisdiction].</li>
              <li>Jurisdiction: Any disputes arising from these terms and conditions will be resolved in the courts of [Jurisdiction].</li>
            </ul>
          </div>

          <div style={styles.section}>
            <h3 style={styles.sectionHeader}>10. Amendments</h3>
            <ul style={styles.ul}>
              <li>Modifications: We may modify these terms and conditions at any time.</li>
              <li>Notification: We will notify you of any changes to these terms and conditions.</li>
            </ul>
          </div>

          <div style={styles.section}>
            <h3 style={styles.sectionHeader}>11. Severability</h3>
            <ul style={styles.ul}>
              <li>Severability: If any provision of these terms and conditions is found to be invalid, the remaining provisions will remain in effect.</li>
            </ul>
          </div>

          <div style={styles.section}>
            <h3 style={styles.sectionHeader}>Additional Considerations:</h3>
            <ul style={styles.ul}>
              <li>Dispute Resolution: Consider including provisions for mediation or arbitration to resolve disputes.</li>
              <li>Force Majeure: Address events beyond the control of the parties that may affect the performance of the agreement.</li>
              <li>Third-Party Services: If the platform relies on third-party services, address the terms and conditions of those providers.</li>
            </ul>
          </div>
        </div>
        <label style={styles.checkboxLabel}>
          <input 
            type="checkbox"
    checked={accepted}
    onChange={(e) => setAccepted(e.target.checked)}
    style={styles.checkbox}
            
          />
          I accept the above terms and conditions
        </label>
      </div>

      <div style={styles.footer}>
        <div>
            
        </div>
        <button 
          disabled={!accepted} 
          onClick={handleProceed}
          style={{
            ...styles.primaryButton, 
            backgroundColor: accepted ? '#007a7a' : '#007a7a',
            cursor: accepted ? 'pointer' : 'not-allowed'
          }}
        >
          Proceed
        </button>
      </div>
    </div>
    
        </div>
      </main>
    </div>
  );
  
};

const styles = {
  termsContainer: {
    width: '100%',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#fff',
    fontFamily: 'sans-serif',
  },
  termsContent: {
    flex: 1,
    padding: '40px 5%', 
    width: '90%',
    margin: '0 auto',
  },
  termsTitle: {
    fontSize: '32px',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#000',
  },
  termsIntro: {
    fontSize: '14px',
    lineHeight: '1.6',
    color: '#333',
    marginBottom: '30px',
  },
  contentBody: {
    textAlign: 'left',
  },
  section: {
    marginBottom: '20px',
  },
  sectionHeader: {
    fontSize: '16px',
    fontWeight: 'bold',
    margin: '0 0 8px 0',
  },
  ul: {
    listStyleType: 'disc',
    paddingLeft: '20px',
    margin: 0,
  },
  footer: {
    position: 'sticky',
    bottom: 0,
    width: '100%',
    padding: '20px 5%',
    backgroundColor: '#fff',
    borderTop: '1px solid #717375', 
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxSizing: 'border-box',
  },
  checkboxLabel: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    fontSize: '14px',
    color: '#555',
    cursor: 'pointer',
  },
  checkbox: {
    width: '18px',
    height: '18px',
    accentColor: '#007a7a',
  },
  primaryButton: {
    padding: '10px 30px',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    fontSize: '16px',
    fontWeight: '600',
    transition: 'background 0.3s',
  },

  
  ////////////////////////
  container: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'var(--bg-main)',
  },
  header: {
    backgroundColor: 'var(--bg-card)',
    padding: '12px 48px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid var(--border-light)',
  },
  emblem: {
    height: '42px',
  },
  globe: {
    height: '22px',
  },
  headerRight: {
    display: 'flex',
    gap: '24px',
    fontSize: '14px',
    fontWeight: '500',
    color: 'var(--text-main)',
  },
  mainContent: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '40px',
  },
  contentWidthLimiter: {
    width: '100%',
    maxWidth: '1240px', 
    display: 'flex',
    flexDirection: 'column',
  },
  backButton: {
    alignSelf: 'flex-start',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    color: 'var(--text-secondary)',
    marginBottom: '20px',
    fontSize: '16px',
    padding: '0',
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    marginLeft: '40px',
    color:'#000'
  },
};

export default AdvocateTerm;