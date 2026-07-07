function menuBtn() {
    const navBtn = document.querySelector('.nav-links');
    navBtn.classList.toggle('active');
}

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.nav-links').classList.remove('active')
    });
});

//-- BACKGROUND MUSIC DIRECTION 
// ELEMENTS SELECTION 
const audio = document.getElementById('storyAudio');
const btn1 = document.getElementById('audioControlBtn');
const btn2 = document.getElementById('audioControlBtn2');

//-- I SET VOLUME PERMANENTLY TO 0.4 / 40%
audio.volume = 0.4;

//-- TOGGLE FUNCTION 
function toggleAudioPlayback() {
  if (audio.paused) {
    audio.play();
    // Update both buttons
    updateButtons(true);
  } else {
    audio.pause();
    updateButtons(false);
  }
}

//-- THIS UPDATE ICON + TEXT ON BOTH BUTTONS TOGETHER 
function updateButtons(isPlaying) {
  if (isPlaying) {
    btn1.innerHTML = `<i class="fa-solid fa-pause"></i> PAUSE STORY`;
    btn2.innerHTML = `<i class="fa-solid fa-pause"></i> PAUSE STORY`;
  } else {
    btn1.innerHTML = `<i class="fa-solid fa-play"></i> PLAY STORY`;
    btn2.innerHTML = `<i class="fa-solid fa-play"></i> PLAY STORY`;
  }
}

// Attach click events
btn1.addEventListener('click', function(e) {
  e.preventDefault();
  toggleAudioPlayback();
});

btn2.addEventListener('click', function(e) {
  e.preventDefault();
  toggleAudioPlayback();
});
