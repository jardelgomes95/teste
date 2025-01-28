const nao = document.getElementById('nao');

nao.addEventListener('mouseenter', () => {
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    const newX = Math.random() * (viewportWidth - nao.offsetWidth);
    const newY = Math.random() * (viewportHeight - nao.offsetHeight);

    nao.style.left = `${newX}px`;
    nao.style.top = `${newY}px`;
});
