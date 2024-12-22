export default class Data {
  getTestData() {
    return [
      { userName: "01869220854", password: "Hello@2020r" },
      { userName: "013039379984", password: "Hello@2020ttt" },
    ];
  }

  getApplicationData() {
    // Function to generate a random NID number with a fixed first 5 digits and random last 5 digits
    function generateRandomNumber() {
      const fixedPart = "40150"; // Fixed first 5 digits
      const randomPart = Math.floor(10000 + Math.random() * 90000); // Random 5 digits (10000 to 99999)
      return fixedPart + randomPart; // Concatenate fixed and random parts as a string
    }

    return [
      {
        birthdata: "04-May-1971", // Static date (can be replaced with a dynamic random date function)
        nidNumber: generateRandomNumber(), // Random NID number with dynamic last 5 digits
        nameBangla: "রুবায়েদ",
        nameEnglish: "Rubayed",
        fatherName: "রেদওয়ানুল ইসলাম",
        motherName: "ফিরোজা পারভিন",
        occupationField: "COOK",
        mobileNumber: "01869220854",

        perPostCode: "5000",
        perDistrictfIELD: "DHAKA",
        perposiceStaionField: "MIRPUR",
        perAddress: "বসিরহাট গোয়ালপাড়া",

        prePostCode: "7512",
        preDistrictField: "CHANDPUR",
        prethanaField: "MATLAB",
        preaddress: "মতিরহাট বাজার",

        AccountNumber: "8855441122369",
        BranchField: "MIRPUR",
      },
    ];
  }
}
