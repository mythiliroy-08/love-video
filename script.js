let pages=document.querySelectorAll(".page");
let current=0;

function next(){

pages[current].classList.remove("active");

current++;

if(current<pages.length){
pages[current].classList.add("active");
}

}
