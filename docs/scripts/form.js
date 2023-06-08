const form = document.getElementById("form");

function submitData() {
  if (checkInput()) {
    sendEmail();
    console.log("mail sent");
  } else {
    window.alert("Fill all cells");
  }
}

function sendEmail() {
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");

  const sender = {
    name: name.value,
    email: email.value,
    message: message.value
  };

  console.log(sender.name);
  console.log(sender.email);
  console.log(sender.message);

  body = "Written by " + sender.name;
  body += "\n\n" + sender.message;


  subject = "Portfolio Contact";

  window.location =
    "mailto:despoinidisk@gmail.com?body=" +
    encodeURIComponent(body) +
    "&subject=" +
    encodeURIComponent(subject);
};

function checkInput() {
  const email = document.getElementById("email");
  const name = document.getElementById("name");
  const message = document.getElementById("message");

  if (isEmpty(email.value) || isEmpty(name.value) || isEmpty(message.value)) {
    return false;
  } else {
    return true;
  }
}

function isEmpty(str) {
  return str === null || str.match(/^ *$/) !== null;
}
