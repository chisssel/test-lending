import './styles.scss';
import './fonts/fonts.scss';

document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.burger');
    const mobileMenu = document.querySelector('.mobile-menu');
    const body = document.body;

    burger.addEventListener('click', function() {
        this.classList.toggle('active');
        mobileMenu.classList.toggle('active');

        if (mobileMenu.classList.contains('active')) {
            body.style.overflow = 'hidden';
        } else {
            body.style.overflow = '';
        }
    });

    const dropdownToggles = document.querySelectorAll('.mobile-menu .dropdown-toggle');

    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            const parent = this.parentElement;
            parent.classList.toggle('open');
        });
    });

    window.addEventListener('resize', function() {
        if (window.innerWidth > 992) {
            document.querySelector('.burger').classList.remove('active');
            document.querySelector('.mobile-menu').classList.remove('active');

            document.body.style.overflow = '';
        }
    });
});
