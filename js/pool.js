document.addEventListener('DOMContentLoaded', () => {
    // Initialize audio
    const audio = document.getElementById('bgMusic');
    audio.volume = 0.3;
    
    // Create initial waves
    for (let i = 0; i < 5; i++) {
        createRipple(
            Math.random() * window.innerWidth,
            Math.random() * window.innerHeight
        );
    }
    
    // Interactive ripples
    document.addEventListener('click', (e) => {
        audio.play().catch(e => console.log("Audio play prevented:", e));
        createRipple(e.clientX, e.clientY, true);
    });
    
    // Mouse movement ripples (throttled)
    let lastMove = 0;
    document.addEventListener('mousemove', (e) => {
        const now = Date.now();
        if (now - lastMove > 300) {
            createRipple(e.clientX, e.clientY);
            lastMove = now;
        }
    });
    
    // Auto-ripples
    setInterval(() => {
        if (Math.random() > 0.7) {
            createRipple(
                Math.random() * window.innerWidth,
                Math.random() * window.innerHeight
            );
        }
    }, 2000);
    
    function createRipple(x, y, isClick = false) {
        const ripple = document.createElement('div');
        ripple.className = 'ripple';
        
        // Position
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        
        // Size based on interaction type
        const size = isClick ? 
            150 + Math.random() * 100 : 
            50 + Math.random() * 100;
        
        ripple.style.width = `${size}px`;
        ripple.style.height = `${size}px`;
        
        // Animation variation
        ripple.style.animationDuration = `${2 + Math.random() * 3}s`;
        
        document.querySelector('.ripple-container').appendChild(ripple);
        
        // Cleanup
        setTimeout(() => ripple.remove(), 3000);
    }
});