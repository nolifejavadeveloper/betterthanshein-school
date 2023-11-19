const navbar = document.getElementById('header');
let prevScrollPos = window.pageYOffset;
const hidePoint = 200; // Adjust this value to set the scroll point at which the bar hides

window.onscroll = function () {
    const currentScrollPos = window.pageYOffset;

    if (currentScrollPos > hidePoint) {
        // Scrolling past the hide point
        if (prevScrollPos > currentScrollPos) {
            // Scrolling up
            navbar.style.top = '0';
        } else {
            // Scrolling down
            navbar.style.top = '-100px'; // Adjust this value to control how much the navbar hides
        }
    } else {
        // Not scrolled past the hide point, keep the navbar fixed at the top
        navbar.style.top = '0';
    }

    prevScrollPos = currentScrollPos;
};

$('.dropdown').hover(function(){
    console.log("debug1")
    $('[data-bs-toggle="dropdown"]', this).trigger('click');
});