// Sample songs array
const songs = [
    {
        title: "Saajan Ve",
        artist: "Darshan Raval",
        src: "songs/Saajan ve.mp3", // Use relative path
        cover: "cover/saajan ve cover.jpg", // Use relative path
        lyrics: "Lyrics for song 1..."
    },
    {
        title: "Mannat",
        artist: "Darshan Raval",
        src: "songs/Mannat.mp3", // Use relative path
        cover: "cover/Mannat cover.jpg", // Use relative path
        lyrics: "Lyrics for song 2..."
    },
    {
        title: "Jannat Ve",
        artist: "Darshan Raval",
        src: "songs/Jannat ve.mp3", // Use relative path
        cover: "cover/jannat ve cover.jpg", // Use relative path
        lyrics: "Lyrics for song 3..."
    }
    
];

let currentSongIndex = 0;
let isShuffled = false;
let isRepeated = false;

// DOM Elements
const audio = document.getElementById("audio");
const audioSource = document.getElementById("audio-source");
const trackTitle = document.getElementById("track-title");
const trackArtist = document.getElementById("track-artist");
const trackCover = document.getElementById("track-cover");
const trackLyrics = document.getElementById("track-lyrics");
const playButton = document.getElementById("play");
const repeatButton = document.getElementById("repeat");
const shuffleButton = document.getElementById("shuffle");
const shareFacebookButton = document.getElementById("share-facebook");
const shareWhatsappButton = document.getElementById("share-whatsapp");

// Load the current song
function loadSong(song) {
    audioSource.src = song.src;
    trackTitle.innerText = song.title;
    trackArtist.innerText = song.artist;
    trackLyrics.innerText = song.lyrics;
    trackCover.src = song.cover;
    audio.load();
}

// Play the current song
playButton.addEventListener("click", () => {
    if (audio.paused) {
        audio.play();
        playButton.innerHTML= '<i class="fa-solid fa-pause"></i>';
    } else {
        audio.pause();
        playButton.innerHTML = '<i class="fa-solid fa-play"></i>';
    }
});

// Previous song
document.getElementById("prev").addEventListener("click", () => {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(songs[currentSongIndex]);
    audio.play();
});

// Next song
document.getElementById("next").addEventListener("click", () => {
    if (isShuffled) {
        currentSongIndex = Math.floor(Math.random() * songs.length);
    } else {
        currentSongIndex = (currentSongIndex + 1) % songs.length;
    }
    loadSong(songs[currentSongIndex]);
    audio.play();
});

// Toggle repeat
repeatButton.addEventListener("click", () => {
    isRepeated = !isRepeated;
    repeatButton.style.backgroundColor = isRepeated ? "#1ed760" : "rgb(78, 188, 231)";
});

// Toggle shuffle
shuffleButton.addEventListener("click", () => {
    isShuffled = !isShuffled;
    shuffleButton.style.backgroundColor = isShuffled ? "#1ed760" : "rgb(78, 188, 231)";
});

// Social sharing functionality
shareFacebookButton.addEventListener("click", () => {
    const url = `https://www.facebook.com/sharer/sharer.php`
})

// Load the first song when the page is loaded
loadSong(songs[currentSongIndex]);

