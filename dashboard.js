let container = document.querySelector(".tableBody");
let complainData = [];
const goToIO = () => {
  window.location.href = "./SHOReport.html";
};
let displayUpdateComp = document.querySelector(".displayUpdateComp");
let closeIconUpdate = document.querySelector(".closeIconUpdate");
closeIconUpdate.addEventListener("click", () => {
  displayUpdateComp.classList.toggle("activeUpdateComp");
});

let displayViewComp = document.querySelector(".displayViewComp");
let closeIconView = document.querySelector(".closeIconView");
closeIconView.addEventListener("click", () => {
  displayViewComp.classList.toggle("activeviewComp");
});

const toaddComplaints = () => {
  window.location.href = "./addComplaints.html";
};

const append = (data) => {
  let container = document.querySelector(".tableBody");
  container.innerHTML = null;
  data.forEach((el) => {
    // console.log(el);
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
    td4.innerText = el.complainDate;
    let td5 = document.createElement("td");
    td5.setAttribute("class", "tablecol");
    td5.setAttribute("class", "tablecol5");
    td5.innerText = el.targetDate;
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
    p7.style.margin = "10px 0px 10px 0px";
    divStatus.append(p7);
    td7.append(divStatus);

    let td9 = document.createElement("td");
    td9.style.padding = "10px";
    let divtd9 = document.createElement("div");
    // divtd9.style.border="1px solid cyan"
    // divtd9.style.height = "40px";
    let p9 = document.createElement("p");
    p9.innerText = el.ComplaintCategory;
    p9.style.margin = "10px 0px 10px 0px";
    divtd9.append(p9);

    td9.append(divtd9);

    if (el.complaintType === "CAW") {
      //   divtd9.style.border = "1px solid navy";
      //   divtd9.style.backgroundColor = "navy";
      divtd9.style.boxSizing = "border-box";
      divtd9.style.alignSelf = "center";
      //   divtd9.style.height = "40px";
      //   divtd9.style.color = "white";
    } else if (el.complaintType === "Officers") {
      //   divtd9.style.border = "1px solid brown";
      //   divtd9.style.backgroundColor = "brown";
      divtd9.style.boxSizing = "border-box";
      divtd9.style.alignSelf = "center";
      //   divtd9.style.height = "40px";
      //   divtd9.style.color = "white";
    }

    if (el.priority === "high") {
      //   divarea.style.border = "1px solid green";
      //   divarea.style.backgroundColor = "green";
      divarea.style.boxSizing = "border-box";
      divarea.style.alignSelf = "center";
      //   divarea.style.height = "40px";
      //   divarea.style.color = "white";
    }

    if (el.status === "progress") {
      //   divStatus.style.border = "1px solid lime";
      //   divStatus.style.backgroundColor = "lime";
      divStatus.style.boxSizing = "border-box";
      divStatus.style.alignSelf = "center";
      //   divStatus.style.height = "40px";
      //   divStatus.style.color = "white";
    } else if (el.status === "pending") {
      //   divStatus.style.border = "1px solid red";
      //   divStatus.style.backgroundColor = "red";
      divStatus.style.boxSizing = "border-box";
      divStatus.style.alignSelf = "center";
      //   divStatus.style.height = "40px";
      //   divStatus.style.color = "white";
    } else if (el.status === "DISPOSED") {
      //   divStatus.style.border = "1px solid blue";
      //   divStatus.style.backgroundColor = "blue";
      divStatus.style.boxSizing = "border-box";
      divStatus.style.alignSelf = "center";
      //   divStatus.style.height = "40px";
      //   divStatus.style.color = "white";
    } else if (el.status === "overdue") {
      //   divStatus.style.border = "1px solid darkviolet";
      //   divStatus.style.backgroundColor = "darkviolet";
      divStatus.style.boxSizing = "border-box";
      divStatus.style.alignSelf = "center";
      //   divStatus.style.height = "40px";
      //   divStatus.style.color = "white";
    } else if (el.status === "rejected") {
      //   divStatus.style.border = "1px solid gray";
      //   divStatus.style.backgroundColor = "gray";
      divStatus.style.boxSizing = "border-box";
      divStatus.style.alignSelf = "center";
      //   divStatus.style.height = "40px";
      //   divStatus.style.color = "white";
    }

    let td8 = document.createElement("td");
    let divtd8 = document.createElement("div");
    divtd8.style.display = "inline";
    // divtd8.style.gap="5px"
    let updateIcon = document.createElement("button");
    updateIcon.addEventListener("click", () => {
      updateData(el);
    });

    let viewIcon = document.createElement("button");
    let commentsIcon = document.createElement("button");
    updateIcon.setAttribute("class", "buttonsAction");
    viewIcon.setAttribute("class", "buttonsAction");
    commentsIcon.setAttribute("class", "buttonsAction");
    updateIcon.innerHTML = '<i class="fa-solid fa-pen"></i>';
    updateIcon.style.width = "30%";

    viewIcon.innerHTML = '<i class="fa-solid fa-eye"></i>';
    viewIcon.style.margin = "5px";
    viewIcon.style.width = "20%";
    viewIcon.addEventListener("click", () => {
      viewData(el);
    });

    commentsIcon.innerHTML = '<i class="fa-solid fa-comment"></i>';
    commentsIcon.style.width = "40%";
    // commentsIcon.style.margin="5px"
    commentsIcon.addEventListener("click", () => {
      complainComment(el);
    });
    // td8.innerText = "hi";
    // updateIcon.innerHTML('<i class="fa-light fa-pen"></i>')

    td8.style.width = "15%";
    divtd8.append(updateIcon, viewIcon);
    td8.append(divtd8);
    tr.append(td1, td3, td9, td4, td5, td6, td8);
    // console.log(tr);
    container.append(tr);
  });
};
let localEl = {};
const get = (id) => {
  return document.getElementById(id);
};
const updateData = async (el) => {
  let deadline = new Date(el.targetDate);
  deadline = deadline.toISOString().substring(0, 10);
  let displayUpdateComp = document.querySelector(".displayUpdateComp");
  displayUpdateComp.classList.toggle("activeUpdateComp");
  localEl = el;
  console.log(el);
  get("complainantNameUpdate").value = el.ComplainantName;
  get("fatherNameUpdate").value = el.FatherName;
  get("complainantEmailUpdate").value = el.Email;
  get("addressUpdate").value = el.Address;
  get("mobileNoUpdate").value = el.ComplainantPhoneNumber;
  get("addressLine1Update").value = el.AddressLine1;
  get("alternateNumberUpdate").value = el.alternateNumber;
  get("cityInputUpdate").value = el.City;
  get("rangeInputUpdate").value = el.policerange;
  get("districtUpdate").value = el.rangeDistrictName;
  get("StationName").value = el.policestation;
  get("complainStatusUpdate").value = el.Status;
  get("SPrtDescriptionUpdate").value = el.ComplaintSPrtDescription;
  get("complainCategoryUpdate").value = el.ComplaintCategory;
  get("complainantNumber").value = el.trackingId;
  get("deadlineUpdate").value = deadline;
  // get("sectionsUpdate").value=el.
  get("highPriorityUpdate").checked = el.highPriority;

  return localEl;
};

