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
const titles = [];
const anchors= [];
const sectionText = `  <section id="section4" data-nav="Section 4">
<div class="landing__container">
  <h2>Section 4</h2>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.</p>

  <p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.</p>
</div>
</section>`;
const navBar = document.querySelector('#navbar__list'); //get empty ul "#navbar__list"

/**
 * End Global Variables
 * 
 * Adding Fourth HTML Section
 *
*/

//adding last section

const lastSection = document.getElementById('section3');
lastSection.insertAdjacentHTML("afterend", sectionText);

/**
 * Start Helper Functions
 * 
*/

function getInfo(){
    //given an array of sections on the page, get all their titles for use in navbar
    const sec_array = document.querySelectorAll('section');
    sec_array.forEach(function(s){
        titles.push(s.getAttribute('data-nav'));
        anchors.push(s.getAttribute('id'));
    });
}



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function fillNavBar(){
    getInfo();//saves to global variables
    for (let i=0; i <titles.length; i++){
        const item = document.createElement('li');
        item.textContent = titles[i];
        //item.innerHTML = "<a href= #" +anchors[i] + ">" + titles[i] + "</a>";
        navBar.appendChild(item);
        item.classList.add('navbar__menu', 'menu__link')
        item.setAttribute('id','link_'+anchors[i]);
    }    
}



// Add class 'active' to section when near top of viewport
function activateViewed(){//testing hovering and menulinks
    //checks all body children to see whats in viewport
    mainSection = document.querySelector('main'); //<main> has landing page h1 and all sections
    checklist = mainSection.children; //get the <header> and <section>s
    navLinks = document.querySelector('#navbar__list');//get the list w/ data-nav titles to activate in loop //0,1,2,3
    len = checklist.length;
    //loop through sections to see if active AND HIGHLIGHT ACTIVE SECTION ON NAVBAR!
    for (let i = 1; i <len; i++){//start at 1 to ignore header //1,2,3,4
        let vpInfo = checklist[i].getBoundingClientRect(); //vpInfo contains: domrect obj w/ props: l/r/top/bottom/x/y/width/height
        if (vpInfo.top <= 190 && vpInfo.bottom >= 190){
            checklist[i].classList.add('your-active-class'); //make the section active
            navLinks.children[i-1].classList.add('menu__link__active');//make the navbar link active;
        } else {
            checklist[i].classList.remove('your-active-class'); //make sure all sections checked but not in view are not active
            navLinks.children[i-1].classList.remove('menu__link__active');

        }
    }
}

// Scroll to anchor ID using scrollTO event

navBar.addEventListener('click', function scrollToSection(e){
    let sectionName = e.target.getAttribute('id').slice(5); //get rid of list id prefix (link_xxx)
    let secInfo =  document.querySelector('#'+sectionName).getBoundingClientRect();
    window.scrollTo({
        top: secInfo.top + window.pageYOffset-180,
        behavior: 'smooth'});
    
});


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
fillNavBar();

// Scroll to section on link click
//edit to make function indep/not inline???
//navBar.addEventListener('click', scrollToSection(e)); ?????

// Set sections as active
document.addEventListener('scroll', activateViewed);