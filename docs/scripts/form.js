emailjs.init("z5fkNGmy1Zz1o9TnI");

const form = document.getElementById("form");

function submitData() {
    if (checkInput()) {
        sendEmail();
    } else {
        window.alert("Fill all cells");
    }
}

function sendEmail() {
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");

    const info = {
        name: name.value,
        email: email.value,
        message: message.value,
    };

    emailjs
        .send("service_1vimw0c", "template_ahelvlb", {
            name: info.name,
            email: info.email,
            message: info.message,
            reply_to: info.email,
        })
        .then(
            function () {
                console.log(info.name);
                console.log(info.email);
                console.log(info.message);
                console.log("Message sent");
                window.alert("Message sent");
            },
            function (error) {
                console.log("Issue not sent", error);
            }
        );

}

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
