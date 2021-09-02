let toggle = document.getElementById("toggle");
let close = document.querySelector(".close");
let content = document.querySelector(".new-content");

    toggle.addEventListener('click', ()=> {
  content.classList.toggle("show-nav");
})
close.addEventListener('click', ()=> {
    content.classList.remove("show-nav");
})