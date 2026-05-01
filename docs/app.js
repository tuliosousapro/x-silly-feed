// Initialize Lucide Icons
lucide.createIcons();

// Silly Slider Logic
const slider = document.getElementById('silly-slider');
const layer = document.getElementById('silly-layer');
const handle = document.getElementById('slider-handle');

let isResizing = false;

function updateSlider(x) {
    const rect = slider.getBoundingClientRect();
    let position = ((x - rect.left) / rect.width) * 100;
    
    // Constraints
    position = Math.max(0, Math.min(100, position));
    
    layer.style.width = `${position}%`;
    handle.style.left = `${position}%`;
}

slider.addEventListener('mousedown', (e) => {
    isResizing = true;
    updateSlider(e.clientX);
});

window.addEventListener('mousemove', (e) => {
    if (!isResizing) return;
    updateSlider(e.clientX);
});

window.addEventListener('mouseup', () => {
    isResizing = false;
});

// Touch support
slider.addEventListener('touchstart', (e) => {
    isResizing = true;
    updateSlider(e.touches[0].clientX);
});

window.addEventListener('touchmove', (e) => {
    if (!isResizing) return;
    updateSlider(e.touches[0].clientX);
});

window.addEventListener('touchend', () => {
    isResizing = false;
});

// Jitter Effect Pause on Hover
document.querySelectorAll('.jitter').forEach(el => {
    el.addEventListener('mouseenter', () => el.style.animationPlayState = 'paused');
    el.addEventListener('mouseleave', () => el.style.animationPlayState = 'running');
});

// Scroll Reveal Scribbles
const observerOptions = {
    threshold: 0.5
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('scribble-active');
        }
    });
}, observerOptions);

document.querySelectorAll('.scribble-trigger').forEach(el => observer.observe(el));
