// =================================
// VANESS MENSAH PORTFOLIO ENGINE
// =================================



// Scroll reveal animation

const sections =
document.querySelectorAll("section");


const observer =
new IntersectionObserver(
(entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){

entry.target.style.opacity=1;

entry.target.style.transform=
"translateY(0)";

}


});


},
{
threshold:.15
});



sections.forEach(section=>{


section.style.opacity=0;

section.style.transform=
"translateY(60px)";


section.style.transition=
"1s ease";


observer.observe(section);


});





// Floating mouse effect


document.addEventListener(
"mousemove",
(e)=>{


document.body.style.backgroundPosition =

`${e.clientX/50}px ${e.clientY/50}px`;



});





// Project automatic movement


const slider =
document.querySelector(".slider");


let direction=1;



setInterval(()=>{


if(slider){


slider.scrollLeft += direction;


if(
slider.scrollLeft + slider.clientWidth
>= slider.scrollWidth
)

direction=-1;



if(slider.scrollLeft<=0)

direction=1;


}


},30);
