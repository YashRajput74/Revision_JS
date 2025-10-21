const content = document.querySelector('.content');
const text = document.querySelector('.center-text');

window.addEventListener('scroll', () => {
    // Get how far we've scrolled relative to total height
    const scrollY = window.scrollY;
    console.log(scrollY);
    const maxScroll = document.body.scrollHeight - window.innerHeight;
    const ratio = scrollY / maxScroll; // 0 to 1

    // Z-axis depth (towards or away)
    const z = -500 + ratio * 1000; // moves from -500 to +500
    const scale = 1 + ratio * 1.5; // scale slightly with depth
    const blur = Math.abs(ratio - 0.5) * 10; // blur more at start/end

    // Apply transforms
    content.style.transform = `translateZ(${z}px) scale(${scale})`;
    content.style.filter = `blur(${blur}px)`;

    // Optional: adjust opacity if you want fading
    text.style.opacity = 1 - Math.abs(ratio - 0.5) * 2;
});
