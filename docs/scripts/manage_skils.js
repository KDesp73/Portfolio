//Object keys:
//tag, percentage

const container = document.getElementById("main-container");

function createPercentage(obj) {
  let box = document.createElement("div");
  let tag = document.createElement("p");
  let progress_bar = document.createElement("div");
  let progress = document.createElement("div");

  box.classList.add("progress-container");
  tag.classList.add("tag");
  progress_bar.classList.add("progress-bar");
  progress.classList.add("progress");

  tag.innerText = obj.tag;
  progress.style.width = obj.percentage;

  progress_bar.append(progress);
  box.append(tag);
  box.append(progress_bar);

  container.append(box);
}

function loadSkills() {
  for (let i = 0; i < skills.length; i++) {
    console.log(skills[i]);
    createPercentage(skills[i]);
  }
}
