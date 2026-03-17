
import React, { useState } from "react";

const AdvocateVerifyIdentity = () => {
  const [selectedMethod, setSelectedMethod] = useState("aadhaar");

  const methods = [
    {
      id: "aadhaar",
      title: "Aadhaar (Recommended)",
      description: "An instant verification that will provide a verified status against your profile",
    },
    {
      id: "other",
      title: "Other ID",
      description: "Manual verification by uploading government ID",
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
          

          
      <div style={styles.card}>
        <h1 style={styles.title}>Verify your identity</h1>
        <p style={styles.subtitle}>
          Before diving in, we'll need to verify your identity for account setup
        </p>

        <div style={styles.optionsContainer}>
          {methods.map((method) => (
            <div
              key={method.id}
              onClick={() => setSelectedMethod(method.id)}
              style={{
                ...styles.optionBox,
                borderColor: selectedMethod === method.id ? "#007a7a" : "#e0e0e0",
              }}
            >
              <div style={styles.radioWrapper}>
                <div style={{
                  ...styles.radioOuter,
                  borderColor: selectedMethod === method.id ? "#007a7a" : "#999"
                }}>
                  {selectedMethod === method.id && <div style={styles.radioInner} />}
                </div>
              </div>
              <div style={styles.textWrapper}>
                <div style={styles.optionTitle}>{method.title}</div>
                <div style={styles.optionDescription}>{method.description}</div>
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
 
  card: {
    width: "480px",
    background: "#fff",
    padding: "50px 40px",
    borderRadius: "4px",
    textAlign: "center",
    boxShadow: "0 2px 10px rgba(0,0,0,0.03)",
  },
  title: {
    fontSize: "24px",
    fontWeight: "700",
    color: "#1a1a1a",
    margin: "0 0 10px 0",
  },
  subtitle: {
    fontSize: "14px",
    color: "#555",
    lineHeight: "1.5",
    margin: "0 0 35px 0",
  },
  optionsContainer: {
    textAlign: "left",
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    marginBottom: "40px",
  },
  optionBox: {
    display: "flex",
    padding: "20px",
    border: "1px solid #e0e0e0",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "all 0.2s ease",
  },
  radioWrapper: {
    marginRight: "15px",
    marginTop: "2px",
  },
  radioOuter: {
    width: "22px",
    height: "22px",
    borderRadius: "50%",
    border: "2px solid #999",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  radioInner: {
    width: "12px",
    height: "12px",
    borderRadius: "50%",
    backgroundColor: "#007a7a",
  },
  textWrapper: {
    flex: 1,
  },
  optionTitle: {
    fontSize: "16px",
    fontWeight: "700",
    color: "#000",
    marginBottom: "5px",
  },
  optionDescription: {
    fontSize: "13px",
    color: "#666",
    lineHeight: "1.4",
  },
  continueButton: {
    width: "100%",
    padding: "16px",
    background: "#007a7a",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    fontWeight: "600",
    fontSize: "16px",
    cursor: "pointer",
  },

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
};

export default AdvocateVerifyIdentity;