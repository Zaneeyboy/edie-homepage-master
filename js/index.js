const toggler=document.getElementById("toggler");
const closer=document.getElementById("toggle-off");
const menu=document.getElementById("toggle-menu");

toggler.addEventListener("click",()=>{
    toggler.style.display="none";
    closer.style.display="inline-block";
    menu.style.display="block"
});

closer.addEventListener("click",()=>{
    toggler.style.display="inline-block";
    closer.style.display="none";
    menu.style.display="none";
});