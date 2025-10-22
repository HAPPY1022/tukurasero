window.addEventListener('load', () => {
    const char1 = document.getElementById('char1');
    const char2 = document.getElementById('char2');

    setTimeout(() => { char1.style.opacity = 1; }, 0);
    setTimeout(() => { char1.style.opacity = 0; }, 550);

    setTimeout(() => { char2.style.opacity = 1;}, 551);
    setTimeout(() => { char2.style.opacity = 0; }, 1880);
});