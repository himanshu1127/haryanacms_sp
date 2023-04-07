let dataArr = [];
let currentUser = {};
const changeComplains = () => {
  const value = document.getElementById("ioselect").value;
  console.log(dataArr);
  let newData = dataArr.filter((el) => {
    console.log(value);
    if (value === "") {
      return el;
    } else {
      return el.policestation === value;
    }
  });
  console.log(newData);
  append(newData);
};
// const pending = () => {
//   // window.location.href="./allComplaints.html"
//   let newData = dataArr.filter((el) => {
//     return el.Status === "PENDING";
//   });
//   console.log(newData);
//   append(newData);
// };
// console.log(currentUser)
const dataPoliceStation = (data) => {
  let newData = data.filter((el) => {
    console.log(currentUser);
    return el.rangeDistrictName === currentUser.districtofc;
  });
  dataArr = newData;
  append(newData);
};
// const getComp = async () => {
//   const url = `https://hrycms.onrender.com/complain/allcomplain`;
//   let res = await fetch(url);
//   let data = await res.json();
//   console.log(data);
//   // append(data);
//   // dataArr = data;
//   return dataArr;
// };

let localEl = {};
let get = (id) => {
  return document.getElementById(id);
};
let container = document.querySelector(".tableBody");
let convertDate = (id) => {
  let myDate = new Date(id);
  return myDate.toLocaleDateString();
};

