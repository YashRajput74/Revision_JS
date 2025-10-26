const content = document.querySelector('.content');
const text = document.querySelector('.center-text');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    console.log(scrollY);
    const maxScroll = document.body.scrollHeight - window.innerHeight;
    const ratio = scrollY / maxScroll;

    const z = -500 + ratio * 1000;
    const scale = 1 + ratio * 1.5;
    const blur = Math.abs(ratio - 0.5) * 10;

    // Apply transforms
    content.style.transform = `translateZ(${z}px) scale(${scale})`;
    content.style.filter = `blur(${blur}px)`;

    // Optional: adjust opacity if you want fading
    text.style.opacity = 1 - Math.abs(ratio - 0.5) * 2;
});