const updateComplain = async () => {
  console.log(`https://hrycms.onrender.com/complain/update/${localEl._id}`);
  let obj = {
    ComplainantName: document.getElementById("complainantNameUpdate").value,
    Email: document.getElementById("complainantEmailUpdate").value,
    // author_id: user._id,
    policerange: document.getElementById("rangeInputUpdate").value,
    rangeDistrictName: document.getElementById("districtUpdate").value,
    policestation: get("StationName").value,
    ComplainantPhoneNumber: document.getElementById("mobileNoUpdate").value,
    alternateNumber: document.getElementById("alternateNumberUpdate").value,
    FatherName: document.getElementById("fatherNameUpdate").value,
    Address: document.getElementById("addressUpdate").value,
    AddressLine1: document.getElementById("addressLine1Update").value,
    // State: document.getElementById("stateInputUpdate").value,
    City: document.getElementById("cityInputUpdate").value,
    ComplaintCategory: document.getElementById("complainCategoryUpdate").value,
    ComplaintSPrtDescription: document.getElementById("SPrtDescriptionUpdate")
      .value,
    SectionsofComplaint: "",
    Range: document.getElementById("rangeInputUpdate").value,
    Status: document.getElementById("complainStatusUpdate").value,
    targetDate: get("deadlineUpdate").value,
    highPriority: get("highPriorityUpdate").checked,
  };
  console.log(obj);
  obj = JSON.stringify(obj);
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
    window.location.reload();
    let compUpdate = document.querySelector(".displayUpdateComp");
    compUpdate.classList.toggle("activeUpdateComp");
  } catch (err) {
    alert(err);
  }
};
let updateButton = document
  .getElementById("updateButton")
  .addEventListener("click", updateComplain);
const viewData = (el) => {
  console.log(el);
  let deadline = new Date(el.targetDate);
  deadline = deadline.toISOString().substring(0, 10);
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
  get("rangeInputView1").value = el.policerange;
  get("districtView").value = el.rangeDistrictName;
  get("StationNameView").value = el.policestation;
  get("complainStatusView").value = el.Status;
  get("SPrtDescriptionView").value = el.ComplaintSPrtDescription;
  get("complainCategoryView").value = el.ComplaintCategory;
  get("complainantNumber").value = el.trackingId;
  get("deadlineView").value = deadline;
  get("highPriorityView").checked = el.highPriority;
};
const search = () => {
  let query = document.getElementById("searchBox").value;
  let newData = complainData.filter((el) => {
    return el.ComplainantName.includes(query);
  });
  // console.log(newData);
  append(newData);
};
