console.log("hello world");
// let audioElement = new Audio('songs/1.mp3');
let songIndex = 0;
let audioElement = new Audio('song/1.mp3');
let playbutton = document.querySelectorAll('.comeon');
let masterplay = document.querySelector('.masterplay');
let progressbar = document.querySelector('#myProgressBar');
let songItems = Array.from(document.getElementsByClassName('songItem'));
// let masterSongName = document.querySelector('.masterSongName');
let masterSongName = document.querySelector('#masterSongName');
let previous  = document.querySelector('.previous');
let forward  = document.querySelector('.forward');

let songs = [
    { songName: "Diwani Mastani", filePath: "song/1.mp3", coverPath: "covers/1.jpg" },
    { songName: "Be-inteha", filePath: "song/2.mp3", coverPath: "covers/2.jpg" },
    { songName: "Maula Mere Maula", filePath: "song/3.mp3", coverPath: "covers/3.jpg" },
    { songName: "Kaise mujhe tm mil gaye", filePath: "song/4.mp3", coverPath: "covers/4.jpg" },
    { songName: "Tere Naina", filePath: "song/5.mp3", coverPath: "covers/5.jpg" },
    { songName: "Perfect", filePath: "song/6.mp3", coverPath: "covers/6.jpg" },
    { songName: "Emptiness", filePath: "song/7.mp3", coverPath: "covers/7.jpg" },
    { songName: "Tum Se Hi", filePath: "song/8.mp3", coverPath: "covers/8.jpg" },
    { songName: "Untill I Found You", filePath: "song/9.mp3", coverPath: "covers/9.jpg" },
    { songName: "Ek Pyaar Ka Nagma Hai", filePath: "song/10.mp3", coverPath: "covers/10.jpg" },
];

songItems.forEach((element, i) => {
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songnames")[0].innerText = songs[i].songName;
});




masterplay.addEventListener('click', () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
  } else {
    audioElement.pause();
    masterplay.classList.remove('fa-pause-circle');
    masterplay.classList.add('fa-play-circle');
  }
});

progressbar.addEventListener('change', () => {
  audioElement.currentTime = progressbar.value * audioElement.duration / 100;
});

audioElement.addEventListener('timeupdate', () => {
  let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  console.log("progress is ", progress);
  progressbar.value = progress;
});

const makeAllPlays = () => {
  Array.from(document.getElementsByClassName('comeon')).forEach((element) => {
    element.classList.remove('fa-pause-circle');
    element.classList.add('fa-play-circle');
  });
};

Array.from(document.getElementsByClassName('comeon')).forEach((element) => {
  element.addEventListener('click', (e) => {
    makeAllPlays();
    songIndex = parseInt(e.target.id);
    // console.log(songIndex);
    e.target.classList.remove('fa-play-circle');
    e.target.classList.add('fa-pause-circle');
    audioElement.masterSongName = `song/${songIndex+1}.mp3`;
    masterSongName.textContent = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.src = songs[songIndex].filePath; 
    // audioElement = songIndex;
    audioElement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
  });
});

previous.addEventListener('click',()=>{
  if(songIndex<=0)
  {
    songIndex  = 0;
  }
  else{
    songIndex = songIndex -1;
  }
  audioElement.src = `song/${songIndex+1}.mp3`;
  masterSongName.textContent = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterplay.classList.remove('fa-play-circle');
  masterplay.classList.add('fa-pause-circle');
})


forward.addEventListener('click',()=>{
  if(songIndex>=9)
  {
    songIndex  = 0;
  }
  else{
    songIndex = songIndex +1;
  }
  audioElement.src = `song/${songIndex+1}.mp3`;
  masterSongName.textContent = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  makeAllPlays();
  
  masterplay.classList.remove('fa-play-circle');
  masterplay.classList.add('fa-pause-circle');
})

