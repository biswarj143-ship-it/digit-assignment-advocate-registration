# DIGIT Assignment - Advocate Registration Frontend

## Overview
This project implements the Advocate Registration module frontend as part of the DIGIT platform assignment.

The application follows the DIGIT UI guidelines and simulates integration with backend services such as IDGen, MDMS, Workflow, and Persister using mock APIs.

* **MDMS Integration:** All master data (States, Districts, Cities) is fetched from a central mock MDMS service. No hardcoding of master data names; only codes are passed in API payloads.
* **Workflow Driven:** The UI logic is built to align with the `advocate-registration` workflow states (`PENDING_FOR_VERIFICATION`, `APPROVED`, etc.).
* **Dummy External Integrations:** Aadhaar verification screens include a simulated 2-second loading state to mimic external API calls as per requirements.
* **Data Persistence:** Uses `localStorage` to maintain state across the 12-page registration journey.
* **DIGIT API Contract:** The final submission payload is structured using the standard `Advocates` and `RequestInfo` objects.

---

## Tech Stack
- React JS
- JavaScript
- CSS

---

## Features Implemented

- Multi-step form navigation
- Form validation at each step
- Aadhaar Verification (Dummy UI) 
- Document Upload
- Terms & Conditions
- Success Page with Application Number

---

## Mock API Integration

Mock services are implemented to simulate backend:

- Create Advocate Application
- Fetch Master Data (MDMS)
- Upload Documents

Example response:
```js
{
  applicationNumber: "ADV-2026-0001",
  status: "PENDING"
}


**Module Name:** `digit_assignment`  
**Base Package:** `digit.academy.tutorial`

---


## Screenshots & Flow

### 1. Sign In
![Step 1 - Sign In](./screenshots/page1_signIn.png)
*User enters mobile number for signIn.*

### 2. About
![Step 1 - About](./screenshots/page2_about.png)
*User choose about his details.*

### 3. Mobile Verification
![Step 1 - Mobile Verification](./screenshots/page3_mobile.png)
*User enters mobile number for verification.*

### 4. Mobile & OTP Verification
![Step 1 - OTP](./screenshots/page4_otp.png)
*User enters mobile number and verifies via a 6-digit OTP.*  //Valid OTP 123456

### 5. Details Verification
![Step 1 - Verification](./screenshots/page5_uploadVerification.png)
*User enters State and image upload.*

### 6.Registration Details
![Step 1 - Registration Details](./screenshots/page6_registration.png)
*User enters Registration Details.*

### 7. Professional & Address Details (MDMS)
![Step 2 - Address](./screenshots/page7_address.png)
*Address selection uses cascading dropdowns driven by MDMS codes.*

### 8. Identity Verification
![Step 1 - Verification](./screenshots/page8_identity.png)
*User enters Identity .*

### 9. Dummy Aadhaar Integration
![Step 3 - Aadhaar](./screenshots/page9_aadharNumber.png)
*Simulated loading state (2s) for external Aadhaar verification.*

### 10. Aadhar & OTP Verification
![Step 1 - Aadhar & OTP](./screenshots/page10_aadharOTP.png)
*User verifies via a 6-digit OTP.*    //Valid OTP 123456

### 11. Term & Condition 
![Step 4 - Term](./screenshots/page11_term.png)
*User accept term and condition.*

### 12. Waiting
![Step 4 - Waiting](./screenshots/page12_waiting.png)
*User waiting page*

### 13. Success State &  Proof: Final API Payload
![Step 5 - Success](./screenshots/page13_success.png)
*Generated Application ID following the format: `ADV/YYYY/XXXX` and Screenshot of the Browser Console showing the formatted DIGIT JSON payload upon final submission.*

---


## Run Project

npm install
npm start






























# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
