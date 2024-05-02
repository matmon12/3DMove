document.addEventListener('mousemove', e => {
    Object.assign(document.documentElement, {
        style: `
           --move-x: ${(e.clientX - window.innerWidth / 2) * -0.005}deg;
           --move-y: ${(e.clientY - window.innerHeight / 2) * -0.01}deg;
        `
    }) 
})

document.addEventListener('DOMContentLoaded', function(){
    const LoginLink = document.querySelector('.login__form-register');
    const SignUpLink = document.querySelector('.login__form-login')
    const LoginWindow = document.querySelector('.login');
    const SignUpWindow = document.querySelector('.signup');
    const RegistrationWindow = document.querySelector('.registration__inner');
    LoginLink.addEventListener('click', function(e){
        e.preventDefault();
        LoginWindow.classList.add('login--signup');
        SignUpWindow.classList.add('signup--signup');
        RegistrationWindow.classList.add('registration__inner--signup');
    })
    SignUpLink.addEventListener('click', function(e){
        e.preventDefault();
        LoginWindow.classList.remove('login--signup');
        SignUpWindow.classList.remove('signup--signup');
        RegistrationWindow.classList.remove('registration__inner--signup');
    })
})

document.addEventListener('DOMContentLoaded', function(){
    const HeaderBtn = document.querySelector('.header__button');
    const Registration = document.querySelector('.registration');
    const RegistrationBtn = document.querySelectorAll('.login__form-exit');
    HeaderBtn.addEventListener('click', function(e){
        e.preventDefault();
        Registration.classList.add('registration--active');
    })
    RegistrationBtn.forEach(item => {
        item.addEventListener('click', function(e){
            e.preventDefault();
            Registration.classList.remove('registration--active');
    
        })
    })
})

document.addEventListener('DOMContentLoaded', function(){
    const Burger = document.querySelector('.burger');
    const Menu = document.querySelector('.menu');
    const Overlay = document.querySelector('.header__overlay');
    Burger.addEventListener('click', function(){
        this.classList.toggle('burger--active');
        Menu.classList.toggle('menu--active');
        Overlay.classList.toggle('header__overlay--active');
    })
})