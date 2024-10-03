document.getElementById('seeMoreBtn').addEventListener('click', function() {
  const song = document.getElementById('song');
  song.play().catch(function(error) {
    console.log("Autoplay may be blocked by the browser:", error);
  });

  document.getElementById('imagePopup').style.display = 'flex';

  launchFireworks();
  generateConfetti(50);
});

document.querySelector('.close-btn').addEventListener('click', function() {
  document.getElementById('imagePopup').style.display = 'none';

  clearConfetti();

  const song = document.getElementById('song');
  song.pause();
  song.currentTime = 0;
});

function generateConfetti(count) {
  const confettiContainer = document.getElementById('confetti');
  confettiContainer.innerHTML = '';

  for (let i = 0; i < count; i++) {
    const confettiPiece = document.createElement('div');
    confettiPiece.classList.add('confetti-piece');
    confettiPiece.style.left = Math.random() * 100 + 'vw';
    confettiPiece.style.animationDuration = Math.random() * 3 + 2 + 's';
    confettiPiece.style.transform = `rotate(${Math.random() * 360}deg)`;
    confettiContainer.appendChild(confettiPiece);
  }
}

function clearConfetti() {
  const confettiContainer = document.getElementById('confetti');
  confettiContainer.innerHTML = '';
}

function launchFireworks() {
  const container = document.getElementById('fireworks-container');
  
  for (let i = 0; i < 10; i++) {
    const firework = document.createElement('div');
    firework.classList.add('firework');
    firework.style.left = Math.random() * 100 + 'vw';
    firework.style.top = Math.random() * 100 + 'vh';
    container.appendChild(firework);
    setTimeout(() => {
      container.removeChild(firework);
    }, 1000);
  }
}
