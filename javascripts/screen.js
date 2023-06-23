$(document).ready(function() {
// MovinBG
  let mainscreen = document.querySelector(".mainScr");
  let moving = document.querySelector(".movement");
  mainscreen.addEventListener('mousemove', (e) => {
    let x = e.clientX/ 2 - mainscreen.getBoundingClientRect().left;
    let y = e.clientY/ 2 - mainscreen.getBoundingClientRect().top;
    moving.style.transform = `translate(-${x}px, -${y*1.5}px)`;
  });
});
