
var hamburgerButton = document.querySelector('.toggle-menu');
var navigation = document.querySelector('.nav');

hamburgerButton.addEventListener('click', onHamburgerButtonClick);

function onHamburgerButtonClick(e) {
    var target = e.currentTarget;
    if (!target.classList.contains('toggle-menu__active')) {
        target.classList.add('toggle-menu__active');
        $(navigation).stop(true).slideDown();
    } else {
        target.classList.remove('toggle-menu__active');
        $(navigation).stop(true).slideUp();
    }
}