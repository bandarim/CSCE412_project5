function toggleStyleSheet() {
    let element = document.getElementById("main-ind");
    let filename = element.getAttribute("href");
    let newfile = "";
    if (filename == "index.css") {
        newfile = "style.css";
    }
    else {
        newfile = "index.css";
    }
    element.setAttribute("href", newfile);
    localStorage.setItem("stylesheet", newfile);
}

window.onload = function () {
    let sname = localStorage.getItem("stylesheet");
    let element = document.getElementById("main-ind");
    if (sname) {
        element.setAttribute("href", sname);
    }
    else {
        element.setAttribute("href", "index.css")
    }
}
