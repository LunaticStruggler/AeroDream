document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('bgMusic');
    audio.volume = 0.3;
    
    document.addEventListener('click', () => {
        audio.play().catch(e => console.log("Audio play prevented:", e));
    }, { once: true });

    // Create floating pages
    const pagesContainer = document.querySelector('.floating-pages');
    const pageCount = 8;
    
    for (let i = 0; i < pageCount; i++) {
        createFloatingPage();
    }
    
    function createFloatingPage() {
        const page = document.createElement('div');
        page.className = 'page';
        page.style.left = `${Math.random() * 100}vw`;
        page.style.top = `${Math.random() * 100}vh`;
        page.style.opacity = Math.random() * 0.8 + 0.2;
        page.style.animation = `float-page ${15 + Math.random() * 20}s linear infinite`;
        
        pagesContainer.appendChild(page);
    }

    // Add CSS for page animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes float-page {
            0% { 
                transform: translateY(0) rotate(${Math.random() * 20 - 10}deg); 
            }
            100% { 
                transform: translateY(-100vh) rotate(${Math.random() * 360}deg); 
            }
        }
    `;
    document.head.appendChild(style);

    // Periodic page turns
    setInterval(() => {
        const pages = document.querySelectorAll('.page');
        pages.forEach(page => {
            if (Math.random() > 0.7) {
                page.style.animationPlayState = 'paused';
                setTimeout(() => {
                    page.style.animationPlayState = 'running';
                }, 1000);
            }
        });
    }, 3000);
});