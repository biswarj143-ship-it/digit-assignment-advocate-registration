import React, { useState } from 'react';
import mdmsData from '../mock/mdmsData.json';
import { useNavigate } from "react-router-dom";
import { sendOTP } from "../services/api";

const AdvocateMobileNo = () => {
  const [file, setFile] = useState(null);

  const statesList = mdmsData?.States || ['Odisha', 'Delhi', 'Maharashtra'];
  
  const [role, setRole] = useState("advocate");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState({});



const validate = () => {
  let err = {};

  if (!phone) {
    err.phone = "Mobile number is required";
  } else if (!/^[6-9]\d{9}$/.test(phone)) {
    err.phone = "Invalid mobile number";
  }

  setErrors(err);
  return Object.keys(err).length === 0;
};
  const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//   e.preventDefault();

//   if (!validate()) return;

//   await sendOTP(phone);
//   navigate("/otp");
// };

/////////////////
const [loading, setLoading] = useState(false);

const handleSubmit = async (e) => {
  e.preventDefault();

  if (!validate()) return;

  setLoading(true);

  try {
    await sendOTP(phone);
    localStorage.setItem("mobile", phone);
    navigate("/otp");
  } finally {
    setLoading(false);
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
        <button style={styles.backButton} onClick={() => navigate("/about")}>‹ Back</button>
        <div style={styles.contentWidthLimiter}>
          

          <div style={styles.verificationCard}>
          <h1 style={styles.title}>Please enter your mobile number</h1>
         <p style={styles.subtitle}>
           You will use this as your login. We will send you an OTP to verify.
         </p>

        
         <form style={styles.form} onSubmit={handleSubmit}>
           <label style={styles.label}>Mobile No</label>

           <div style={styles.phoneInput}>
             <span style={styles.prefix}>+91</span>
             <input
               type="text"
               placeholder="Enter phone number"
               value={phone}
              onChange={(e) => setPhone(e.target.value)}
               style={styles.input}
             />
           </div>
          <div>
            {errors.phone && (
              <p style={{ color: "red", fontSize: "12px" }}>
                {errors.phone}
              </p>
            )}
          </div>
          <button type="submit" style={styles.signInButton}>
                         Continue
           </button>
         </form>
            
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
    marginTop : '100px'
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
    width: "420px",
    background: "#fff",
    padding: "40px",
    borderRadius: "4px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
    textAlign: "center",
    marginTop:"70px"
  },

  title: {
    margin: 0,
    fontSize: "26px",
    fontWeight: "700",
  },

  subtitle: {
    marginTop: "8px",
    color: "#777",
    fontSize: "14px",
    marginBottom: "30px",
  },

  tabs: {
    display: "flex",
    borderBottom: "1px solid #ddd",
    marginBottom: "25px",
  },

  tab: {
    flex: 1,
    padding: "10px",
    border: "none",
    background: "none",
    cursor: "pointer",
    fontSize: "14px",
    color: "#666",
  },

  activeTab: {
    borderBottom: "3px solid #0f766e",
    color: "#0f766e",
    fontWeight: "600",
  },

  form: {
    textAlign: "left",
  },

  label: {
    fontSize: "14px",
    fontWeight: "600",
  },

  phoneInput: {
    display: "flex",
    border: "1px solid #ccc",
    marginTop: "6px",
    marginBottom: "20px",
  },

  prefix: {
    padding: "12px",
    background: "#f3f3f3",
    borderRight: "1px solid #ccc",
    fontSize: "14px",
  },

  input: {
    flex: 1,
    border: "none",
    padding: "12px",
    outline: "none",
    fontSize: "14px",
  },

  signInButton: {
    width: "100%",
    padding: "14px",
    background: "#0f766e",
    color: "#fff",
    border: "none",
    fontWeight: "600",
    cursor: "pointer",
    fontSize: "16px",
  },

  registerText: {
    marginTop: "20px",
    fontSize: "14px",
    color: "#666",
  },

  registerLink: {
    color: "#e76f00",
    cursor: "pointer",
    fontWeight: "500",
  },
};

export default AdvocateMobileNo;