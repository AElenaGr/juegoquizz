const audioControl = document.getElementById('audio-control');
const audioPlayer = document.querySelector('.audio-player');

audioControl.addEventListener('click', () => {
if (audioPlayer.paused) {
    audioPlayer.play();
} else {
    audioPlayer.pause();
}
});