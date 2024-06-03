//Object keys:
//title, link, img

const container = document.getElementById("project-container");

window.onchange = e => {changeAspectRatio();};

function createProject(obj) {
    let link = document.createElement("a");
    let project = document.createElement("div");
    let title = document.createElement("p");

    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    console.log()
    project.classList.add("project");
    project.style.backgroundColor = randomColor;

    title.innerHTML = obj.title;
    title.style.fontWeight = "bold";
    title.style.color = obj.fg;

    link.href = obj.link;
    link.target = "_blank";

    if (obj.img != "") {
        project.style.backgroundImage = 'url("'.concat(obj.img.concat('")'));
    }

    project.append(title);
    link.append(project);
    container.append(link);

    changeAspectRatio();
}

function loadProjects() {
    for (let i = 0; i < projects.length; i++) {
        console.log(projects[i]);
        createProject(projects[i]);
    }
}

function calculateAspectRatio(columns) {
    let num = projects.length;

    var rows = 1;
    if (num > 6) {
        rows = num / columns;
    }

    aspectRatio = columns.toString().concat(" / ".concat(rows));

    container.style.aspectRatio = aspectRatio;
}

function changeAspectRatio(){
    if (window.innerWidth <= 600) {
        calculateAspectRatio(3);
    } else if (window.innerWidth > 600 && window.innerWidth <= 800){
        calculateAspectRatio(4);
    } else {
        calculateAspectRatio(6);
    }
}
