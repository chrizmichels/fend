/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

//Select Page Sections
function getHtmlElements(element) {
  return document.querySelectorAll(element);
}

//Removes Active Class form Navigation
function removeActiveClass(pageSections) {
  pageSections.forEach(el => {
    if (el.getAttribute("class") === "your-active-class") {
      el.classList.remove("your-active-class");
    }
  });
}

//Clear Navigation from active Styling
function resetNavStyling(navBar) {
  let items = navBar.getElementsByTagName("li");
  for (item of items) {
    let clsList = item.classList;
    let clsListChild = item.firstChild.classList;
    clsList.remove("menu__click");
    clsListChild.remove("menu__click");
  }
}

//Change Navigation Styem on Event Trigger
function changeNavBarStyle(navBar, navSectionName) {
  resetNavStyling(navBar);
  let items = navBar.getElementsByTagName("li");
  console.log("CHNG NAV Style of: " + items, navSectionName);
  for (item of items) {
    if (item.getAttribute("data-active") === navSectionName) {
      console.log(item, item.firstChild.classList);

      let clsList = item.classList;
      let clsListChild = item.firstChild.classList;
      clsList.add("menu__click");
      clsListChild.add("menu__click");
    }
  }
}

//Togggels Navigation Active
function toggleNavigation(pageSections, navSectionName) {
  //Remove any active Section
  removeActiveClass(pageSections);
  //Add Active section to Navigation clicked
  pageSections.forEach(el => {
    if (el.getAttribute("data-nav") === navSectionName) {
      // console.log(el.getAttribute("data-nav"));
      el.classList.add("your-active-class");
    }
  });
}

//Adjust Navigation while scrolling
function navigateToScrollPos(NavBar) {
  let secPos = [];

  //Scroll Event Listener
  document.addEventListener("scroll", () => {
    secPos = [];
    pageSections.forEach(el => {
      secPos.push(el.getBoundingClientRect().top);
    });

    // console.log(secPos);
    let pos = secPos.findIndex(el => el > 0);
    console.log(pos, navBar, `Section ${pos}`);

    if (pos < 0) {
      //NEEDS to be fixed!!
      changeNavBarStyle(navBar, `Section ${4}`);
    } else {
      changeNavBarStyle(navBar, `Section ${pos}`);
    }
  });
}

//Create NavBar Elements from Sections in html
//Including Event Listener on Navigation Items (try to refactor to 1 Listener)
function createNavbarElements(pageSections, navBar) {
  //Loop Over Page Sectios
  pageSections.forEach((el, indx) => {
    //Create List Item for Navigation
    let liItem = document.createElement("li");
    liItem.classList.add("navbar__menu");
    liItem.setAttribute("data-active", `Section ${indx + 1}`);
    liItem.innerHTML = `<a class="menu__link" href="#section${indx + 1}">${
      el.dataset.nav
    }</a>`;

    //Apend Navidation to NavBar Element
    navBar.appendChild(liItem);
    //Add Event Listener to List Items
    liItem.addEventListener("click", function(event) {
      toggleNavigation(pageSections, event.toElement.innerHTML);
      changeNavBarStyle(navBar, event.toElement.innerHTML);
    });
  });
}

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

//Create Navbar Element

//Get Section Element
const pageSections = getHtmlElements("section");

//Select Position to Add Navigation
const navBar = document.querySelector("#navbar__list");

//Create Navigation and append to DOM
createNavbarElements(pageSections, navBar);

//Activate Navigate to Scroll functionality
navigateToScrollPos(navBar);

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active
