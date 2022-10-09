let currentMusic = 0;
const audio = document.getElementById('audio');
const seekBar = document.querySelector('#progress');
const playerArtist = document.querySelector('.player__artist');
const playerSong = document.querySelector('.player__song');
const currentTime = document.querySelector('.current-time');
const musicDuration = document.querySelector('.song-duration');
const playPause = document.getElementById("play");
const nextSong = document.getElementById("next-song");
const prevSong = document.getElementById("prev-song");
const coverSong = document.querySelector('.player__img'); 

playPause.addEventListener("click", () => {
    if(audio.paused || audio.ended){
        playPause.querySelector(".play-btn").classList.toggle("hide");
        playPause.querySelector(".pause-btn").classList.toggle("hide");
        audio.play();
    }else{
        audio.pause();
        playPause.querySelector(".play-btn").classList.toggle("hide");
        playPause.querySelector(".pause-btn").classList.toggle("hide");

    }
})

const songList = [
    {
        title: "Bones",
        file: "audio/bones-official-music-video.mp3",
        author: "Imagine Dragons",
        cover:"assets/Bones.jpg",
    },
    {
        title: "My life",
        file: "audio/my-life-official-lyric-video.mp3",
        author: "Imagine Dragons",
        cover:"assets/MyLife.jpg",
    },
    {
        title: "Sharks",
        file: "audio/sharks-official-music-video-sub-espanol-lyrics.mp3",
        author: "Imagine Dragons",
        cover:"assets/Sharks.jpg"
    },
    {
        title: "Shots",
        file: "audio/shots-official-music-video.mp3",
        author: "Imagine Dragons",
        cover:"assets/Shots.jpg"
        
    },

]

const setMusic = (i) => {
    seekBar.value = 0;
    let song = songList[i];
    currentMusic = i;
    audio.src = song.file;

    playerArtist.innerHTML = song.author;
    playerSong.innerHTML = song.title;
    coverSong.src = song.cover;

    currentTime.innerHTML = '00:00';
    setTimeout(() => {
        seekBar.max = audio.duration;
        musicDuration.innerHTML = formatTime(audio.duration);
    }, 300)
}

setMusic(2);

//Formating time in min and seconds format 

const formatTime = (time) =>{
    let min = Math.floor(time / 60)
    if(min < 10){
        min = `0${min}`
    }

    let sec = Math.floor(time % 60)
    if(sec < 10){
        sec = `0${sec}`;
    }
    return `${min}:${sec}`;
}

//seek bar

setInterval(() =>{
    seekBar.value = audio.currentTime;
    currentTime.innerHTML = formatTime(audio.currentTime)
    if(Math.floor(audio.currentTime)== Math.floor(seekBar.max)){
        nextSong.click();
    }
}, 500)

seekBar.addEventListener('change', () =>{
    audio.currentTime = seekBar.value;
})

// fordward and backward functions
nextSong.addEventListener('click', () =>{
    if(currentMusic >= songList.lenght - 1){
        currentMusic = 0;
    }else{
        currentMusic++;
    }
    setMusic(currentMusic);
    playPause.click()

})

prevSong.addEventListener('click', () =>{
    if(currentMusic <= 0){
        currentMusic = songList.length - 1;
    }else{
        currentMusic--;
    }
    setMusic(currentMusic);
    playPause.click()

})
/*const audio = document.getElementById('audio');
const playPause = document.getElementById("play");
const nextSong = document.getElementById("next-song");
const prevSong = document.getElementById("prev-song");

//Songs data
const songList = [
    {
        title: "Bones",
        file: "audio/bones-official-music-video.mp3",
        author: "Imagine Dragons"
    },
    {
        title: "My life",
        file: "audio/my-life-official-lyric-video.mp3",
        author: "Imagine Dragons"
    },
    {
        title: "Sharks",
        file: "audio/sharks-official-music-video-sub-espanol-lyrics.mp3",
        author: "Imagine Dragons"
    },
    {
        title: "Shots",
        file: "audio/shots-official-music-video.mp3",
        author: "Imagine Dragons"
    },

]

let source = document.getElementById('source-song');
let sourceSong = source.setAttribute('src', songList[1].file);



playPause.addEventListener("click", () => {
    if(audio.paused || audio.ended){
        playPause.querySelector(".play-btn").classList.toggle("hide");
        playPause.querySelector(".pause-btn").classList.toggle("hide");
        audio.play();
    }else{
        audio.pause();
        playPause.querySelector(".play-btn").classList.toggle("hide");
        playPause.querySelector(".pause-btn").classList.toggle("hide");

    }
})

function changedSong(){
    let source = document.getElementById('source-song');
    source.removeAttribute('src');
    let newSourceSong = source.setAttribute('src', songList[2].file);
    
}

nextSong.addEventListener("click", () => {
    changedSong();
})*/