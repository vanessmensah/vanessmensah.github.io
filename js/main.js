/* ==========================================
   PROJECT INSIGHT
   VANESS MENSAH PORTFOLIO V2.0

   MAIN INTERACTION ENGINE
========================================== */


/* ==========================
   MOBILE SIDEBAR DRAWER
========================== */


const menuToggle = document.querySelector(".menu-toggle");

const sidebar = document.querySelector(".sidebar");



if(menuToggle && sidebar){


    menuToggle.addEventListener("click", () => {


        sidebar.classList.toggle("open");


    });


}




/* Close sidebar after navigation click */

const sidebarLinks = document.querySelectorAll(".sidebar-nav a");


sidebarLinks.forEach(link => {


    link.addEventListener("click", () => {


        if(window.innerWidth <= 768){

            sidebar.classList.remove("open");

        }


    });


});








/* ==========================
   HIGHLIGHT SLIDER
========================== */


const highlights = document.querySelectorAll(".highlight");

const dots = document.querySelectorAll(".dot");


let currentHighlight = 0;


function showHighlight(index){


    highlights.forEach(item => {

        item.classList.remove("active");

    });



    dots.forEach(dot => {

        dot.classList.remove("active");

    });



    if(highlights[index]){

        highlights[index].classList.add("active");

    }



    if(dots[index]){

        dots[index].classList.add("active");

    }


}





function nextHighlight(){


    currentHighlight++;


    if(currentHighlight >= highlights.length){

        currentHighlight = 0;

    }


    showHighlight(currentHighlight);


}





let highlightTimer;



function startHighlightSlider(){


    highlightTimer = setInterval(
        nextHighlight,
        3500
    );


}





function stopHighlightSlider(){


    clearInterval(highlightTimer);


}




if(highlights.length){


    startHighlightSlider();


}





/* Click dots */


dots.forEach((dot,index)=>{


    dot.addEventListener("click",()=>{


        currentHighlight=index;


        showHighlight(index);



        stopHighlightSlider();


        startHighlightSlider();


    });


});








/* ==========================
   ACTIVE NAVIGATION
========================== */


const sections = document.querySelectorAll(
    "main section"
);



const navLinks = document.querySelectorAll(
    ".sidebar-nav a"
);





const observerOptions = {


    threshold:.5


};






const sectionObserver = new IntersectionObserver(
(entries)=>{


    entries.forEach(entry=>{


        if(entry.isIntersecting){


            const id = entry.target.getAttribute("id");



            navLinks.forEach(link=>{


                link.classList.remove("active");



                if(link.getAttribute("href") === `#${id}`){


                    link.classList.add("active");


                }



            });



        }



    });


},
observerOptions
);





sections.forEach(section=>{


    sectionObserver.observe(section);


});








/* ==========================
   EXTERNAL LINK PREPARATION
========================== */


const externalLinks = document.querySelectorAll(
    "a[target='_blank']"
);



externalLinks.forEach(link=>{


    link.setAttribute(
        "rel",
        "noopener noreferrer"
    );


});