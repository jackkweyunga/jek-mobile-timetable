

const main = document.createElement("main");

// initial container styles
import topnav_html from "./html/main.html";

const sidenav = document.createElement("aside")

// css classes
var classes = ["sidebar"]
classes.forEach(x => sidenav.classList.add(x));

// html template
sidenav.innerHTML = topnav_html;

export default main;
