import React, { useState, useRef } from "react";
import { generateAadharOTP } from "../services/api";
import { useNavigate } from "react-router-dom";

const AdvocateAadharVerification = () => {

  const [parts, setParts] = useState(["", "", ""]);
  const inputRefs = [useRef(), useRef(), useRef()];

  const handleChange = (index, e) => {
    const value = e.target.value.replace(/\D/g, "");
    if (value.length <= 4) {
      const newParts = [...parts];
      newParts[index] = value;
      setParts(newParts);


      if (value.length === 4 && index < 2) {
        inputRefs[index + 1].current.focus();
      }
    }
  };

  const handleKeyDown = (index, e) => {

    if (e.key === "Backspace" && !parts[index] && index > 0) {
      inputRefs[index - 1].current.focus();
    }
  };

  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    const aadhaar = parts.join("");

    if (aadhaar.length !== 12) {
      setError("Enter valid 12 digit Aadhaar");
      return;
    }

    setError("");

    await generateAadharOTP(aadhaar);

    navigate("/advocate-aadhar-otp");
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
        <button style={styles.backButton} onClick={() => navigate("/advocate-verify-identity")}>‹ Back</button>
        <div style={styles.contentWidthLimiter}>



          <div style={styles.card}>
            <h1 style={styles.title}>Enter your Aadhaar Number</h1>
            <p style={styles.subtitle}>Please enter your 12 Digit Aadhaar number</p>

            <div style={styles.inputGroup}>
              {parts.map((part, index) => (
                <input
                  key={index}
                  ref={inputRefs[index]}
                  type="text"
                  maxLength="4"
                  value={part}
                  onChange={(e) => handleChange(index, e)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  style={styles.input}
                  placeholder="----"
                />
              ))}
            </div>
            <div>{error && <p style={{ color: "red" }}>{error}</p>}</div>

            <button
              type="button"
              style={styles.otpButton}
              onClick={handleSubmit}
            >
              Get OTP
            </button>
          </div>

        </div>
      </main>
    </div>
  );

};

const styles = {

  card: {
    width: "500px",
    background: "#fff",
    padding: "60px 40px",
    textAlign: "center",
    boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
  },
  title: {
    fontSize: "24px",
    fontWeight: "800",
    margin: "0 0 8px 0",
    color: "#000",
  },
  subtitle: {
    fontSize: "14px",
    color: "#444",
    margin: "0 0 40px 0",
  },
  inputGroup: {
    display: "flex",
    justifyContent: "space-between",
    gap: "15px",
    marginBottom: "40px",
  },
  input: {
    width: "30%",
    height: "45px",
    border: "1px solid #ccc",
    textAlign: "center",
    fontSize: "18px",
    letterSpacing: "2px",
    outline: "none",
    borderRadius: "2px",
  },
  otpButton: {
    width: "100%",
    padding: "16px",
    background: "#007a7a",
    color: "#fff",
    border: "none",
    fontWeight: "600",
    fontSize: "16px",
    cursor: "pointer",
    borderRadius: "2px",
    transition: "background 0.3s ease",
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
    color: '#000'
  },
};

export default AdvocateAadharVerification;