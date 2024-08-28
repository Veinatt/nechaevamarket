document.addEventListener('DOMContentLoaded', function () {
  testWebP(document.body)
})

function testWebP(elem) {
  const webP = new Image();
  webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
  webP.onload = webP.onerror = function () {
    webP.height === 2 ? elem.classList.add('webp') : elem.classList.add('no-webp')
  }
}

function ready(fn) {
  if (document.readyState != 'loading') {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}


AOS.init({
  duration: 1000,
});


ready(function () {
  let y = document.documentElement.scrollTop;
  if (y > 100) {
    document.querySelector('header').classList.add('active');
  } else {
    document.querySelector('header').classList.remove('active');
  }
  
    
});

window.addEventListener('scroll', function () {
  let y = document.documentElement.scrollTop;
  if (y > 100) {
    document.querySelector('header').classList.add('active');
  } else {
    document.querySelector('header').classList.remove('active');
  }
})

var doc = document.documentElement;
var w = window;

/*
define four variables: curScroll, prevScroll, curDirection, prevDirection
*/

var curScroll;
var prevScroll = w.scrollY || doc.scrollTop;
var curDirection = 0;
var prevDirection = 0;

/*
how it works:
-------------
create a scroll event listener
create function to check scroll position on each scroll event,
compare curScroll and prevScroll values to find the scroll direction
scroll up - 1, scroll down - 2, initial - 0
then set the direction value to curDirection
compare curDirection and prevDirection
if it is different, call a function to show or hide the header
example:
step 1: user scrolls down: curDirection 2, prevDirection 0 > hide header
step 2: user scrolls down again: curDirection 2, prevDirection 2 > already hidden, do nothing
step 3: user scrolls up: curDirection 1, prevDirection 2 > show header
*/

var header = document.querySelector('header');
var toggled;
var threshold = 100;

var checkScroll = function () {
  curScroll = w.scrollY || doc.scrollTop;
  if (curScroll > prevScroll) {
    // scrolled down
    curDirection = 2;
  } else {
    //scrolled up
    curDirection = 1;
  }

  if (curDirection !== prevDirection) {
    toggled = toggleHeader();
  }

  prevScroll = curScroll;
  if (toggled) {
    prevDirection = curDirection;
  }
};

var toggleHeader = function () {
  toggled = true;
  if (curDirection === 2 && curScroll > threshold) {
    header.classList.add('hide');
  } else if (curDirection === 1) {
    header.classList.remove('hide');
  } else {
    toggled = false;
  }
  return toggled;
};

window.addEventListener('scroll', checkScroll);





// var swiper = new Swiper('.partners-swiper', {
//   spaceBetween: 0,
//   centeredSlides: true,
//   speed: 3000,
//   autoplay: {
//     delay: .001,
//   },
//   loop: true,
//   slidesPerView: 'auto',
//   allowTouchMove: false,
//   disableOnInteraction: true
// });



// window.addEventListener("DOMContentLoaded", function() {
//   [].forEach.call( document.querySelectorAll('.TelRu'), function(input) {
//     var keyCode;
//     function mask(event) {
//       event.keyCode && (keyCode = event.keyCode);
//       var pos = this.selectionStart;
//       if (pos < 3) event.preventDefault();
//       var matrix = "+7 (___) ___ ____",
//           i = 0,
//           def = matrix.replace(/\D/g, ""),
//           val = this.value.replace(/\D/g, ""),
//           new_value = matrix.replace(/[_\d]/g, function(a) {
//               return i < val.length ? val.charAt(i++) : a
//           });
//       i = new_value.indexOf("_");
//       if (i != -1) {
//           i < 5 && (i = 3);
//           new_value = new_value.slice(0, i)
//       }
//       var reg = matrix.substr(0, this.value.length).replace(/_+/g,
//           function(a) {
//               return "\\d{1," + a.length + "}"
//           }).replace(/[+()]/g, "\\$&");
//       reg = new RegExp("^" + reg + "$");
//       if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {
//         this.value = new_value;
//       }
//       if (event.type == "blur" && this.value.length < 5) {
//         this.value = "";
//       }
//     }

//     input.addEventListener("input", mask, false);
//     input.addEventListener("focus", mask, false);
//     input.addEventListener("blur", mask, false);
//     input.addEventListener("keydown", mask, false);

//   });

// });

// window.addEventListener('scroll', function () {
//   let y = document.documentElement.scrollTop;
//   if (y > 10) {
//     document.querySelector('header').classList.add('active');
//   } else {
//     document.querySelector('header').classList.remove('active');
//   }
// })



// const swiper_examples = new Swiper('.swiper-examples', {
//   loop: true,
//   navigation: {
//     nextEl: '.swiper-examples-next',
//     prevEl: '.swiper-examples-prev',
//   },
//   breakpoints: {
//     // when window width is >= 640px
//     1025: {
//       slidesPerView: 3,
//       spaceBetween: 20,
//     },
//     550: {
//       slidesPerView: 2,
//       spaceBetween: 20,
//     },
//     280: {
//       slidesPerView: 1,
//       spaceBetween: 0,
//     }
//   }
// });
// const swiper_review = new Swiper('.swiper-review', {
//   loop: true,
//   navigation: {
//     nextEl: '.swiper-review-next',
//     prevEl: '.swiper-review-prev',
//   },
//   breakpoints: {
//     // when window width is >= 640px
//     1400: {
//       slidesPerView: 3,
//       spaceBetween: 20,
//     },
//     800: {
//       slidesPerView: 2,
//       spaceBetween: 20,
//     },
//     550: {
//       slidesPerView: 1,
//       spaceBetween: 0,
//     }
//   }
// });



// var linkToggle = document.querySelectorAll('.js-toggle');

// for (let i = 0; i < linkToggle.length; i++) {

//   linkToggle[i].addEventListener('click', function (event) {

//     event.preventDefault();

//     var container = document.getElementById(this.dataset.container);


//     if (!container.classList.contains('active')) {
//       if (this.classList.contains('req-btn')) {
//         this.textContent = 'Скрыть'
//       }
//       if (this.classList.contains('req-btn1')) {
//         this.textContent = 'Скрыть'
//       }

//       this.classList.add('active');
//       container.classList.add('active');
//       container.style.height = 'auto';

//       var height = container.clientHeight + 'px';

//       container.style.height = '0px';

//       setTimeout(function () {
//         container.style.height = height;
//       }, 0);
//     } else {
//       this.classList.remove('active');
//       if (this.classList.contains('req-btn')) {
//         this.textContent = 'Другие услуги'
//       }
//       if (this.classList.contains('req-btn')) {
//         this.textContent = 'Показать ещё'
//       }
//       container.style.height = '0px';

//       container.addEventListener('transitionend', function () {
//         container.classList.remove('active');
//       }, {
//         once: true
//       });

//     }

//   });

// }
// // Close the dropdown menu if the user clicks outside of it
// window.onclick = function (event) {
//   if (!event.target.matches('.dropbtn')) {
//     var dropdowns = document.getElementsByClassName("dropdown-content");
//     var i;
//     for (i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains('active')) {
//         openDropdown.style.height = '0px';

//         openDropdown.addEventListener('transitionend', function () {
//           openDropdown.classList.remove('active');
//         }, {
//           once: true
//         });
//       }
//     }
//   }
// }

// if (document.querySelector('.animated-cont')) {
//   document.querySelectorAll('.animated-cont').forEach(cont => {
//     var animate_delay = window.innerHeight - cont.dataset.delayOnTop;
//     var rect = cont.getBoundingClientRect();

//     var block_top = rect.top + document.documentElement.scrollTop + animate_delay;
//     var element_animated = false;

//     function animationOnScroll() {
//       if (!element_animated && document.documentElement.scrollTop + window.innerHeight > block_top) {
//         element_animated = true;
//         if (cont.querySelector('.sc-cont')) {
//           cont.querySelectorAll('.point').forEach(item => {
//             item.classList.add("animate");
//           }, false);
//         }
//       }
//     }

//     ready(animationOnScroll());
//     window.addEventListener('scroll', (event) => {
//       animationOnScroll()
//     })
//   }, false);
// };
const swiper_review = new Swiper('.swiper-review', {
  navigation: {
    nextEl: '.swiper-review-next',
    prevEl: '.swiper-review-prev',
  },
  spaceBetween: 20,
  loop: true,
  breakpoints: {
    1000: {
      slidesPerView: 2.5,
      spaceBetween: 20,
    },
    800: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    300: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
  }
});