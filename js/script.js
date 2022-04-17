//business logic
let male = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];

let female = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

let dateWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

//user Interface

function getInfo() {
  let day = parseInt(document.getElementById("day").value);

  let month = parseInt(document.getElementById("month").value);

  let year = parseInt(document.getElementById("year").value);

  let gender = radioInfo();

  let dayWeek = new Date(year + "/" + month + "/" + day);
  let d = dayWeek.getDay();
  let name = "";
  if (gender === "male") {
    name = male[d];
  } else {
    name = female[d];
  }
  //concatenate
  alert("You were born on " + dateWeek[d] + " and your Akan name is " + name);
  document.getElementById("akan").innerHTML =
    "You were born on " +
    daysOfTheWeek[d] +
    " and your Akan name is: " +
    maleNames[d];
}
function radioInfo() {
  let radio = document.getElementsByName("gender");
  for (let i = 0; i < radio.length; i++) {
    if (radio[i].checked == true) {
      // generate output with the checked radio

      gender = radio[i].value;
      // only one radio can be logically checked

      return gender;
    }
  }
}
