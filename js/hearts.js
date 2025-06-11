document.addEventListener('DOMContentLoaded', () => {
    const heartsBg = document.querySelector('.hearts-bg');
    function createHeart() {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = (4 + Math.random() * 3) + 's';
        heartsBg.appendChild(heart);
        setTimeout(() => heart.remove(), 7000);
    }
    setInterval(createHeart, 500);
});