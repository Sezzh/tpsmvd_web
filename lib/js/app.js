window.onload = main();

function main() {
    setImgSlider();
    setEventListeners();
    sliderInit();

}

function setEventListeners() {
    let burgerButton = document.querySelector('.js-burgerButton');
    burgerButton.addEventListener('click', openMenu);
}

function sliderInit() {
    let buttonArray = document.querySelectorAll('.js-ControlSilder-button')
    for (var i = 0; i < buttonArray.length; i++) {
        buttonArray[i].addEventListener('click', function (e) {
            changeSlide(e);
        });
    }
}

function openMenu() {
    let navMenu = document.querySelector('.js-navigationContainer');
    if (!navMenu.classList.contains('u-menuOpen')) {
        navMenu.classList.add('u-menuOpen');
    } else {
        navMenu.classList.remove('u-menuOpen');
    }
}

function setImgSlider() {
    let imgAssetsArray = [
        './assets/wallhaven-119368blur.jpg',
        './assets/wallhaven-84321blur.jpg',
        './assets/wallhaven-187092blur.jpg',
        './assets/wallhaven-113384blur.png'
    ]
    let slideImgBoxArray = document.querySelectorAll('.js-SectionSliderContaner-img')
    for (var i = 0; i < slideImgBoxArray.length; i++) {
        slideImgBoxArray[i].style.backgroundImage = 'url(' + imgAssetsArray[i] + ')';
    }
}

function changeSlide(e) {
    var eventAction = e.srcElement.id;
    var slidesArray = document.querySelectorAll('.js-SectionSliderContaner-img');
    var activeButtonSlider = document.querySelectorAll('.js-ControlSilder-button');
    var slideOne = slidesArray[0];
    var slideTwo = slidesArray[1];
    var slideThree = slidesArray[2];
    var slideFour = slidesArray[3];
    if (eventAction === 'b1') {
        if (!slideOne.classList.contains('u-activeSlide')) {
            slideOne = checkUtilities(slideOne);
            slideOne.classList.add('u-activeSlide');
            slideTwo = checkUtilities(slideTwo);
            slideTwo.classList.add('u-nextSlide100');
            slideThree = checkUtilities(slideThree);
            slideThree.classList.add('u-nextSlide200');
            slideFour = checkUtilities(slideFour);
            slideFour.classList.add('u-nextSlide300');
            activeButtonSlider[0] = checkButtonSliderStatus(activeButtonSlider[0]);
            activeButtonSlider[0].classList.add('u-activeButton');
            activeButtonSlider[1] = checkButtonSliderStatus(activeButtonSlider[1]);
            activeButtonSlider[2] = checkButtonSliderStatus(activeButtonSlider[2]);
            activeButtonSlider[3] = checkButtonSliderStatus(activeButtonSlider[3]);
        }
    }
    if (eventAction === 'b2') {
        if (!slideTwo.classList.contains('u-activeSlide')) {
            slideOne = checkUtilities(slideOne);
            slideOne.classList.add('u-beforeSlide100');
            slideTwo = checkUtilities(slideTwo);
            slideTwo.classList.add('u-activeSlide');
            slideThree = checkUtilities(slideThree);
            slideThree.classList.add('u-nextSlide100');
            slideFour = checkUtilities(slideFour);
            slideFour.classList.add('u-nextSlide200');
            activeButtonSlider[0] = checkButtonSliderStatus(activeButtonSlider[0]);
            activeButtonSlider[1] = checkButtonSliderStatus(activeButtonSlider[1]);
            activeButtonSlider[1].classList.add('u-activeButton');
            activeButtonSlider[2] = checkButtonSliderStatus(activeButtonSlider[2]);
            activeButtonSlider[3] = checkButtonSliderStatus(activeButtonSlider[3]);
        }
    }
    if (eventAction === 'b3') {
        if (!slideThree.classList.contains('u-activeSlide')) {
            slideOne = checkUtilities(slideOne);
            slideOne.classList.add('u-beforeSlide200');
            slideTwo = checkUtilities(slideTwo);
            slideTwo.classList.add('u-beforeSlide100');
            slideThree = checkUtilities(slideThree);
            slideThree.classList.add('u-activeSlide');
            slideFour = checkUtilities(slideFour);
            slideFour.classList.add('u-nextSlide100');
            activeButtonSlider[0] = checkButtonSliderStatus(activeButtonSlider[0]);
            activeButtonSlider[1] = checkButtonSliderStatus(activeButtonSlider[1]);
            activeButtonSlider[2] = checkButtonSliderStatus(activeButtonSlider[2]);
            activeButtonSlider[2].classList.add('u-activeButton');
            activeButtonSlider[3] = checkButtonSliderStatus(activeButtonSlider[3]);
        }
    }
    if (eventAction === 'b4') {
        if (!slideFour.classList.contains('u-activeSlide')) {
            slideOne = checkUtilities(slideOne);
            slideOne.classList.add('u-beforeSlide300');
            slideTwo = checkUtilities(slideTwo);
            slideTwo.classList.add('u-beforeSlide200');
            slideThree = checkUtilities(slideThree);
            slideThree.classList.add('u-beforeSlide100');
            slideFour = checkUtilities(slideFour);
            slideFour.classList.add('u-activeSlide');
            activeButtonSlider[0] = checkButtonSliderStatus(activeButtonSlider[0]);
            activeButtonSlider[1] = checkButtonSliderStatus(activeButtonSlider[1]);
            activeButtonSlider[2] = checkButtonSliderStatus(activeButtonSlider[2]);
            activeButtonSlider[3] = checkButtonSliderStatus(activeButtonSlider[3]);
            activeButtonSlider[3].classList.add('u-activeButton');
        }
    }
}

function checkUtilities(slideContainer) {
    if (slideContainer.classList.contains('u-nextSlide100')) {
        slideContainer.classList.remove('u-nextSlide100');
    }
    if (slideContainer.classList.contains('u-nextSlide200')) {
        slideContainer.classList.remove('u-nextSlide200');
    }
    if (slideContainer.classList.contains('u-nextSlide300')) {
        slideContainer.classList.remove('u-nextSlide300');
    }
    if (slideContainer.classList.contains('u-beforeSlide100')) {
        slideContainer.classList.remove('u-beforeSlide100');
    }
    if (slideContainer.classList.contains('u-beforeSlide200')) {
        slideContainer.classList.remove('u-beforeSlide200');
    }
    if (slideContainer.classList.contains('u-beforeSlide300')) {
        slideContainer.classList.remove('u-beforeSlide300');
    }
    if (slideContainer.classList.contains('u-activeSlide')) {
        slideContainer.classList.remove('u-activeSlide');
    }
    return slideContainer;
}

function checkButtonSliderStatus(b) {
    if (b.classList.contains('u-activeButton')) {
        b.classList.remove('u-activeButton');
    }
    return b;
}
