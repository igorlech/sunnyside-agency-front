import './navbar.scss';
export class Navbar{
    constructor () {
        const btn = document.querySelector('.nav-burger-menu');
        btn.addEventListener('click', () => this.menuHandler())
    }

    menuHandler() {
        const nav = document.querySelector('.nav-ul');
        const menuAnim1 = document.querySelector('#nav-anim-1');
        const menuAnim2 = document.querySelector('#nav-anim-2');
        const menuAnim3 = document.querySelector('#nav-anim-3')

        nav.classList.toggle('is-active');
        
        menuAnim1.classList.toggle('mobile-menu-animate-1');
        menuAnim2.classList.toggle('mobile-menu-animate-2');
        menuAnim3.classList.toggle('mobile-menu-animate-3');

        /* menuAnim1.forEach((menuline) => {
            menuline.classList.toggle('mobile-menu-animate-1');
        }) */
    }
}