const appendIo = (data) => {
  let container = document.getElementById("ioselect");
  // let updateCont = document.getElementById("");

  data.map((el) => {
    let option = document.createElement("option");
    option.innerText = `${el.policeStationName}`;
    option.value = el.policeStationName;
    // console.log(option)
    container.append(option);
    // updateCont.append(option)
  });
};
const userID = JSON.parse(localStorage.getItem("userID"));
const append = (data) => {
  container.innerHTML = null;
  let i = 0;
  data.forEach((el) => {
    // console.log(el);
    i++;
    let tr = document.createElement("tr");
    tr.setAttribute("class", "tableRow");
    let td1 = document.createElement("td");
    td1.setAttribute("class", "tablecol");
    td1.setAttribute("class", "tablecol1");
    td1.innerText = el.trackingId;
    let td2 = document.createElement("td");
    td2.setAttribute("class", "tablecol");
    td2.setAttribute("class", "tablecol2");
    td2.innerText = el.category;
    let td3 = document.createElement("td");
    td3.setAttribute("class", "tablecol");
    td3.setAttribute("class", "tablecol3");
    td3.innerText = el.ComplainantName;
    let td4 = document.createElement("td");
    td4.setAttribute("class", "tablecol");
    td4.setAttribute("class", "tablecol4");
    td4.innerText = convertDate(el.createdAt);
    let td5 = document.createElement("td");
    td5.setAttribute("class", "tablecol");
    td5.setAttribute("class", "tablecol5");
    td5.innerText = el.deadline;
    let td6 = document.createElement("td");
    td6.setAttribute("class", "tablecol");
    td6.setAttribute("class", "tablecol6");
    // td6.style.border = "1px solid red";
    td6.style.padding = "10px";
    let divarea = document.createElement("div");
    let p6 = document.createElement("p");
    p6.innerText = el.City;
    p6.style.margin = "10px 0px 10px 0px";
    // p6.style.border="1px solid cyan"
    divarea.style.borderRadius = "2%";
    divarea.append(p6);
    td6.append(divarea);
    let td7 = document.createElement("td");
    td7.setAttribute("class", "tablecol");
    td7.setAttribute("class", "tablecol7");
    td7.style.padding = "10px";
    let divStatus = document.createElement("div");
    let p7 = document.createElement("p");
    p7.innerText = el.status;
    p7.style.margin = "";
    divStatus.append(p7);
    td7.append(divStatus);

    let td9 = document.createElement("td");
    td9.style.padding = "10px";
    let divtd9 = document.createElement("div");
    // divtd9.style.border="1px solid cyan"
    divtd9.style.height = "40px";
    let p9 = document.createElement("p");
    p9.innerText = el.ComplaintCategory;
    p9.style.margin = "10px 0px 10px 0px";
    divtd9.append(p9);

    td9.append(divtd9);
    // let td10 = document.createElement("td");
    // td10.innerText = el.Status;
    let td10 = document.createElement("td");
    td10.style.padding = "10px";
    td9.style.padding = "10px";
    let divtd10 = document.createElement("div");
    divtd10.style.height = "40px";
    let p10 = document.createElement("p");
    p10.innerText = el.Status;
    p10.style.margin = "10px 0px 10px 0px";
    divtd10.append(p10);
    td10.append(divtd10);

    if (el.ComplaintCategory === "CAW") {
      divtd9.style.border = "1px solid navy";
      divtd9.style.backgroundColor = "navy";
      divtd9.style.boxSizing = "border-box";
      divtd9.style.alignSelf = "center";
      divtd9.style.height = "40px";
      divtd9.style.color = "white";
    } else if (el.ComplaintCategory === "Officers") {
      divtd9.style.border = "1px solid brown";
      divtd9.style.backgroundColor = "brown";
      divtd9.style.boxSizing = "border-box";
      divtd9.style.alignSelf = "center";
      divtd9.style.height = "40px";
      divtd9.style.color = "white";
    }

    if (el.highPriority) {
      divarea.style.border = "1px solid green";
      divarea.style.backgroundColor = "green";
      divarea.style.boxSizing = "border-box";
      divarea.style.alignSelf = "center";
      divarea.style.height = "40px";
      divarea.style.color = "white";
    }

    if (el.Status === "IN-PROCESS") {
      divtd10.style.border = "1px solid lime";
      divtd10.style.backgroundColor = "lime";
      divtd10.style.boxSizing = "border-box";
      divtd10.style.alignSelf = "center";
      divtd10.style.height = "40px";
      divtd10.style.color = "white";
    } else if (el.Status === "PENDING") {
      divtd10.style.border = "1px solid red";
      divtd10.style.backgroundColor = "red";
      divtd10.style.boxSizing = "border-box";
      divtd10.style.alignSelf = "center";
      divtd10.style.height = "40px";
      divtd10.style.color = "white";
    } else if (el.Status === "CLOSED") {
      divtd10.style.border = "1px solid blue";
      divtd10.style.backgroundColor = "blue";
      divtd10.style.boxSizing = "border-box";
      divtd10.style.alignSelf = "center";
      divtd10.style.height = "40px";
      divtd10.style.color = "white";
    } else if (el.Status === "OVERDUE") {
      divtd10.style.border = "1px solid darkviolet";
      divtd10.style.backgroundColor = "darkviolet";
      divtd10.style.boxSizing = "border-box";
      divtd10.style.alignSelf = "center";
      divtd10.style.height = "40px";
      divtd10.style.color = "white";
    } else if (el.Status === "REJECTED") {
      divtd10.style.border = "1px solid gray";
      divtd10.style.backgroundColor = "gray";
      divtd10.style.boxSizing = "border-box";
      divtd10.style.alignSelf = "center";
      divtd10.style.height = "40px";
      divtd10.style.color = "white";
    }

    let td8 = document.createElement("td");
    let divtd8 = document.createElement("div");
    divtd8.style.display = "inline";
    // divtd8.style.gap="5px"
    let updateIcon = document.createElement("button");

    let viewIcon = document.createElement("button");
    let commentsIcon = document.createElement("button");
    updateIcon.setAttribute("class", "buttonsAction");
    updateIcon.setAttribute("id", "updateComp");
    viewIcon.setAttribute("class", "buttonsAction");
    commentsIcon.setAttribute("class", "buttonsAction");
    updateIcon.innerHTML = '<i class="fa-solid fa-pen"></i>';
    updateIcon.addEventListener("click", () => {
      updateData(el);
    });
    updateIcon.style.width = "30%";

    viewIcon.innerHTML = '<i class="fa-solid fa-eye"></i>';
    viewIcon.addEventListener("click", () => {
      viewData(el);
    });
    viewIcon.style.margin = "5px";
    viewIcon.style.width = "20%";

    commentsIcon.innerHTML = '<i class="fa-solid fa-comment"></i>';
    commentsIcon.style.width = "40%";
    // commentsIcon.style.margin="5px"

    // td8.innerText = "hi";
    // updateIcon.innerHTML('<i class="fa-light fa-pen"></i>')

    divtd8.append(updateIcon, viewIcon, commentsIcon);
    td8.append(divtd8);
    tr.append(td1, td3, td9, td4, td5, td6, td10, td8);
    // console.log(tr);
    container.append(tr);
  });
};
const searchData = () => {
  let initial = document.getElementById("initialDate").value;
  let final = document.getElementById("finalDate").value;

  // console.log(typeof initial)
  let obj = {
    ini: initial,
    fin: final,
  };
  console.log(dataArr);
  let newData = dataArr.filter((el, index) => {
    // console.log(el.IssuedDate, "  ",initial)
    if (el.IssuedDate >= initial && el.IssuedDate <= final) {
      // console.log(el)

      return el;
    }
  });
  console.log(newData);
  append(newData);
  // console.log(obj);
};
const updateData = async (el) => {
  let displayUpdateComp = document.querySelector(".displayUpdateComp");
  displayUpdateComp.classList.toggle("activeUpdateComp");
  console.log(currentUser);
  console.log(el);
  localEl = el;
  get("complainantNameUpdate").value = el.ComplainantName;
  get("fatherNameUpdate").value = el.FatherName;
  get("complainantEmailUpdate").value = el.Email;
  get("addressUpdate").value = el.Address;
  get("mobileNoUpdate").value = el.ComplainantPhoneNumber;
  get("addressLine1Update").value = el.AddressLine1;
  get("alternateNumberUpdate").value = el.alternateNumber;
  get("cityInputUpdate").value = el.City;
  get("rangeInputUpdate").value = el.policerange;
  get("IOUpdate").value = el.policestation;
  get("complainStatusUpdate").value = el.Status;
  get("SPrtDescriptionUpdate").value = el.ComplaintSPrtDescription;
  get("complainCategoryUpdate").value = el.ComplaintCategory;
  get("highPriorityUpdate").checked = el.highPriority;
  get("complainantNumber").value = el.trackingId;
  // get("sectionsUpdate").value=el.
  // get("highPriorityUpdate").value=el.

  return localEl;
};
let updateComp = document.querySelector(".closeIconUpdate");
updateComp.onclick = function () {
  let compUpdate = document.querySelector(".displayUpdateComp");
  compUpdate.classList.toggle("activeUpdateComp");
};
const updateComplain = async () => {
  // alert("Update");
  // let compUpdate = document.querySelector(".displayUpdateComp");
  // compUpdate.classList.toggle("activeUpdateComp");
  console.log(`https://hrycms.onrender.com/complain/update/${localEl._id}`);
  let obj = {
    ComplainantName: document.getElementById("complainantNameUpdate").value,
    Email: document.getElementById("complainantEmailUpdate").value,
    author_id: userID,
    policerange: document.getElementById("rangeInputUpdate").value,
    // rangeDistrictName: document.getElementById("rangeInputUpdate").value,
    // policestation: "",
    phoneNumber: "",
    createdAt: "",
    updatedAt: "",
    ComplainantPhoneNumber: document.getElementById("mobileNoUpdate").value,
    alternateNumber: document.getElementById("alternateNumberUpdate").value,
    FatherName: document.getElementById("fatherNameUpdate").value,
    Address: document.getElementById("addressUpdate").value,
    AddressLine1: document.getElementById("addressLine1Update").value,
    State: document.getElementById("stateInputUpdate").value,
    City: document.getElementById("cityInputUpdate").value,
    ComplaintCategory: document.getElementById("complainCategoryUpdate").value,
    ComplaintSPrtDescription: document.getElementById("SPrtDescriptionUpdate")
      .value,
    SectionsofComplaint: "",
    Range: document.getElementById("rangeInputUpdate").value,
    Status: document.getElementById("complainStatusUpdate").value,
    policestation: document.getElementById("IOUpdate").value,
    highPriority: get("highPriorityUpdate").checked,
  };
  obj = JSON.stringify(obj);
  console.log(obj);

  try {
    let res = await fetch(
      `https://hrycms.onrender.com/complain/update/${localEl._id}`,
      {
        method: "PUT",
        body: obj,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    res = await res.json();
    console.log(res);
    alert("Update");
    // window.location.reload();
    let compUpdate = document.querySelector(".displayUpdateComp");
    compUpdate.classList.toggle("activeUpdateComp");
  } catch (err) {
    alert(err);
  }
};

let displayViewComp = document.querySelector(".displayViewComp");
let closeIconView = document.querySelector(".closeIconView");
closeIconView.addEventListener("click", () => {
  displayViewComp.classList.toggle("activeviewComp");
});
const viewData = (el) => {
  console.log(el);
  let displayViewComp = document.querySelector(".displayViewComp");
  displayViewComp.classList.toggle("activeviewComp");
  get("complainantNameView").value = el.ComplainantName;
  get("fatherNameView").value = el.FatherName;
  get("complainantEmailView").value = el.Email;
  get("addressView").value = el.Address;
  get("mobileNoView").value = el.ComplainantPhoneNumber;
  get("addressLine1View").value = el.AddressLine1;
  get("alternateNumberView").value = el.alternateNumber;
  get("cityInputView").value = el.City;
  get("rangeInputView1").value = el.Range;
  get("IONameView1").value = el.policestation;
  get("complainStatusView").value = el.Status;
  get("SPrtDescriptionView").value = el.ComplaintSPrtDescription;
  get("complainCategoryView").value = el.ComplaintCategory;
  get("complainantNumberView").value = el.trackingId;
  get("highPriorityView").checked = el.highPriority;
  // get("dateOfSubView").value = convertDate(el.createdAt);
};