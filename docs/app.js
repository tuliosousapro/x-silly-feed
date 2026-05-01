/**
 * X Silly Feed: The Living Notebook
 * Advanced interactions for the premium sketchbook experience.
 */

// Initialize Lucide Icons
lucide.createIcons();

// --- Silly Slider Logic ---
const sliderContainer = document.getElementById('silly-slider');
const sillyLayer = document.getElementById('silly-layer');
const sliderHandle = document.getElementById('slider-handle');

if (sliderContainer && sillyLayer && sliderHandle) {
    let isDragging = false;

    const updateSlider = (clientX) => {
        const rect = sliderContainer.getBoundingClientRect();
        let x = clientX - rect.left;
        
        // Calculate percentage
        let percentage = (x / rect.width) * 100;
        percentage = Math.max(0, Math.min(100, percentage));
        
        // Apply to elements
        sillyLayer.style.clipPath = `inset(0 ${100 - percentage}% 0 0)`;
        sliderHandle.style.left = `${percentage}%`;
    };

    const startDragging = (e) => {
        isDragging = true;
        updateSlider(e.type.includes('touch') ? e.touches[0].clientX : e.clientX);
    };

    const stopDragging = () => {
        isDragging = false;
    };

    const moveSlider = (e) => {
        if (!isDragging) return;
        updateSlider(e.type.includes('touch') ? e.touches[0].clientX : e.clientX);
    };

    // Mouse Events
    sliderContainer.addEventListener('mousedown', startDragging);
    window.addEventListener('mousemove', moveSlider);
    window.addEventListener('mouseup', stopDragging);

    // Touch Events
    sliderContainer.addEventListener('touchstart', startDragging);
    window.addEventListener('touchmove', moveSlider);
    window.addEventListener('touchend', stopDragging);
}

// --- Scroll-Triggered SVG Drawing ---
const scribbleObserverOptions = {
    threshold: 0.3,
    rootMargin: '0px 0px -100px 0px'
};

const scribbleObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            // Optional: unobserve after trigger if you only want it to draw once
            // scribbleObserver.unobserve(entry.target);
        }
    });
}, scribbleObserverOptions);

document.querySelectorAll('.scribble-trigger').forEach(el => {
    scribbleObserver.observe(el);
});

// --- Dynamic Rotation for Bento Items ---
// Adds a bit more randomness if not hardcoded in CSS
document.querySelectorAll('.bento-item').forEach(item => {
    if (!item.style.transform) {
        const randomRot = (Math.random() * 4 - 2).toFixed(1);
        item.style.setProperty('--rotation', randomRot);
    }
});

// --- Smooth Navigation ---
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

