import React, { useState } from 'react';
import mdmsData from '../mock/mdmsData.json';
import { useNavigate } from "react-router-dom";
import { saveAdvocateDetails } from "../services/api";

const AdvocateRegistration = () => {
  const [file, setFile] = useState(null);
  const navigate = useNavigate();
  const [form, setForm] = useState({
  firstName: "",
  middleName: "",
  lastName: "",
});
const [errors, setErrors] = useState({});
const validate = () => {
  let err = {};

  if (!form.firstName) err.firstName = "First name required";
  if (!form.lastName) err.lastName = "Last name required";

  setErrors(err);
  return Object.keys(err).length === 0;
};

const handleChange = (e) => {
  setForm({ ...form, [e.target.name]: e.target.value });
};

// const handleSubmit = async (e) => {
//   e.preventDefault();

//   if (!validate()) return;

//   await saveAdvocateDetails(form);

//   navigate("/advocate-address");
// };
 const handleSubmit = async (e) => {
  e.preventDefault();

  if (!validate()) return;

  const existing = JSON.parse(localStorage.getItem("verification"));

  const payload = {
    ...existing,
    ...form,
  };

  await saveAdvocateDetails(payload);

  localStorage.setItem("registration", JSON.stringify(payload));

  navigate("/advocate-address");
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
        <button style={styles.backButton} onClick={() => navigate("/verification")}>‹ Back</button>
        <div style={styles.contentWidthLimiter}>
          

          <div style={styles.verificationCard}>
            <h1 style={styles.title}>Enter your name as per official documents</h1>
            <p style={styles.helperText}>
              To ensure seamless verification and mantain complaince with official record
            </p>

            <form style={styles.form} onSubmit={handleSubmit}>
              <div style={styles.inputGroup}>
                <label style={styles.label}>First Name</label>
                <input type="text" placeholder="Enter first name" style={styles.inputStyle} name="firstName" onChange={handleChange}/>
              </div>
<div>{errors.firstName && <p style={{color:'red', fontSize: "12px"}}>{errors.firstName}</p>}</div>
              <div style={styles.inputGroup}>
                <label style={styles.label}>Middle Name</label>
                <input type="text" placeholder="Enter middle name" style={styles.inputStyle} name="middleName" onChange={handleChange}/>
              </div>

              <div style={styles.inputGroup}>
                <label style={styles.label}>Last Name</label>
                <input type="text" placeholder="Enter last name" style={styles.inputStyle} name="lastName" onChange={handleChange}/>
              </div>
<div>{errors.lastName && <p style={{color:'red', fontSize: "12px"}}>{errors.lastName}</p>}</div>
              <button type="submit" style={styles.continueButton}>Continue</button>
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
    padding: '48px 64px',
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
  }
};

export default AdvocateRegistration;