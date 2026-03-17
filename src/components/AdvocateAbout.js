
import React, { useState } from 'react';
import mdmsData from '../mock/mdmsData.json';

const AdvocateAbout = () => {
  const [file, setFile] = useState(null);

  const statesList = mdmsData?.States || ['Odisha', 'Delhi', 'Maharashtra'];
  
  const [role, setRole] = useState("advocate");
    const roles = [
    {
      id: "litigant",
      title: "I’m a litigant",
      description: "I have to file a complaint, join a case, or have a complaint against me",
    },
    {
      id: "advocate",
      title: "I’m an advocate",
      description: "I’m professionally qualified to plead the cause of another in a court of law",
    },
    {
      id: "clerk",
      title: "I’m an advocate’s clerk",
      description: "I organise the daily workload and administration for a group of advocates",
    },
  ];

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
        <button style={styles.backButton}>‹ Back</button>
        <div style={styles.contentWidthLimiter}>
          

          <div style={styles.verificationCard}>
                     <h1 style={styles.title}>Tell us a bit about yourself</h1>
         <p style={styles.subtitle}>
           This will help us streamline a few things and personalise your experience
         </p>

            
            <div style={styles.roleList}>
           {roles.map((item) => (
            <div
              key={item.id}
              style={styles.roleOption}
              onClick={() => setRole(item.id)}
            >
              <div style={styles.radioContainer}>
                <div style={{
                  ...styles.radioOuter,
                  borderColor: role === item.id ? "#a34e25" : "#ccc" 
                }}>
                  {role === item.id && <div style={styles.radioInner} />}
                </div>
              </div>
              <div style={styles.textContainer}>
                <div style={styles.roleTitle}>{item.title}</div>
                <div style={styles.roleDescription}>{item.description}</div>
              </div>
            </div>
          ))}
        </div>

        <button type="button" style={styles.continueButton}>
          Continue
        </button>
          </div>
        </div>
      </main>
    </div>
  );
};


const styles = {
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
    maxWidth: '540px', 
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
  verificationCard: {
    backgroundColor: 'var(--bg-card)',
    padding: '48px 24px',
    borderRadius: '4px',
    boxShadow: '0 1px 4px rgba(0,0,0,0.05)',
    textAlign: 'center',
  },
  title: {
    margin: '0 0 10px 0',
    fontSize: '24px',
    fontWeight: 'bold',
    color: 'var(--text-main)',
  },
  helperText: {
    fontSize: '13px',
    color: 'var(--text-secondary)',
    marginBottom: '32px',
    lineHeight: '1.6',
    margin: '0 0 32px 0',
  },
  form: {
    textAlign: 'left',
  },
  inputGroup: {
    marginBottom: '24px',
  },
  label: {
    display: 'block',
    fontSize: '14px',
    fontWeight: 'bold',
    color: 'var(--text-main)',
    marginBottom: '8px',
  },
  inputStyle: {
    width: '100%',
    padding: '12px',
    border: '1px solid var(--border-input)',
    borderRadius: '2px',
    fontSize: '14px',
    boxSizing: 'border-box',
    color: 'var(--text-main)',
  },
  uploadRow: {
    display: 'flex',
    gap: '12px',
    alignItems: 'center',
  },
  fileDisplay: {
    flex: 1,
    padding: '12px',
    border: '1px solid var(--border-input)',
    backgroundColor: '#FBFBFB', 
    color: '#9E9E9E',
    fontSize: '13px',
    fontStyle: 'italic',
    borderRadius: '2px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  uploadButton: {
    padding: '10px 24px',
    border: '2px solid var(--primary-teal)',
    color: 'var(--primary-teal)',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '14px',
    borderRadius: '2px',
    transition: 'all 0.2s ease',
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
  },
  continueButton: {
    width: '100%',
    padding: '16px',
    backgroundColor: 'var(--primary-teal)',
    color: '#fff',
    border: 'none',
    fontWeight: 'bold',
    fontSize: '16px',
    cursor: 'pointer',
    marginTop: '16px',
    borderRadius: '2px',
    transition: 'background-color 0.2s ease',
  },

  ////////
    card: {
    width: "480px",
    background: "#fff",
    padding: "50px 24px",
    borderRadius: "2px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
    textAlign: "center",
  },
  title: {
    margin: "0 0 10px 0",
    fontSize: "24px",
    fontWeight: "700",
    color: "#1a1a1a",
  },
  subtitle: {
    margin: "0 0 40px 0",
    color: "#666",
    fontSize: "14px",
    lineHeight: "1.5",
  },
  roleList: {
    textAlign: "left",
    marginBottom: "30px",
  },
  roleOption: {
    display: "flex",
    alignItems: "flex-start",
    padding: "20px 0",
    borderBottom: "1px solid #eee",
    cursor: "pointer",
  },
  radioContainer: {
    marginRight: "15px",
    marginTop: "2px",
  },
  radioOuter: {
    width: "20px",
    height: "20px",
    borderRadius: "50%",
    border: "2px solid #ccc",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transition: "all 0.2s ease",
  },
  radioInner: {
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    backgroundColor: "#a34e25", 
  },
  textContainer: {
    flex: 1,
  },
  roleTitle: {
    fontSize: "16px",
    fontWeight: "700",
    color: "#000",
    marginBottom: "6px",
  },
  roleDescription: {
    fontSize: "14px",
    color: "#666",
    lineHeight: "1.4",
  },
  continueButton: {
    width: "100%",
    padding: "14px",
    background: "#007a7a", 
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    fontWeight: "600",
    cursor: "pointer",
    fontSize: "16px",
    marginTop: "10px",
  },
};

export default AdvocateAbout;