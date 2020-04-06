// slide
let slider = document.querySelectorAll('.slider-item'), //all slider item
prev = document.getElementsByClassName('arrow-left')[0],// left button
next = document.getElementsByClassName('arrow-right')[0], //right button
sliderDots = document.querySelector('.slider-dots'), // dots box
dots = document.querySelectorAll('.dot'), //all dots

slideIndex = 1; //initial showed slide

function photoSlider(slider,dots,sliderDots,next,prev,slideIndex) {
    function showSlider(n) { //fuction hide/show
        if(n > slider.length) {
            slideIndex = 1;
        } else if (n < 1) {
            slideIndex = slider.length;
        }

        slider.forEach((item)=> item.style.display = 'none');
        dots.forEach((item)=> item.classList.remove('dot-active'));

        slider[slideIndex-1].style.display = 'bl    ock';
        dots[slideIndex-1].classList.add('dot-active');

    }

    showSlider();

    function plusSlide(n) { //change slide
        showSlider(slideIndex +=n);
    }

    function currentSlide(n) { //change slide to current
        showSlider(slideIndex = n);
    }

    next.addEventListener('click', function() { //add +1
        plusSlide(1);
    });

    prev.addEventListener('click', function(){ //sub -1
plusSlide(-1);
    });

    sliderDots.addEventListener('click', function(event){ //interactive dots
        for(let i=0; i<dots.length+1;i++) {
            if(event.target.classList.contains('dot') && event.target == dots[i-1]){
                currentSlide(i);
            }
        }
    });

}

