
import React, { useState } from 'react';
import mdmsData from '../mock/mdmsData.json';

const AdvocateVerificationUpload = () => {
  const [file, setFile] = useState(null);

  const statesList = mdmsData?.States || ['Odisha', 'Delhi', 'Maharashtra'];

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
            <h1 style={styles.title}>Advocate Verification</h1>
            <p style={styles.helperText}>
              To ensure the authenticity of your profile, please provide the following details for us to verify
            </p>

            <form style={styles.form}>
              <div style={styles.inputGroup}>
                <label style={styles.label}>State of registration</label>
                <select style={styles.inputStyle}>
                  <option value="">Select State</option>
                  {statesList.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>

              <div style={styles.inputGroup}>
                <label style={styles.label}>BAR registration number</label>
                <input type="text" placeholder="Enter registration number" style={styles.inputStyle} />
              </div>

              <div style={styles.inputGroup}>
                <label style={styles.label}>Upload BAR council ID</label>
                <div style={styles.uploadRow}>
                  <div style={styles.fileDisplay}>
                    {file ? file.name : "No files uploaded"}
                  </div>
                  <label style={styles.uploadButton}>
                    ↑ Upload
                    <input type="file" hidden onChange={(e) => setFile(e.target.files[0])} />
                  </label>
                </div>
                
                {file && (
                  <div style={styles.imagePreviewContainer}>
                    <img
                      src={URL.createObjectURL(file)}
                      alt="preview"
                      style={styles.previewImage}
                    />

                    <button
                      type="button"
                      style={styles.removeButton}
                      onClick={() => setFile(null)}
                    >
                      ✕
                    </button>
                  </div>
                )}
              </div>

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
  },

  ///////////////////
  removeButton: {
  position: 'absolute',
  top: '4px',
  right: '4px',
  background: '#0B5C66',
  color: '#fff',
  border: 'none',
  borderRadius: '2px',
  width: '20px',
  height: '20px',
  cursor: 'pointer',
  fontSize: '12px',
  lineHeight: '20px',
  textAlign: 'center'
},
imagePreviewContainer: {
  marginTop: '12px',
  position: 'relative',
  width: '120px',
  border: '1px solid #ddd',
  borderRadius: '2px',
  overflow: 'hidden'
},

previewImage: {
  width: '100%',
  display: 'block'
},
};

export default AdvocateVerificationUpload;