
import React, { useState, useEffect, useRef } from "react";

const AdvocateOTP = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [timer, setTimer] = useState(25);
  const inputRefs = useRef([]);

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  const handleChange = (index, e) => {
    const value = e.target.value;
    if (isNaN(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);

    if (value && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
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
        <button style={styles.backButton}>‹ Back</button>
        <div style={styles.contentWidthLimiter}>
          <div style={styles.overlay}>
            
            <div style={styles.modal}>
             
              <div style={styles.header2}>
                <h2 style={styles.title}>Verify your Mobile Number</h2>
                <button style={styles.closeBtn}>×</button>
              </div>

              <p style={styles.text}>Enter the OTP sent to +91******2334.</p>

              <div style={styles.otpContainer}>
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    ref={(el) => (inputRefs.current[index] = el)}
                    type="text"
                    maxLength="1"
                    value={digit}
                    onChange={(e) => handleChange(index, e)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    style={styles.otpInput}
                  />
                ))}
              </div>

              <div style={styles.footerRow}>
                <div style={styles.timerText}>
                  Request a new OTP in {`0:${timer < 10 ? "0" : ""}${timer}`}
                  <span style={{
                    marginLeft: "10px",
                    color: timer === 0 ? "#007a7a" : "#ccc",
                    cursor: timer === 0 ? "pointer" : "default"
                  }}>
                    Resend OTP
                  </span>
                </div>
                <button style={styles.verifyBtn}>Verify</button>
              </div>
            </div>
          </div>


        </div>
      </main>
    </div>
  );
  
};

const styles = {
  overlay: {
    position: "fixed",
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  modal: {
    width: "500px",
    backgroundColor: "#fff",
    padding: "30px",
    borderRadius: "4px",
    position: "relative",
    boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
  },
  header2: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "10px",
  },
  title: {
    fontSize: "20px",
    fontWeight: "bold",
    margin: 0,
  },
  closeBtn: {
    background: "none",
    border: "none",
    fontSize: "24px",
    color: "#666",
    cursor: "pointer",
  },
  text: {
    fontSize: "14px",
    color: "#333",
    marginBottom: "25px",
  },
  otpContainer: {
    display: "flex",
    gap: "10px",
    marginBottom: "30px",
  },
  otpInput: {
    width: "100%",
    height: "45px",
    textAlign: "center",
    fontSize: "18px",
    border: "1px solid #ccc",
    borderRadius: "2px",
    outline: "none",
  },
  footerRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  timerText: {
    fontSize: "13px",
    color: "#555",
  },
  verifyBtn: {
    backgroundColor: "#007a7a",
    color: "#fff",
    border: "none",
    padding: "10px 25px",
    borderRadius: "2px",
    fontWeight: "600",
    cursor: "pointer",
  },
  /////////
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
};

export default AdvocateOTP;