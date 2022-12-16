// adding section 4 and its attributes and content
const sec1=document.querySelector('main');
const newSec=document.createElement('section');
newSec.setAttribute('id', 'section4', 'data-nav', 'section 4');
sec1.appendChild(newSec);



// adding heading div tage to section 4 and its content
const sec3=document.querySelector('#section4');
const newSec3=document.createElement('div');
sec3.appendChild(newSec3);

// adding heading h2 to section 4 and its content
const sec2=document.querySelector('#section4 div');
const newSec2=document.createElement('h2');
newSec2.textContent ='Section 4';
sec2.appendChild(newSec2);

// adding class landing__container  section 4 
const sec5=document.querySelector('#section4 div');
sec5.setAttribute('class', 'landing__container');



// adding heading P tage to section 4 and its content
const sec20=document.querySelector('#section4 div');
const newSec20=document.createElement('p');
newSec20.textContent ='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.';
sec20.appendChild(newSec20);



// storing  sections' ids in data structure as array for sections
const sections =["section1","section2","section3","section4"];


// creating unordered list for menue using iteration of the data structure array of sections 
const ull=document.querySelector('#navbar__list');

for(let i=0 ;i<=(sections.length-1) ;i++){
const newEl=document.createElement('li');
//newEl.textContent = sections[i];
//newEl.textContent = 'section'+i;
newEl.setAttribute('id', 'sec'+i);
newEl.setAttribute( 'class', 'section'+(i+1));
ull.appendChild(newEl);

}


//creating navigation on menue to different sections by creating achores inside list elements respectivly
for(let j=0 ;j<=(sections.length-1) ;j++){


const us = document.getElementById("sec"+j);
const un=document.createElement('a');
un.textContent = '\xa0\xa0\xa0\xa0\xa0\xa0'+"section"+(j+1);
un.setAttribute('href', '#section'+(j+1));
us.appendChild(un);
}





// highlighting navigation bar items when scrolling from section to section 
// The following is open source code and it link Reference : https://codepen.io/Web_Cifar/pen/LYRBbVE

const sections1 = document.querySelectorAll("section");
const navLi = document.querySelectorAll("nav.navbar__menu ul li");
window.addEventListener("scroll", () => {
  let current = "";
  sections1.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
    section.classList.remove("your-active-class");
    if (section.classList.contains(current)) {
    section.classList.add("your-active-class");
}
  });

  navLi.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  }); 
});


/*
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
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
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






/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


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
