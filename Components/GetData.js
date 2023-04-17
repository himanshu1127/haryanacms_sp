const url = `https://haryanacms.onrender.com`;

let complain = [];
let pending = [];
let today = [];
let priority = [];
let disposed = [];
let currentUser = {};
let visitorComplain = [];
let IO = [];
let SP = [];
let DSP = [];
let SHO = [];
let Ranges = [];
let currentRange;
let districts = [];
let currentDistrict;
let policeStations = [];
let currentPoliceStation;
let category = [];
let act = [];
const userID = JSON.parse(localStorage.getItem("userID"));
// let getUser = async () => {
//   let res = await fetch(`${url}/user/user/${userID}`);
//   res = await res.json();
//   console.log(res);
// };

// let getComplain = async (data) => {
//   let res = await fetch(`${url}/complain/allcomplain`);
//   res = await res.json();
//   console.log(res);
//   data = res;
//   changeComplains(res);
//   return res;
//   // return dataArr;
// };
// const changeComplains = (data,value) => {
// //   const value = document.getElementById("ioselect").value;
//   console.log(data);
//   console.log(value);
// //   let newData = data.filter((el) => {
// //     console.log(value);
// //     if (value === "") {
// //       return el;
// //     } else {
// //       return el.Markto === value;
// //     }
// //   });
// //   console.log(newData);
// //   append(newData);
// };
// export { getUser, getComplain ,changeComplains};
async function getUser() {
  const response = await fetch(`${url}/user/user/${userID}`);
  const data = await response.json();
  currentUser = data;
  // console.log(data)
  currentRange = currentUser.policerange;
  currentDistrict = currentUser.districtofc;
  currentPoliceStation = currentUser.policestation;
  // console.log(currentDistrict);
  // console.log(currentPoliceStation);
  // console.log(currentRange);
  return data;
}

async function getComplain() {
  let res = await fetch(`${url}/complain/allcomplain`);
  res = await res.json();
  console.log(res);
  complain = res.filter((el) => {
    return el.rangeDistrictName === currentUser.districtofc;
  });
  pending = complain.filter((el) => {
    return el.Status === "PENDING";
  });
  disposed = complain.filter((el) => {
    return el.Status === "DISPOSED";
  });
  today = complain.filter((el) => {
    let dateObj = new Date(el.createdAt);
    dateObj = dateObj.toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
    dateObj = dateObj.split(", ")[0].split("/").reverse().join("-");
    //   console.log("dateObj");
    //   console.log(dateObj);
    let dateNow = new Date();
    dateNow = dateNow.toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
    dateNow = dateNow.split(", ")[0].split("/").reverse().join("-");
    //   console.log("dateNow")
    //   console.log(dateNow);

    return dateObj === dateNow;
  });
  priority = complain.filter((el) => {
    return el.highPriority === true;
  });
  console.log(today, priority, pending, disposed);
  // complain = res;
  console.log(complain);

  return res;
}
async function getVisitor() {
  let res = await fetch(`${url}/visitor/getvisitor`);
  res = await res.json();
  console.log(res);
  visitorComplain = res.filter((el) => {
    return el.markto === currentUser.email;
  });
  console.log(visitorComplain);
  return res;
}
async function getRange() {
  let res = await fetch(`${url}/range/getRange`);
  res = await res.json();
  Ranges = res;
  return res;
}
const getDistrict = async () => {
  let res = await fetch(`${url}/district/getDistrict`);
  res = await res.json();
  districts = res;
  return res;
};
async function getIO() {
  let res = await fetch(`${url}/user/allio`);
  res = await res.json();
  // console.log(res)
  IO = res.filter((el) => {
    return el.policestation === currentUser.policestation;
  });
  // console.log(IO)
  return res;
}
async function getCategory() {
  let res = await fetch(`${url}/category/getcategory`);
  res = await res.json();
  category = res;

  return res;
}
async function getDSP() {
  let res = await fetch(`${url}/user/alldsp`);
  res = await res.json();
  DSP = res;

  return res;
}
async function getSP() {
  let res = await fetch(`${url}/user/allsp`);
  res = await res.json();
  SP = res;
  return res;
}
async function getSHO() {
  let res = await fetch(`${url}/user/allsho`);
  res = await res.json();
  console.log(res);
  SHO = res.filter((el) => {
    return el.districtofc === currentUser.districtofc;
  });
  return res;
}
async function getAct() {
  let res = await fetch(`${url}/act/getact`);
  res = await res.json();
  act = res;
  return res;
}
async function getStations() {
  let res = await fetch(`${url}/policestation/getPolicestation`);
  res = await res.json();

  policeStations = res.filter((el) => {
    return el.policeStationDistrict === currentUser.districtofc;
  });
  console.log(policeStations);
  return res;
}
async function loading() {
  return `
  <h1>Loading...</h1>
  `;
}
const a = async () => {
  await getUser();
  await getComplain();
  await getRange();
  await getIO();
  await loading();
  await getCategory();
  await getVisitor();
  await getDSP();
  await getSP();
  await getSHO();
  await getDistrict();
  await getAct();
  await getStations();
};

export {
  a,
  complain,
  currentUser,
  visitorComplain,
  IO,
  Ranges,
  category,
  currentRange,
  currentDistrict,
  currentPoliceStation,
  districts,
  act,
  SP,
  DSP,
  SHO,
  policeStations,
  today,
  priority,
  pending,
  disposed,
};
