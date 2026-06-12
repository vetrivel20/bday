function song() {
    const audio = document.getElementById('birthdayAudio');
    
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
        audio.currentTime = 0;
    }
}
