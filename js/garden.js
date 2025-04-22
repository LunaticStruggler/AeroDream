document.addEventListener('DOMContentLoaded', () => {
    // Initialize audio
    const audio = document.getElementById('bgMusic');
    audio.volume = 0.3;
    
    document.addEventListener('click', () => {
        audio.play().catch(e => console.log("Audio play prevented:", e));
    }, { once: true });

    // Create falling petals
    const petalContainer = document.querySelector('.falling-petals');
    const petalTypes = 5; // Number of different petal images (petal1.png to petal5.png)
    
    function createPetal() {
        const petal = document.createElement('div');
        petal.className = 'petal';
        
        // Random properties
        const type = Math.ceil(Math.random() * petalTypes);
        const size = 15 + Math.random() * 30;
        const duration = 10 + Math.random() * 20;
        const delay = Math.random() * 15;
        
        petal.style.cssText = `
            width: ${size}px;
            height: ${size}px;
            left: ${Math.random() * 100}vw;
            background-image: url('../images/petal${type}.png');
            animation-duration: ${duration}s;
            animation-delay: ${delay}s;
            --random-x: ${Math.random()};
        `;
        
        petalContainer.appendChild(petal);
        
        // Remove petals after animation completes
        setTimeout(() => {
            petal.remove();
        }, (duration + delay) * 1000);
    }
    
    // Create initial petals
    for (let i = 0; i < 20; i++) {
        createPetal();
    }
    
    // Continuous petal creation
    setInterval(() => {
        if (Math.random() > 0.3) createPetal();
    }, 1000);
    
    // More petals on mouse movement
    document.addEventListener('mousemove', () => {
        if (Math.random() > 0.8) createPetal();
    });
});