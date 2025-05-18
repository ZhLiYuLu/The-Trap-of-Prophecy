// Create floating particles
function createParticle() {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    
    // Random horizontal position
    const x = Math.random() * window.innerWidth;
    
    particle.style.left = `${x}px`;
    particle.style.top = `${window.innerHeight}px`;
    
    // Randomize particle appearance
    particle.style.width = `${Math.random() * 3 + 2}px`;
    particle.style.height = particle.style.width;
    particle.style.opacity = `${Math.random() * 0.5 + 0.3}`;
    
    // Randomize particle movement direction
    const translateX = (Math.random() - 0.5) * 200;
    particle.style.setProperty('--translateX', `${translateX}px`);
    
    // Randomize animation duration
    const duration = Math.random() * 1 + 4;
    particle.style.animationDuration = `${duration}s`;
    
    document.body.appendChild(particle);
    
    // Remove particle after animation
    setTimeout(() => {
        particle.remove();
    }, duration * 1000);
}

// Create particles periodically
setInterval(createParticle, 200);

// Create initial particles
for (let i = 0; i < 20; i++) {
    setTimeout(() => {
        createParticle();
    }, i * 100);
}


