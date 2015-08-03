(function() {

    /*
    * main process
    */

    var $ = window.jQuery;
    setImgSlider();
    setEventListeners();
    sliderInit();
    mapsInit();

    function setEventListeners() {
        let burgerButton = document.querySelector('.js-burgerButton');
        burgerButton.addEventListener('click', openMenu);
        let $sliderControl = $('.js-SectionSliderContaner');
        $sliderControl.on('swipeleft', function(event) {
            changeSlideBySwipe(event.type);
        });
        $sliderControl.on('swiperight', function(event) {
            changeSlideBySwipe(event.type);
        });

        let $sendFormButton = $('[data-contactButton]');
        $sendFormButton.on('click', function(event) {
            sendContactForm(event);
        });
        let privacyLink = document.querySelector('.js-privacyTermsButton');
        privacyLink.addEventListener('click', function(event) {
            privacyTermsHandler(event);
        });
        let $privacyTermsContainer = $('[data-terms="container"]');
        $privacyTermsContainer.on('swipeleft', function(event) {
            $privacyTermsContainer.toggleClass('u-termsOpen');
        });
        let closeTermsButton = document.querySelector('[data-terms="closeButton"]');
        closeTermsButton.addEventListener('click', function(event) {
            $privacyTermsContainer.toggleClass('u-termsOpen');
        })
    }

    function sliderInit() {
        let buttonArray = document.querySelectorAll('.js-ControlSilder-button')
        for (var i = 0; i < buttonArray.length; i++) {
            buttonArray[i].addEventListener('click', function (e) {
                changeSlide(e.srcElement.id);
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

    function changeSlide(eventAction) {
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

    function changeSlideBySwipe(event) {
        var buttonArray = document.querySelectorAll('.js-ControlSilder-button');
        if (event === 'swipeleft') {
            for (var i = 0; i < buttonArray.length; i++) {
                if (buttonArray[i].classList.contains('u-activeButton')) {
                    var nextSlideButton = buttonArray[i + 1];
                    if (nextSlideButton == null ) {
                        nextSlideButton = buttonArray[0];
                    }
                }
            }
            changeSlide(nextSlideButton.id);
        }
        if (event === 'swiperight') {
            for (var i = 0; i < buttonArray.length; i++) {
                if (buttonArray[i].classList.contains('u-activeButton')) {
                    var nextSlideButton = buttonArray[i - 1];
                    if (nextSlideButton == null ) {
                        nextSlideButton = buttonArray[3];
                    }
                }
            }
            changeSlide(nextSlideButton.id);
        }

    }

    /*
    * Inicia la parte de los contactos
    */
    function sendContactForm(event) {
        event.preventDefault();
        var $formData = {};
        $formData.name = $('[data-contact="name"]').val();
        $formData.email = $('[data-contact="email"]').val();
        $formData.subject = $('[data-contact="subject"]').val();
        $formData.message = $('[data-contact="message"]').val();

        var link = 'mailto:sezzh@outlook.com' + '?cc=' + $formData.email + '&subject=' + encodeURI($formData.subject) + '&body=' + encodeURI($formData.message);

        window.location.href = link;
    }

    /*
    *Inicia la parte de los mapas
    */

    function mapsInit() {
        var map;
        var btnRoute;
        var latOffice = 19.506194;
        var lngOffice = -99.165290;
        var contentHtml = createMapContentHtml();
        if (GMaps) { //verify if the script tag of gmaps.js is loaded
            var map = new GMaps({
                div : '#officeMap',
                lat: latOffice,
                lng: lngOffice
            });
            map.addMarker({
                lat: latOffice,
                lng: lngOffice,
                title: 'Oficinas de TPSMVD',
                infoWindow: {
                    content: contentHtml
                }
            });
            btnRoute = document.querySelector('[data-btnRoute]');
            btnRoute.addEventListener('click', function(event) {
                createOfficeMapRoute(map, event);
            });
        }
    }

    function createMapContentHtml() {
        var frag = document.createDocumentFragment();
        var tempTitle = document.createElement('h3');
        var tempImg = document.createElement('img');
        var tempAddressTitle = document.createElement('h4');
        var tempAddress = document.createElement('p');
        var tempPhone = document.createElement('p');
        var tempPhoneTitle = document.createElement('h4');
        tempTitle.className = 'MapContainer-title';
        tempImg.className = 'MapContainer-img';
        tempAddressTitle.className = 'MapContainer-subTitle';
        tempAddress.className = 'MapContainer-paragraph';
        tempImg.setAttribute('src', './assets/logo.png');
        tempTitle.innerHTML = 'Nuestras oficinas';
        tempAddressTitle.innerHTML = 'Direccion:';
        tempAddress.innerHTML = 'Isla Margarita 17. Col. Prado Vallejo, Tlalnepantla de baz. Estado de México. C.P. 54170';
        tempPhoneTitle.innerHTML = 'Telefonos:';
        tempPhone.innerHTML = '53 67 54 62 o 52 67 26 03';
        frag.appendChild(tempTitle);
        frag.appendChild(tempImg);
        frag.appendChild(tempAddressTitle);
        frag.appendChild(tempAddress);
        frag.appendChild(tempPhoneTitle);
        frag.appendChild(tempPhone);
        return frag;
	}

    function createOfficeMapRoute(map, event) {
        //event.target.dataset.btnroute
        var btnRoute = document.querySelector('[data-btnRoute="start"]');
        var geo = navigator.geolocation;
        var geoOptions = {
            enableHighAccuracy: true
        };
        btnRoute.innerHTML = 'Creando la ruta...';
        geo.getCurrentPosition(getCallback, errorCallback, geoOptions);

        function getCallback(actualPosition) {
            map.travelRoute({
                origin: [actualPosition.coords.latitude, actualPosition.coords.longitude],
                destination: [19.506194,-99.165290],
                travelMode: 'driving',
                step: function(e) {
                    var listInstructions = document.querySelector('[data-routeList]');
                    var listItem = document.createElement('li');
                    listItem.className = 'GeoNavigationContainer-item';
                    listItem.innerHTML = e.instructions;
                    listInstructions.appendChild(listItem);
                    map.drawPolyline({
                      path: e.path,
                      strokeColor: '#FF3412',
                      strokeOpacity: 0.6,
                      strokeWeight: 6
                    })
                }
            });
            var $routeListContainer = $('[data-routeList]');
            $routeListContainer.slideDown();
            btnRoute.innerHTML = 'Ruta generada';
            btnRoute.disabled = true;
        }

        function errorCallback(error) {
            var btnRoute = document.querySelector('[data-btnRoute="start"]');
            var routeTitle = document.querySelector('[data-route="title"]');
            if (error.code === 1 ) {
                routeTitle.innerHTML = 'Necesitamos que nos permitas saber tu ubicación. Recarga la página e intentalo de nuevo.';
            } else {
                routeTitle.innerHTML = 'Lamentamos que el servicio no este disponible en este momento...';
            }
            btnRoute.innerHTML = 'Algo se rompio...';
            btnRoute.classList.add('u-errorButton');
            btnRoute.disabled = true;
        }

    }

    function privacyTermsHandler(event) {
        event.preventDefault();
        var $privacyTermsContainer = $('[data-terms="container"]');
        if ($privacyTermsContainer[0].hasAttribute('data-load')) {
            $privacyTermsContainer.toggleClass('u-termsOpen');
        } else {
            var $privacyTermsDiv = $('[data-terms="loader"]');
            $privacyTermsDiv.toggleClass('spinner');
            $privacyTermsContainer.toggleClass('u-termsOpen');
            $.getJSON('./js/privacyTermsDoc.json', handleRequest);
        }
    }

    function handleRequest(data) {
        var templateDocument = document.querySelector('#template--document');
        var itemData;
        var listData;
        var cloneItem;
        var listUse;
        var itemUse;
        templateDocument = document.importNode(templateDocument.content, true);
        templateDocument.querySelector('[data-terms="title"]').innerHTML = data.privacyTerms.title;
        templateDocument.querySelector('[data-terms="header"]').innerHTML = data.privacyTerms.headerDocument;
        itemData = templateDocument.querySelector('[data-terms="itemData"]');
        listData = templateDocument.querySelector('[data-terms="listData"]');
        listData.innerHTML = '';
        for (var i = 0; i < data.privacyTerms.dataWeCollect.length; i++) {
            cloneItem = itemData.cloneNode();
            cloneItem.innerHTML = data.privacyTerms.dataWeCollect[i];
            listData.appendChild(cloneItem);
        }
        templateDocument.querySelector('[data-terms="use"]').innerHTML = data.privacyTerms.whatFormWeUseData;
        itemUse = templateDocument.querySelector('[data-terms="itemUses"]');
        listUse = templateDocument.querySelector('[data-terms="listUses"]');
        listUse.innerHTML = '';
        for (var i = 0; i < data.privacyTerms.howWeUse.length; i++) {
            cloneItem = itemUse.cloneNode();
            cloneItem.innerHTML = data.privacyTerms.howWeUse[i];
            listUse.appendChild(cloneItem);
        }
        templateDocument.querySelector('[data-terms="content"]').innerHTML = data.privacyTerms.contentDocument;
        templateDocument.querySelector('[data-terms="footer"]').innerHTML = data.privacyTerms.footerDocument;

        $('[data-terms="loader"]').toggleClass('spinner');
        $('[data-terms="contentContainer"]')[0].appendChild(templateDocument);
        $('[data-terms="container"]')[0].setAttribute('data-load', 'ready');

    }

})();
