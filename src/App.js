// import logo from './logo.svg';
import './App.css';

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdvocateVarification from "./components/AdvocateVarification";
import AdvocateSignIn from './components/AdvocateSignIn';
import AdvocateMobileNo from './components/AdvocateMobileNo';
import AdvocateRegistration from './components/AdvocateRegistration';
import AdvocateVerificationUpload from './components/AdvocateVerificationUpload';
import AdvocateAbout from './components/AdvocateAbout';
import AdvocateAadharOTP from './components/AdvocateAadharOTP';
import AdvocateOTP from './components/AdvocateOTP';
import AdvocateAadharVerification from './components/AdvocateAadharVerification';
import AdvocateVerifyIdentity from './components/AdvocateVerifyIdentity';
import AdvocateAddress from './components/AdvocateAddress';
import AdvocateSuccess from './components/AdvocateSuccess';
import AdvocateWait from './components/AdvocateWait';
import AdvocateTerm from './components/AdvocateTerm';


function App() {
  return (
    
    <Router>
      <Routes>

        {/* <Route path="/" element={<Home />} /> */}

        <Route 
          path="/" 
          element={<AdvocateSignIn />} 
        />
        <Route 
          path="/about" 
          element={<AdvocateAbout />} 
        />
        <Route 
          path="/mobile" 
          element={<AdvocateMobileNo />} 
        />
        <Route 
          path="/otp" 
          element={<AdvocateOTP />} 
        />
        <Route 
          path="/verification" 
          element={<AdvocateVarification />} 
        />
        <Route 
          path="/registration" 
          element={<AdvocateRegistration />} 
        />

        <Route
          path="/advocate-verification-upload"
          element={<AdvocateVerificationUpload />}
        />

        
        <Route
          path="/advocate-registration"
          element={<AdvocateRegistration />}
        />

        <Route
          path="/advocate-address"
          element={<AdvocateAddress />}
        />

        <Route
          path="/advocate-verify-identity"
          element={<AdvocateVerifyIdentity />}
        />
       

        <Route
          path="/advocate-aadhar-verification"
          element={<AdvocateAadharVerification />}
        />

        <Route
          path="/advocate-aadhar-otp"
          element={<AdvocateAadharOTP />}
        />

         <Route
          path="/advocate-term"
          element={<AdvocateTerm />}
        />

         <Route
          path="/advocate-waiting"
          element={<AdvocateWait />}
        />

        
        <Route
          path="/advocate-success"
          element={<AdvocateSuccess />}
        />

      
      </Routes>
    </Router>
    
  );
}

export default App;
