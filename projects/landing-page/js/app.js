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

/* function getNavItems(ndList) {
  const psecPosition = [];
  ndList.forEach((el, indx) => {
    psecPosition.push(el.getAttribute("data-nav"));
  });
  return psecPosition;
} */

function removeActiveClass(pageSections) {
  pageSections.forEach(el => {
    if (el.getAttribute("class") === "your-active-class") {
      el.classList.remove("your-active-class");
    }
  });
}

function resetNavStyling(Navbar) {
  let items = navBar.getElementsByTagName("li");
  for (item of items) {
    let clsList = item.classList;
    let clsListChild = item.firstChild.classList;
    clsList.remove("menu__click");
    clsListChild.remove("menu__click");
  }
}

function changeNavBarStyle(navBar, navSectionName) {
  resetNavStyling(navBar);
  let items = navBar.getElementsByTagName("li");
  // console.log(items);
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

function navigateToScrollPos() {
  let secPos = [];

  //Scroll Event Listener
  document.addEventListener("scroll", () => {
    secPos = [];
    pageSections.forEach(el => {
      secPos.push(el.getBoundingClientRect().top);
    });

    // console.log(secPos);
    let pos = secPos.findIndex(el => el > 0);
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
/* 
function createNavbarElements(navItemsArr, navBar) {
  //Loop over NavBar Elements
  navItemArr.forEach((el, indx) => {
    //Create List Item for Navigation
    let liItem = document.createElement("li");

    // liItem.setAttribute("class", "navbar__menu");
    liItem.classList.add("navbar__menu");
    // liItem.classList.add("data-active", `section${indx + 1}`);
    liItem.setAttribute("data-active", `section${indx + 1}`);
    liItem.innerHTML = `<a class="menu__link" href="#section${indx +
      1}">${el}</a>`;
    liItem.addEventListener("click", function(event) {
      //Loop through page sections
      pageSections.forEach((el, indx) => {
        //check if Page Secion matches Navigation
        if (liItem.getAttribute("data-active") === el.getAttribute("id")) {
          // liItem.classList.add("menu__click ");
          let clsList = liItem.classList;
          // clsList.remove("navbar__menu");
          clsList.add("menu__click");
          // liItem.textContent = clsList;

          console.log(clsList, liItem);

          //Now Toggle the Active Class
          if (el.getAttribute("class") !== "your-active-class") {
            //Remove active class
            pageSections.forEach(el => {
              if (el.getAttribute("class") === "your-active-class") {
                el.classList.remove("your-active-class");
              }
            });
            //Add Active class
            el.classList.add("your-active-class");

            // el.classList.add("your-active-class");
          }
        }
      });
    });
    navBar.appendChild(liItem);
  });
}
 */
/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

//Add Event Listener to NavBar
// navBar.addEventListener("click", function(event) {
//   console.log(event);
//   //event.srcElement.setAttribute("class", "your-active-class");
// });

//Create Navbar Element

// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active

// build the nav Element
//Get Section Element
const pageSections = getHtmlElements("section");

//Extract Array with Navigation Items
// const navItemArr = getNavItems(pageSections);

//Select Position to Add Navigation
const navBar = document.querySelector("#navbar__list");

//Create Navigation and append to DOM
// createNavbarElements(navItemArr, navBar);
createNavbarElements(pageSections, navBar);
