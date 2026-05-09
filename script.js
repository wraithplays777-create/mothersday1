const openBtn = document.getElementById("openBtn");
const openingScreen = document.getElementById("openingScreen");
const mainSite = document.getElementById("mainSite");

const navButtons = document.querySelectorAll(".nav-btn");
const pages = document.querySelectorAll(".page");

const music = document.getElementById("bgMusic");
const musicToggle = document.getElementById("musicToggle");

const balloons = document.querySelectorAll(".balloon");
const memoryPopup = document.getElementById("memoryPopup");

const memoryImage = document.getElementById("memoryImage");
const memoryCaption = document.getElementById("memoryCaption");

const closePopup = document.getElementById("closePopup");

let musicPlaying = false;

/* OPEN SITE */

openBtn.addEventListener("click", () => {

  openingScreen.style.opacity = "0";
  openingScreen.style.transition = "0.8s";

  setTimeout(() => {
    openingScreen.style.display = "none";

    mainSite.classList.remove("hidden");

    startMusic();

  }, 700);

});

/* NAVIGATION */

navButtons.forEach(button => {

  button.addEventListener("click", () => {

    navButtons.forEach(btn => {
      btn.classList.remove("active");
    });

    button.classList.add("active");

    const target = button.dataset.page;

    pages.forEach(page => {
      page.classList.remove("active-page");
    });

    document.getElementById(target).classList.add("active-page");

  });

});

/* MUSIC */

function startMusic() {

  music.volume = 0;

  music.play();

  musicPlaying = true;

  let fade = setInterval(() => {

    if (music.volume < 0.9) {
      music.volume += 0.05;
    } else {
      clearInterval(fade);
    }

  }, 200);

}

musicToggle.addEventListener("click", () => {

  if (musicPlaying) {

    music.pause();

    musicToggle.innerHTML = "▶";

    musicPlaying = false;

  } else {

    music.play();

    musicToggle.innerHTML = "⏸";

    musicPlaying = true;

  }

});

/* MEMORIES */

const memories = {

  1: {
    image: "memory1.jpeg",
    caption: "You made every difficult moment feel safe 🌸"
  },

  2: {
    image: "memory2.jpeg",
    caption: "No matter how much I grow, I’ll always need you ❤️"
  },

  3: {
    image: "memory3.jpeg",
    caption: "My happiest memories will always have you in them ✨"
  },

  4: {
    image: "memory4.jpeg",
    caption: "Thank you for loving me in ways words never can 🌷"
  }

};

/* BALLOON CLICK */

balloons.forEach(balloon => {

  balloon.addEventListener("click", () => {

    balloon.style.transform = "scale(0)";
    balloon.style.opacity = "0";

    const id = balloon.dataset.memory;

    memoryImage.src = memories[id].image;

    memoryCaption.innerHTML = memories[id].caption;

    setTimeout(() => {

      memoryPopup.classList.remove("hidden");

    }, 300);

  });

});

/* CLOSE POPUP */

closePopup.addEventListener("click", () => {

  memoryPopup.classList.add("hidden");

});
