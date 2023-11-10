
    let currentBanner = 0;

    function showBanner() {
        const banner = document.querySelector('.banner');
        const transformValue = -100 * currentBanner + '%';
        banner.style.transform = 'translateX(' + transformValue + ')';
    }

    function nextBanner() {
        currentBanner = (currentBanner + 1) % 3;
        showBanner();
    }

    function prevBanner() {
        currentBanner = (currentBanner - 1 + 3) % 3;
        showBanner();
    }

    document.getElementById('leftBtn').addEventListener('click', prevBanner);
    document.getElementById('rightBtn').addEventListener('click', nextBanner);

    window.addEventListener('load', showBanner);

