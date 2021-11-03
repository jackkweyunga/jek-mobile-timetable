
// imports

import wrapper from "./components/wrapper.js";
import main from "./components/main.js";
import righttopnav from "./components/topnav.js";
import topnav from "./components/rightsidenav";
import sidenav from "./components/sidenav.js";
import { default as content, drawTimeTable } from "./components/content.js";
import axios from "axios";

wrapper.appendChild(topnav)
wrapper.appendChild(sidenav)
wrapper.appendChild(righttopnav)
wrapper.appendChild(main);
main.appendChild(content);

var loader = document.getElementById("tmb-search");

function startLoading() {
  loader.style.display = "flex";
}

function stopLoading() {
  loader.style.display = "none";
}

stopLoading();

var ndays = 5;
var Ttype = "Lecture";
var search_value = "";

const sidenavs = document.getElementById('tmb-sidebar-nav').children;


const SelectionListener = (pid, pyear) => {
  startLoading();
  drawTimeTable(pid, pyear, ndays, Ttype).then(() => {
    stopLoading();
  });

  search_value = e.target.value;
};

const n_map = { "a_day": 1, "three_days": 3, "a_week": 5 }

const Ttypes = ["Lecture", "Seminar", "Practical", "Tutorial"];

for (let item of sidenavs) {
  item.addEventListener('click', () => {
    // console.log(item.id, n_map);

    if (n_map[item.id] !== undefined) {
      // console.log(item.lastChild.textContent);
      ndays = n_map[item.id];
      drawTimeTable(search_value, ndays, Ttype);

    };

    if (Ttypes.indexOf(item.lastChild.textContent) > -1) {
      // console.log(item.lastChild.textContent);
      Ttype = item.lastChild.textContent;
      drawTimeTable(search_value, ndays, Ttype);

    };

  })
};



// miscellinious

(async function () {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    if (all) {
      select(el, all).forEach(e => e.addEventListener(type, listener))
    } else {
      select(el, all).addEventListener(type, listener)
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Sidebar toggle
   */
  if (select('.toggle-tmb-sidebar-btn')) {
    on('click', '.toggle-tmb-sidebar-btn', function (e) {
      select('body').classList.toggle('toggle-tmb-sidebar')
    })
  }

  /**
   * Right Sidebar toggle
   */
   if (select('.toggle-tmb-right-sidebar-btn')) {
    on('click', '.toggle-tmb-right-sidebar-btn', function (e) {
      select('body').classList.toggle('toggle-tmb-right-sidebar')
    })
  }

  /**
   * Search bar toggle
   */
  if (select('.search-bar-toggle')) {
    on('click', '.search-bar-toggle', function (e) {
      select('.search-bar').classList.toggle('search-bar-show')
    })
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  let selectHeader = select('#tmb-header')
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add('tmb-header-scrolled')
      } else {
        selectHeader.classList.remove('tmb-header-scrolled')
      }
    }
    window.addEventListener('load', headerScrolled)
    onscroll(document, headerScrolled)
  }


  /**
   * Initiate tooltips
   */
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
  })
})();

