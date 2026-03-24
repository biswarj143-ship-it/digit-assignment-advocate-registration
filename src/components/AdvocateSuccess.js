import React from 'react';
import { useNavigate } from "react-router-dom";
const AdvocateSuccess = () => {
const navigate = useNavigate();
const appId = localStorage.getItem("applicationId");
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
        <button style={styles.backButton} onClick={() => navigate("/advocate-waiting")}>‹ Back</button>
        <div style={styles.contentWidthLimiter}>
          

          
      <div style={styles.card}>
        
        <div style={styles.wrapper}>
      <div style={styles.circle}>
        <svg
          width="36"
          height="36"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#2e7d32"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>
    </div>
        
        <h1 style={styles.title}>You’ve been registered successfully!</h1>
        <p style={styles.subtitle}>You can now proceed to file a case or join an on-going case</p>
        <p>Application ID: {appId}</p>
        <div style={styles.buttonGroup}>
          <button style={styles.primaryButton}>File a Case</button>
          <button style={styles.secondaryButton}>Join a Case</button>
        </div>
      </div>
    
        </div>
      </main>
    </div>
  );
  
};


const styles = {
 
  card: {
    width: '600px',
    backgroundColor: '#ffffff',
    padding: '60px 40px',
    textAlign: 'center',
    boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
  },
  title: {
    fontSize: '28px',
    fontWeight: 'bold',
    marginBottom: '15px',
    color: '#111',
  },
  subtitle: {
    fontSize: '16px',
    color: '#666',
    lineHeight: '1.5',
    marginBottom: '40px',
  },
  iconCircle: {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    backgroundColor: '#dcfce7',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 auto 30px',
  },
  waitingIcon: {
    fontSize: '50px',
    marginBottom: '30px',
  },
  buttonGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    alignItems: 'center',
  },
  primaryButton: {
    width: '100%',
    maxWidth: '350px',
    padding: '12px',
    backgroundColor: '#007a7a',
    color: '#fff',
    border: 'none',
    borderRadius: '2px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
  },
  secondaryButton: {
    width: '100%',
    maxWidth: '350px',
    padding: '12px',
    backgroundColor: 'transparent',
    color: '#007a7a',
    border: '1px solid #007a7a',
    borderRadius: '2px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
  },
  
  termsContainer: {
    backgroundColor: '#fff',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  termsContent: {
    flex: 1,
    padding: '40px 60px',
    maxWidth: '1000px',
    margin: '0 auto',
  },
  termsTitle: { fontSize: '32px', marginBottom: '20px' },
  scrollArea: { height: '60vh', overflowY: 'auto', paddingRight: '20px' },
  footer: {
    padding: '20px 60px',
    borderTop: '1px solid #eee',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  checkboxLabel: { display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px' },
  ol: { paddingLeft: '20px' },
  ul: { listStyleType: 'disc', paddingLeft: '20px', marginBottom: '15px' },
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
  wrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  circle: {
    width: "70px",
    height: "70px",
    borderRadius: "50%",
    background: "#e8f5e9",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "3px solid #81c784",
  },
};


export default AdvocateSuccess;