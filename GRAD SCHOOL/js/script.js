const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');
const check1 = document.querySelector('#check1');
const check2 = document.querySelector('#check2');
const check3 = document.querySelector('#check3');
const page1 = document.querySelector('#page1');
const page2 = document.querySelector('#page2');
const page3 = document.querySelector('#page3');


var tracker = "btn1";


btn1.addEventListener('click', e => {
    btn1.classList.remove('selector');
    btn2.classList.remove('selector-checked');
    btn3.classList.remove('selector-checked');

    btn1.classList.add('selector-checked');
    btn2.classList.add('selector');
    btn3.classList.add('selector');

    check1.classList.remove('checkbox');
    check2.classList.remove('checked');
    check3.classList.remove('checked');
        
    check1.classList.add('checked');
    check2.classList.add('checkbox');
    check3.classList.add('checkbox');

    page1.classList.remove('display-none');
    page2.classList.add('display-none');
    page3.classList.add('display-none');
})

btn2.addEventListener('click', e => {
    btn2.classList.remove('selector');
    btn1.classList.remove('selector-checked');
    btn3.classList.remove('selector-checked');

    btn2.classList.add('selector-checked');
    btn1.classList.add('selector');
    btn3.classList.add('selector');

    check2.classList.remove('checkbox');
    check1.classList.remove('checked');
    check3.classList.remove('checked');
        
    check2.classList.add('checked');
    check1.classList.add('checkbox');
    check3.classList.add('checkbox');

    page2.classList.remove('display-none');
    page1.classList.add('display-none');
    page3.classList.add('display-none');
})

btn3.addEventListener('click', e => {
    btn3.classList.remove('selector');
    btn1.classList.remove('selector-checked');
    btn2.classList.remove('selector-checked');

    btn3.classList.add('selector-checked');
    btn1.classList.add('selector');
    btn2.classList.add('selector');

    check3.classList.remove('checkbox');
    check1.classList.remove('checked');
    check2.classList.remove('checked');
        
    check3.classList.add('checked');
    check1.classList.add('checkbox');
    check2.classList.add('checkbox');

    page3.classList.remove('display-none');
    page2.classList.add('display-none');
    page1.classList.add('display-none');
})


//countdown

var countDownDate = new Date("Jan 30, 2023 21:26:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output
  document.getElementById("days").innerHTML = days + "<p>DAYS</p>";
  document.getElementById("hours").innerHTML = hours + "<p>HOURS</p>";
  document.getElementById("minutes").innerHTML = minutes + "<p>MINUTES</p>";
  document.getElementById("seconds").innerHTML = seconds + "<p>SECONDS</p>";
}, 1000);

//-------------------------------------

const container = document.querySelector(".container");
const cards = document.querySelector(".cards");

/* keep track of user's mouse down and up */
let isPressedDown = false;
/* x horizontal space of cursor from inner container */
let cursorXSpace;

container.addEventListener("mousedown", (e) => {
  isPressedDown = true;
  cursorXSpace = e.offsetX - cards.offsetLeft;
  container.style.cursor = "grabbing";
});

container.addEventListener("mouseup", () => {
  container.style.cursor = "grab";
});

window.addEventListener("mouseup", () => {
  isPressedDown = false;
});

container.addEventListener("mousemove", (e) => {
  if (!isPressedDown) return;
  e.preventDefault();
  cards.style.left = `${e.offsetX - cursorXSpace}px`;
  boundCards();
});

function boundCards() {
  const container_rect = container.getBoundingClientRect();
  const cards_rect = cards.getBoundingClientRect();

  if (parseInt(cards.style.left) > 0) {
    cards.style.left = 0;
  } else if (cards_rect.right < container_rect.right) {
    cards.style.left = `-${cards_rect.width - container_rect.width}px`;
  }
}