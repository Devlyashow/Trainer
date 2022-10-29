const home = document.querySelector('.variant1');

const home_zamena_1 = document.querySelector('.variant1-click');

home.addEventListener('click', function () {
    if (home_zamena_1.classList.add('zamena')) {
        home_zamena_1.classList.toggle('zamena')
        home.classList.toggle('zamena')

    }
    else {
        home_zamena_1.classList.toggle('zamena')
        home.classList.toggle('zamena')
    }
});

home_zamena_1.addEventListener('click', function () {
    if (home_zamena_1.classList.remove('zamena')) {
        home_zamena_1.classList.toggle('zamena')
        home.classList.toggle('zamena')

    }
    else {
        home_zamena_1.classList.toggle('zamena')
        home.classList.toggle('zamena')
    }
});

const street = document.querySelector('.variant2');

const street_zamena = document.querySelector('.variant2-click');

street.addEventListener('click', function () {
});

street.addEventListener('click', function () {
    if (street_zamena.classList.add('zamena2')) {
        street_zamena.classList.toggle('zamena2');
        street.classList.toggle('zamena2');
    }
    else {
        street_zamena.classList.toggle('zamena2');
        street.classList.toggle('zamena2');
    }
});

street_zamena.addEventListener('click', function () {
    if (street.classList.add('zamena2')) {
        street.classList.toggle('zamena2');
        street_zamena.classList.toggle('zamena2')
    }
    else {
        street.classList.toggle('zamena2');
        street_zamena.classList.toggle('zamena2')
    }
});

const online = document.querySelector('.variant3')

const online_zamena = document.querySelector('.variant3-click');

online.addEventListener('click', function () {
    if (online.classList.remove('zamena3')) {
        online_zamena.classList.toggle('zamena3');
        online.classList.toggle('zamena3')
    }
    else {
        online_zamena.classList.toggle('zamena3');
        online.classList.toggle('zamena3')
    }
})

online_zamena.addEventListener('click', function () {
    if (online.classList.add('zamena3')) {
        online_zamena.classList.toggle('zamena3');
        online.classList.toggle('zamena3')
    }
    else {
        online_zamena.classList.toggle('zamena3');
        online.classList.toggle('zamena3')
    }
})

$(document).ready(function () {
    $('.slider').slick({
        dots: true,
        adaptiveHeight: true,
        centerMode: true,
        // slidesToShow: 3,
        // easing: 'ease'
        autoplay: true



    });
})

