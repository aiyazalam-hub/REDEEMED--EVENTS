// --NAVBAR
const links = document.querySelectorAll(".nav-right ul a");
const CurrentUrl = window.location.href;

links.forEach((link) => {
  if (CurrentUrl.includes(link.getAttribute("href"))) {
    link.classList.add("active");
  }
});

// gets element from DOM
const openbtn = document.querySelector(".toggler");
const closebtn = document.querySelector(".clsbtn");
const sidebar = document.querySelector(".mobview");
const body = document.querySelector("body");

// Function for open sidebar
function opensidebar() {
  sidebar.classList.add("open-active");
  body.classList.add("menu-open");
}

// Function for close sidebar
function closesidebar() {
  sidebar.classList.remove("open-active");
  body.classList.remove("menu-open");
}

// Add event listener
openbtn.addEventListener("click", opensidebar);
closebtn.addEventListener("click", closesidebar);
// NAVBAR-END--->

// count-down
// COUNT-DOWN
// FAST COUNTDOWN (for demo/testing purposes)
let totalSeconds = 2 * 24 * 3600 + 23 * 3600 + 35 * 60 + 52;

function updateTimer() {
  if (totalSeconds <= 0) return;

  const days = Math.floor(totalSeconds / (24 * 3600));
  const hours = Math.floor((totalSeconds % (24 * 3600)) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  document.getElementById("days").textContent = String(days).padStart(2, "0");
  document.getElementById("hours").textContent = String(hours).padStart(2, "0");
  document.getElementById("minutes").textContent = String(minutes).padStart(
    2,
    "0"
  );
  document.getElementById("seconds").textContent = String(seconds).padStart(
    2,
    "0"
  );

  totalSeconds--;

  // 100ms interval for FAST countdown; use 1000 for real-time
  setTimeout(updateTimer, 100);
}

updateTimer();

// count end

// splide1
var splide = new Splide("#splide1", {
  type: "loop",
  perPage: 3,
  autoplay: true,
  breakpoints: {
    1100: {
      perPage: 2,
      gap: ".7rem",
    },
    769: {
      perPage: 1,
      gap: ".7rem",
    },
  },
});

splide.mount();
// splide2
var splide = new Splide("#splide2", {
  type: "loop",
  perPage: 3,
  focus: "center",
  breakpoints: {
    1100: {
      perPage: 2,
      gap: ".7rem",
    },
    769: {
      perPage: 1,
      gap: ".7rem",
    },
  },
});

splide.mount();
// splide4
var splide = new Splide("#splide3", {
  type: "loop",
  drag: "free",
  snap: true,
  perPage: 4,
  breakpoints: {
    1100: {
      perPage: 3,
      gap: ".7rem",
    },
    800: {
      perPage: 2,
      gap: ".7rem",
    },
    600: {
      perPage: 1,
      gap: ".7rem",
    },
  },
});

splide.mount();

// splide4
var splide = new Splide("#splide4", {
  perPage: 3,
  rewind: true,
  breakpoints: {
    998: {
      perPage: 2,
      gap: ".7rem",
    },
    700: {
      perPage: 1,
      gap: ".7rem",
    },
  },
});

splide.mount();

var addButton = document.querySelector(".js-add-button");
var removeButton = document.querySelector(".js-remove-button");

addButton.addEventListener("click", function () {
  splide.add('<li class="splide__slide">' + (splide.length + 1) + "</li>");
});

removeButton.addEventListener("click", function () {
  splide.remove(splide.length - 1);
});
