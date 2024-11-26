import { password, userName } from "../pages/login";

export default class Data {
  getTestData() {
    return [
      { userName: "01869220854", password: "Hello@2020r" },
      { userName: "013039379984", password: "Hello@2020ttt" },
    ];
  }
  getApplicationData() {
    return [
      {
        birthdata: "04-Jan-1999",
        nidNumber: "4011002008",
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
      {
        birthdata: "04-Jan-1999",
        nidNumber: "1411002000",
        nameBangla: "আতিকুল",
        nameEnglish: "Atikul",
        fatherName: "রেদওয়ানুল ইসলাম",
        motherName: "ফিরোজা পারভিন",
        occupationField: "COOK",
        mobileNumber: "01869220854",

        perPostCode: "5000",
        perDistrictfIELD: "DHAKA",
        perposiceStaionField: "MIRPUR",
        perAddress: "বসিরহাট গোয়ালপাড়া",

        prePostCode: "8500",
        preDistrictField: "CHANDPUR",
        prethanaField: "MATLAB",
        preaddress: "মতিরহাট বাজার",

        AccountNumber: "8855441100000",
        BranchField: "MIRPUR",
      },
    ];
  }
}
