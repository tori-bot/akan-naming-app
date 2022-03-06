// business logic
let malenames = ["kwasi", "kwadwo", "kwabena", "kwaku", "yow", "kofi", "kwame"];
let femalenames = ["akosua", "adwoa", "abenaa", "akua", "yaa", "afua", "ama"];
let week = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

// user interface

function getInfo() {
  let year = parseInt(document.getElementById("year").value);
  let month = parseInt(document.getElementById("month").value);
  let day = parseInt(document.getElementById("day").value);
  let gender = radioInfo();

  let dayOfWeek = new Date(year + "/" + month + "/" + day);
  let d = dayOfWeek.getDay();
  let name = "";

  if (gender === "male") {
    name = male[d];
  } else {
    name = female[d];
  }
  alert(
    "your birthday was on a " +
      week[d] +
      " and your Akan name is " +
      name
  );
  document.getElementById('akan').innerHTML =
    "your birthday was on a " +
    week[d] +
    "and your Akan name is " +
    name;
}

function radioInfo() {
    let radio = document.getElementsByName("gender");
    // for (let i = 0; i < radio.length; i++)
    for (let of radio)
    {
    if (radio[i].checked === true) {
      return radio[i].value;
    }
  }
}
