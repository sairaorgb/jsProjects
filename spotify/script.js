let currentSongIndex = 0;
let audioelement = new Audio("./songs/1.mp3");
let masterplay = document.getElementById("masterplay");
let myprogressbar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let songitems = Array.from(document.getElementsByClassName("songItem"));

let songs = [
  {
    songname: "andkdl ",
    filepath: "./songs/1.mp3",
    coverpath: "./covers/1.jpg",
  },
  {
    songname: "bndkdl ",
    filepath: "./songs/2.mp3",
    coverpath: "./covers/2.jpg",
  },
  {
    songname: "cndkdl ",
    filepath: "./songs/3.mp3",
    coverpath: "./covers/3.jpg",
  },
  {
    songname: "andkdl ",
    filepath: "./songs/4.mp3",
    coverpath: "./covers/4.jpg",
  },
  {
    songname: "andkdl ",
    filepath: "./songs/5.mp3",
    coverpath: "./covers/5.jpg",
  },
  {
    songname: "andkdl ",
    filepath: "./songs/6.mp3",
    coverpath: "./covers/6.jpg",
  },
  {
    songname: "andkdl ",
    filepath: "./songs/7.mp3",
    coverpath: "./covers/7.jpg",
  },
  {
    songname: "andkdl ",
    filepath: "./songs/8.mp3",
    coverpath: "./covers/8.jpg",
  },
  {
    songname: "andkdl ",
    filepath: "./songs/9.mp3",
    coverpath: "./covers/9.jpg",
  },
];

songitems.forEach((element, i) => {
  element.getElementsByTagName("img")[0].src = songs[i].coverpath;
});

masterplay.addEventListener("click", () => {
  if (audioelement.paused || audioelement.currentTime <= 0) {
    audioelement.play();
    masterplay.classList.remove("fa-play-circle");
    masterplay.classList.add("fa-pause-circle");
    gif.style.opacity = 1;
  } else {
    audioelement.pause();
    masterplay.classList.remove("fa-pause-circle");
    masterplay.classList.add("fa-play-circle");
    gif.style.opacity = 0;
  }
});

audioelement.addEventListener("timeupdate", () => {
  progress = parseInt((audioelement.currentTime / audioelement.duration) * 100);
  myprogressbar.value = progress;
});

myprogressbar.addEventListener("change", () => {
  audioelement.currentTime =
    (myprogressbar.value * audioelement.duration) / 100;
});

Array.from(document.getElementsByClassName("songItemPlay")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      e.target.classList.remove("fa-play-circe");
      e.target.classList.add("fa-pause-circe");
    });
  }
);
