document.addEventListener('mousemove', (e) => {
    const trail = document.createElement('div');
    trail.className = 'trail';
    document.body.appendChild(trail);

    const x = e.pageX;
    const y = e.pageY;

    trail.style.left = x + 'px';
    trail.style.top = y + 'px';

    trail.addEventListener('animationend', () => {
        document.body.removeChild(trail);
    });
});
