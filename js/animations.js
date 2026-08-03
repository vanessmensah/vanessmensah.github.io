/* ==========================================
   PROJECT INSIGHT
   VANESS MENSAH PORTFOLIO V2.0

   SCROLL ANIMATION ENGINE
========================================== */





/* ==========================
   SCROLL REVEAL
========================== */


const revealElements = document.querySelectorAll(
    ".reveal"
);





const revealObserver = new IntersectionObserver(
(entries)=>{


    entries.forEach(entry=>{


        if(entry.isIntersecting){


            entry.target.classList.add(
                "visible"
            );


            revealObserver.unobserve(
                entry.target
            );


        }


    });



},
{

    threshold:.15

});







revealElements.forEach(element=>{


    revealObserver.observe(element);


});







/* ==========================
   STAGGER ANIMATIONS
========================== */


const staggerElements = document.querySelectorAll(
    ".stagger"
);



const staggerObserver = new IntersectionObserver(
(entries)=>{


    entries.forEach(entry=>{


        if(entry.isIntersecting){


            entry.target.classList.add(
                "visible"
            );


            staggerObserver.unobserve(
                entry.target
            );


        }


    });


},
{

    threshold:.15

});





staggerElements.forEach(element=>{


    staggerObserver.observe(element);


});








/* ==========================
   IMAGE LOADING ENHANCEMENT
========================== */


const images = document.querySelectorAll(
    "img"
);



images.forEach(image=>{


    image.addEventListener(
        "load",
        ()=>{

            image.classList.add(
                "loaded"
            );

        }

    );


});