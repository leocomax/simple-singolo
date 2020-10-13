const burgerBlockIcon = document.querySelector('#burger-block-icon');
const burgerBlockIconRotate = document.querySelector('#burger-block-icon-rotate');
const burgerMenu = document.querySelector('#burger-menu');

burgerBlockIcon.addEventListener('click', sideBar);
burgerBlockIconRotate.addEventListener('click', sideBar);
burgerMenu.addEventListener('click',closeSideBar)

function sideBar(event){
    document.querySelector('#burger-menu').classList.toggle('main__hiden');
}

function closeSideBar(event){
    if(event.target.tagName == 'A'){
        sideBar();
    }
}

const menuBlock = document.querySelector('#menu-block-link');

window.addEventListener('scroll', menuSwitching);
window.addEventListener('load', menuSwitching);

function menuSwitching(){

    setTimeout(()=>{
        menuBlock.querySelectorAll('a').forEach(el=> el.classList.remove('active-menu-link'));
        burgerMenu.querySelectorAll('a').forEach(el=> el.classList.remove('active-menu-link'));

        if (document.querySelector('#home-mark').getBoundingClientRect().top <= 0 && 
            document.querySelector('#our-services-mark').getBoundingClientRect().top - 10>= 0){
            document.querySelector('#link-home-mark').classList.add('active-menu-link');
            document.querySelector('#sidebar-link-home-mark').classList.add('active-menu-link');
        };

        if (document.querySelector('#our-services-mark').getBoundingClientRect().top - 10 <= 0 &&
            document.querySelector('#portfolio-mark').getBoundingClientRect().top - 10 >= 0){
            document.querySelector('#link-our-services-mark').classList.add('active-menu-link');
            document.querySelector('#sidebar-link-our-services-mark').classList.add('active-menu-link');
        };

        if (document.querySelector('#portfolio-mark').getBoundingClientRect().top - 10<= 0 &&
            document.querySelector('#about-as-mark').getBoundingClientRect().top - 10 >= 0){
            document.querySelector('#link-portfolio-mark').classList.add('active-menu-link');
            document.querySelector('#sidebar-link-portfolio-mark').classList.add('active-menu-link')
        };
    }, 100);
    
};

const container = document.querySelector('.main__slider .main__slide-container-image');
let sliderAnimationPermission = true;

const slideLeftChev = document.querySelector('#slider-left-chev');
slideLeftChev.addEventListener('click', slideLeft);

function slideLeft(event){
    if(!sliderAnimationPermission) return true;

    let allImg = document.querySelectorAll('.main__slider .main__slide-container-image>div');

    container.classList.add('slide-container-image_transition');
    container.style.transform = 'translateX(' + (-100/allImg.length) + '%)';

    sliderAnimationPermission = false;

    setTimeout(()=>{
        container.classList.remove('slide-container-image_transition');
        container.style.transform = '';
        container.append(allImg[0]);
        sliderAnimationPermission = true
    },1000)
};

const slideRightChev = document.querySelector('#slider-right-chev');
slideRightChev.addEventListener('click', slideRight);

function slideRight(event){
    if(!sliderAnimationPermission) return true;

    let allImg = document.querySelectorAll('.main__slider .main__slide-container-image>div');
    const container = document.querySelector('.main__slider .main__slide-container-image');

    container.prepend(allImg[allImg.length-1]);
    allImg[0].style.transform = 'translateX(-100vw)';
    allImg[allImg.length-1].style.transform = 'translateX(-100vw)';
    container.classList.add('slide-container-image_transition');
    container.style.transform = 'translateX(' + 100/allImg.length + '%)';

    sliderAnimationPermission = false;

    setTimeout(()=>{
        container.classList.remove('slide-container-image_transition');
        container.style.transform = '';
        allImg[0].style.transform = '';
        allImg[allImg.length-1].style.transform = '';
        sliderAnimationPermission = true
    },1000)
};

const verticalPhone = document.querySelector('#iphone-vertical-first-without-shadow'); 
verticalPhone.addEventListener('click', event => document.querySelector('#iphone-vertical-first-offline').classList.toggle('main__hiden-screen'));

const horizontalPhone = document.querySelector('#iphone-horizontal-first-without-shadow');
horizontalPhone.addEventListener('click', event => document.querySelector('#iphone-horizontal-first-offline').classList.toggle('main__hiden-screen'));

const portfolioButton = document.querySelector('#portfolio-block-link');
portfolioButton.addEventListener('click', changePositionImgPortfolio)
portfolioButton.addEventListener('click', changePositionActiveButton)

function changePositionImgPortfolio(event){ 
    if(event.target.tagName == "BUTTON"){
        let firstElement = document.querySelector('#container-with-portfolio').querySelector('img');
        document.querySelector('#container-with-portfolio').append(firstElement);
    }
}

function changePositionActiveButton(event){ 
    if(event.target.tagName == "BUTTON"){
        portfolioButton.querySelectorAll('button').forEach(el=>el.classList.remove('portfolio_button-whit-focus'));
        event.target.classList.add('portfolio_button-whit-focus')
    }
}

const containerPortfolio = document.querySelector('#container-with-portfolio');
containerPortfolio.addEventListener('click', event => {
    if(event.target.classList.contains('img_outline')) {
        event.target.classList.remove('img_outline');
        return true;
    };

    containerPortfolio.querySelectorAll('img').forEach(el => el.classList.remove('img_outline'));
    event.target.classList.add('img_outline');
})


