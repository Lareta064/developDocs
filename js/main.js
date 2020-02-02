$(document).ready(function () {
    $('.header-slider ').owlCarousel({
        items: 3,
        loop: true,
        margin: 30,


    });
    $(' .works-slider').owlCarousel({
        items: 3,
        loop: true,
        margin: 30,
        nav: true


    });

    //BENEFITS
    const benefitsCards = document.querySelectorAll('.benefits-img-item');
    const benefitsText = document.querySelectorAll('.benefits-text-item');
    const benefittextOut = document.querySelector('#benefits-text');

    for (let i = 0; i < benefitsCards.length; i++) {
        benefitsCards[i].addEventListener('mouseenter', function (e) {
            e.preventDefault();
            const thisData = this.getAttribute('data-card')
            for (let i = 0; i < benefitsText.length; i++) {
                benefitsText[i].classList.remove('active');
                const textData = benefitsText[i].getAttribute('data-item');
                if (textData == thisData) {
                    benefitsText[i].classList.add('active');
                }
            }
            console.log(thisData);
        })
    }

    //magnifyk
    $(".docs-items").magnificPopup({
        delegate: 'a',
        type: 'image',

        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        }
    });

})