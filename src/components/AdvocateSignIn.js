
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { sendOTP } from "../services/api";

const AdvocateSignIn = () => {
  const [role, setRole] = useState("advocate");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
  let err = {};

  if (!phone) {
    err.phone = "Phone number is required";
  } else if (!/^[6-9]\d{9}$/.test(phone)) {
    err.phone = "Enter valid 10-digit mobile number";
  }

  setErrors(err);
  return Object.keys(err).length === 0;
};

   const navigate = useNavigate();

  const handleSubmit = async (e) => {
    
  e.preventDefault();
   if (!validate()) return;
    // await sendOTP(phone);

  navigate("/about");
};

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Sign in to your account</h1>
        <p style={styles.subtitle}>
          Welcome back! Please enter your credentials
        </p>

        <div style={styles.tabs}>
          <button
            style={{
              ...styles.tab,
              ...(role === "judge" ? styles.activeTab : {})
            }}
            onClick={() => setRole("judge")}
          >
            Judge/ Court Staff
          </button>

          <button
            style={{
              ...styles.tab,
              ...(role === "advocate" ? styles.activeTab : {})
            }}
            onClick={() => setRole("advocate")}
          >
            Advocate/ Litigant
          </button>
        </div>

        <form style={styles.form} onSubmit={handleSubmit}>
          <label style={styles.label}>Phone No</label>

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
            Sign In
          </button>
        </form>

        <p style={styles.registerText}>
          Don’t have an account?{" "}
          <span style={styles.registerLink}>Register here</span>
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },

  card: {
    width: "420px",
    background: "#fff",
    padding: "40px",
    borderRadius: "4px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
    textAlign: "center",
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
    color: "#d55024",
    cursor: "pointer",
    fontWeight: "500",
  },
};

export default AdvocateSignIn;