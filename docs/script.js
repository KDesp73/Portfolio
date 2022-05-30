window.onresize = function(event) {
  document.location.reload(true);
}

var href = window.location.href.split("/")
var html_location = href[href.length-1]

if (window.innerWidth >= 960 && html_location == "index2.html") {
    window.location = "index.html";
}
if (window.innerWidth >= 960 && html_location == "projects2.html") {
    window.location = "projects.html";
}
if (window.innerWidth >= 960 && (html_location == "index2_gr.html") {
    window.location = "index_gr.html";
}
if (window.innerWidth >= 960 && html_location == "projects2_gr.html") {
    window.location = "projects_gr.html";
}



if (window.innerWidth < 960 && html_location == "index.html") {
    window.location = "index2.html";
}
if (window.innerWidth < 960 && html_location == "projects.html") {
    window.location = "projects2.html";
}
if (window.innerWidth < 960 && html_location == "index_gr.html") {
    window.location = "index2_gr.html";
}
if (window.innerWidth < 960 && html_location == "projects_gr.html") {
    window.location = "projects2_gr.html";
}
