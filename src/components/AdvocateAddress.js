import React, { useState } from "react";
import mdmsData from '../mock/mdmsData.json';
const AdvocateAddress = () => {

  const statesList = mdmsData?.States ;
  const distList = mdmsData?.District ;
  const cityList = mdmsData?.City ;
  const [formData, setFormData] = useState({
    search: "",
    pincode: "",
    state: "",
    district: "",
    city: "",
    locality: "",
    doorNumber: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
          

          
      <div style={styles.card}>
        <h1 style={styles.title}>Enter your address</h1>

        
        <div style={styles.searchContainer}>
          <input
            type="text"
            name="search"
            placeholder="Search for a building, street, or area"
            style={styles.searchInput}
            onChange={handleChange}
          />
          <span style={styles.searchIcon}>🔍</span>
        </div>

        
        <div style={styles.mapPlaceholder}>
          <div style={styles.mapPin}>📍</div>
          <div style={styles.mapLabel}>Map Preview</div>
        </div>

        
        <div style={styles.infoAlert}>
          <span style={styles.infoIcon}>i</span>
          Move the pin to the exact desired location
        </div>

        
        <div style={styles.formGrid}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Pincode</label>
            <input type="text" name="pincode" style={styles.input} onChange={handleChange} />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>State</label>
            <select name="state" style={styles.select} onChange={handleChange}>
              <option value="">Select State</option>
              {statesList.map(s => <option key={s} value={s.code}>{s.name}</option>)}
            </select>
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>District</label>
            <select name="district" style={styles.select} onChange={handleChange}>
              <option value="">Select District</option>
              {distList.map(s => <option key={s} value={s.code}>{s.name}</option>)}
            </select>
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>City / town</label>
            <select name="city" style={styles.select} onChange={handleChange}>
              <option value="">Select City</option>
              {cityList.map(s => <option key={s} value={s.code}>{s.name}</option>)}
            </select>
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Locality / Street name / Area</label>
            <input type="text" name="locality" style={styles.input} onChange={handleChange} />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Door number</label>
            <input type="text" name="doorNumber" style={styles.input} onChange={handleChange} />
          </div>
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
  card: {
    width: "600px",
    background: "#fff",
    padding: "40px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
  },
  title: {
    textAlign: "center",
    fontSize: "22px",
    fontWeight: "700",
    marginBottom: "25px",
  },
  searchContainer: {
    position: "relative",
    marginBottom: "15px",
  },
  searchInput: {
    width: "100%",
    padding: "12px 40px 12px 15px",
    border: "1px solid #ccc",
    fontSize: "14px",
    boxSizing: "border-box",
  },
  searchIcon: {
    position: "absolute",
    right: "15px",
    top: "50%",
    transform: "translateY(-50%)",
    color: "#888",
  },
  mapPlaceholder: {
    width: "100%",
    height: "180px",
    backgroundColor: "#e5e3df", 
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "10px",
    border: "1px solid #ddd",
    position: "relative",
    backgroundImage: "radial-gradient(#dcdcdc 2px, transparent 2px)", 
    backgroundSize: "20px 20px",
  },
  mapPin: { fontSize: "30px", color: "#ff4444" },
  mapLabel: { fontSize: "12px", color: "#777", marginTop: "5px" },
  infoAlert: {
    backgroundColor: "#cfe2f3",
    color: "#5b7a9d",
    padding: "8px 15px",
    fontSize: "12px",
    borderRadius: "4px",
    marginBottom: "20px",
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  infoIcon: {
    background: "#5b7a9d",
    color: "#fff",
    borderRadius: "50%",
    width: "14px",
    height: "14px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "10px",
    fontWeight: "bold",
  },
  formGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "20px",
    textAlign: "left",
    marginBottom: "30px",
  },
  inputGroup: {
    display: "flex",
    flexDirection: "column",
  },
  label: {
    fontSize: "14px",
    fontWeight: "600",
    marginBottom: "6px",
    color: "#333",
  },
  input: {
    padding: "10px",
    border: "1px solid #999",
    fontSize: "14px",
    outline: "none",
  },
  select: {
    padding: "10px",
    border: "1px solid #999",
    fontSize: "14px",
    backgroundColor: "#fff",
    appearance: "none", 
    backgroundImage: `url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23666%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E")`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right 10px top 50%",
    backgroundSize: "12px auto",
  },
  continueButton: {
    width: "100%",
    padding: "14px",
    background: "#007a7a",
    color: "#fff",
    border: "none",
    fontWeight: "600",
    fontSize: "16px",
    cursor: "pointer",
    borderRadius: "2px",
  },


  //////////HEADER CSS//////////////
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

export default AdvocateAddress;