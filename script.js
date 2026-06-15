function song() {
    const audio = document.getElementById('birthdayAudio');
    
    if (audio.paused) {
        audio.play();
        createConfetti();
    } else {
        audio.pause();
        audio.currentTime = 0;
    }
}

function createConfetti() {
    const colors = ['#ff69b4', '#ff1493', '#ffd4e5', '#c4a7ff', '#a7d8ff', '#ffb8d1', '#ffd700', '#ff00ff'];
    const confettiCount = 50;
    
    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDelay = Math.random() * 0.3 + 's';
        confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
        document.body.appendChild(confetti);
        
        // Remove confetti after animation
        setTimeout(() => confetti.remove(), 4000);
    }
}
