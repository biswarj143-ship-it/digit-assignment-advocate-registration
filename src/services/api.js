
export const createAdvocate = async (data) => {

  const payload = {
    RequestInfo: {
      apiId: "Rainmaker",
      msgId: "1669914902132|en_IN",
      authToken: localStorage.getItem("employee-token") || "8923-3213-3213", // dummy token
    },
    Advocates: [
      {
        firstName: data.firstName,
        lastName: data.lastName,
        barRegistrationNumber: data.barNumber,
        organisationName: "Private Practice",
        isIndividual: true,
        address: {
          doorNo: data.address.doorNumber,
          pincode: data.address.pincode,
          city: data.address.city,
          district: data.address.district,
          state: data.address.state,
          type: "PERMANENT",
        },
        documents: [
          {
            documentType: "BAR_ID",
            fileStoreId: data.fileStoreId,
          },
        ],
        workflow: {
          action: "SUBMIT",
          comments: "New registration",
          businessService: "advocate-registration",
        },
      },
    ],
  };

  console.log("Final DIGIT API Payload:", payload);

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        ResponseInfo: { status: "successful" },
        Advocates: [{ id: `ADV/${new Date().getFullYear()}/${Math.floor(1000 + Math.random() * 9000)}` }]
      });
    }, 1500);
  });
};


const delay = (ms) => new Promise((res) => setTimeout(res, ms));

let generatedOTP = "123456";  //Valid OTP 123456

export const sendOTP = async (phone) => {
  await delay(800);

  console.log("OTP Sent to:", phone);

  return {
    status: "OTP_SENT",
    mobileNumber: phone,
  };
};

export const verifyOTP = async (otp) => {
  await delay(800);

  if (otp === generatedOTP) {
    return {
      status: "VERIFIED",
      userId: "USER-" + Date.now(),
    };
  } else {
    throw new Error("Invalid OTP");
  }
};


export const saveAdvocateDetails = async (data) => {
  await delay(800);

  console.log("Advocate Details ", data);

  return {
    status: "SUCCESS",
    advocateId: "ADV-" + Date.now(),
  };
};


export const uploadDocument = async (file) => {
  await delay(800);

  return {
    fileStoreId: "FILE-" + Date.now(),
    fileName: file.name,
  };
};


export const saveAddress = async (data) => {
  await delay(800);

  console.log("Address ", data);

  return {
    status: "SUCCESS",
  };
};

export const verifyIdentity = async (method) => {
  await delay(800);

  return {
    status: "VERIFIED",
    method,
  };
};

export const generateAadharOTP = (aadhaar) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("OTP sent to Aadhaar:", aadhaar);
      resolve({ success: true });
    }, 800);
  });
};

export const verifyAadharOTP = (otp) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (otp === "123456") {
        resolve({ success: true });
      } else {
        reject({ message: "Invalid OTP" });
      }
    }, 800);
  });
};

export const submitTerms = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ applicationId: "APP123456" });
    }, 800);
  });
};

export const checkStatus = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ status: "APPROVED" }); 
    }, 2000);
  });
};


// //////////////////////////////////

export const fetchMDMSData = async () => {
  await delay(500);

  return {
    States: [
      { code: "OD", name: "Odisha" },
      { code: "DL", name: "Delhi" },
      { code: "KA", name: "Karnataka" },
    ],
    District: [
      { code: "KH", name: "Khordha" },
      { code: "CTC", name: "Cuttack" },
    ],
    City: [
      { code: "BBSR", name: "Bhubaneswar" },
      { code: "DEL", name: "Delhi" },
    ],
  };
};

