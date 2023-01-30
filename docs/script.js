
function UrlExists() {
  var url = window.location.href;
  var http = new XMLHttpRequest();
  http.open("HEAD", url, false);
  http.send();
  if (http.status != 404) return true;
  else return false;
}

const fetch = require("node-fetch");
fetch("https://httpstat.us/404")
  .then(function () {
    console.log("200 OK");
  })
  .catch(function () {
    console.log("404 Not Found");
    loadHTML();
  });

function loadHTML() {
  window.location.href = "index.html";
}

function toggleMenu() {
  document.body.classList.toggle("open");
}
function toggleProject() {
  document.body.classList.toggle("open-project");
}

function return_() {
  document.getElementsByClassName("project").setAttribute("opacity", "0");
}

function toHome() {
  window.location.href =
    "https://users.iee.ihu.gr/~iee2021035/my-portfolio/index.html";
}

function toggleCalendar() {
  var x = document.getElementById("calendar");
  if (x.style.visibility === "hidden") {
    x.style.visibility = "visible";
  } else {
    x.style.visibility = "hidden";
  }
}

function checkInput() {
  const email = document.getElementById("email");
  const fname = document.getElementById("firstname");
  const lname = document.getElementById("lastname");
  const message = document.getElementById("message");
  const form = document.getElementById("form");
  const sent = document.getElementById("sent");
  const container = document.getElementById("container");
  const container_sent = document.getElementById("container-sent");

  if (
    email.value == "" ||
    fname.value == "" ||
    lname.value == "" ||
    message.value == ""
  ) {
    window.alert("Συμπληρώστε όλα τα κελία");
  } else {
    container.style.display = "none";

    container_sent.style.display = "flex";

    //window.alert("Το μήνυμα σας στάλθηκε με επιτυχία");

    console.log(email.value);
    console.log(fname.value);
    console.log(lname.value);
    console.log(message.value);
  }
}

function isDone() {
  return (
    email.value != "" &&
    fname.value != "" &&
    lname.value != "" &&
    message.value != ""
  );
}

function copyToClipboard() {
  navigator.clipboard.writeText("KDesp73#6998");
  alert("Discord profile copied to clipboard");
}

function checkLength() {
  const message = document.getElementById("message");
  if (message.value.length > 100)
    window.alert("You cannot submit this message./nOver 100 characters");
}
