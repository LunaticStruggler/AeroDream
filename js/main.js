// Set current year in footer
document.getElementById('current-year').textContent = new Date().getFullYear();

// Initialize subtle glitch effect on title
const title = document.querySelector('.title-glitch');
let glitchActive = false;

// Only activate glitch on hover for subtle effect
title.addEventListener('mouseenter', () => {
    if (!glitchActive) {
        title.style.animation = 'noise-anim 0.3s infinite linear alternate-reverse';
        glitchActive = true;
        
        // Randomly reset to make it subtle
        setTimeout(() => {
            title.style.animation = 'none';
            glitchActive = false;
        }, 300);
    }
});

// Add very subtle background animation
document.body.style.backgroundSize = '200% 200%';
document.body.style.animation = 'gradientShift 30s ease infinite';

// Add to your CSS:
// @keyframes gradientShift {
//     0% { background-position: 0% 50%; }
//     50% { background-position: 100% 50%; }
//     100% { background-position: 0% 50%; }
// }

// Ensure background music starts after user interaction
document.addEventListener('click', function initAudio() {
    const bgMusic = document.getElementById('bgMusic');
    bgMusic.volume = 0.3; // Permanent low volume

    // Try to play audio after click
    bgMusic.play().catch(e => console.log("Unable to start audio: " + e));

    // Remove the event listener once the audio is set to play
    document.removeEventListener('click', initAudio);
}, { once: true });
