const luckyButton = document.getElementById('lucky-btn');
const logo = document.getElementById('logo');

if (luckyButton && logo) {
    luckyButton.addEventListener('click', function () {
        if (logo.getAttribute('src') === 'assets/google_logo.png') {
            logo.setAttribute('src', 'assets/oddity.png');
            logo.setAttribute('alt', 'Oddity Logo');
        } else {
            logo.setAttribute('src', 'assets/google_logo.png');
            logo.setAttribute('alt', 'Google Logo');
        }
    });
} else {
    console.error('No luckyButton or logo elements');
}