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
  const TimeoutModal = new bootstrap.Modal('#TimeoutForm', {})
  setTimeout(() => {
    TimeoutModal.show()
  }, 300);
  const TimeoutModalEl = document.getElementById('CheckForm')
  TimeoutModalEl.addEventListener('show.bs.modal', event => {
    if (typeof localStorage.getItem("min") !== 'undefined' && typeof localStorage.getItem("sec") !== 'undefined' && localStorage.getItem("min") != null && localStorage.getItem("sec") != null) {
      var min = localStorage.getItem("min");
      var sec = localStorage.getItem("sec");
    } else {
      var min = 4;
      var sec = 59;
    }
    var time;

    setInterval(function () {

      localStorage.setItem("min", min);
      localStorage.setItem("sec", sec);
      time = min + " : " + sec;
      document.getElementById("timer-time").innerHTML = time;
      if (sec == 0) {
        if (min != 0) {
          min--;
          sec = 59;
          if (min < 10) {
            min = "0" + min;
          }
        } else {
          document.getElementById("timer-btn").style.display = "none";
          document.getElementById("timer-success-btn").style.display = "flex";
          localStorage.clear();
        }
      } else {
        sec--;
        if (sec < 10) {
          sec = "0" + sec;
        }
      }
    }, 1000);
  })
  
  // $(function () {
  //   // setting
  //   var debug = false;

  //   // fake ajax request
  //   // $.mockjax({
  //   //   url: '/api/tfa',
  //   //   dataType: 'json',
  //   //   response: function (settings) {
  //   //     this.responseText = {
  //   //       "ok": (Math.random() >= 0.5) // random true/false
  //   //     };
  //   //   },
  //   //   responseTime: 1000
  //   // });

  //   // pincode
  //   var _pincode = [],
  //   _req = null;

  //   // main form
  //   var $form = $('#form');

  //   // pincode group
  //   var $group = $form.find('.form__pincode');

  //   // all input fields
  //   var $inputs = $group.find(':input');

  //   // input fields
  //   var $first = $form.find('[name=pincode-1]'),
  //     $second = $form.find('[name=pincode-2]'),
  //     $third = $form.find('[name=pincode-3]'),
  //     $fourth = $form.find('[name=pincode-4]');

  //   // submit button
  //   var $button = $form.find('#submit-code');

  //   // all fields
  //   $inputs
  //     .on('keyup', function (event) {
  //       var code = event.keyCode || event.which;

  //       if (code === 9 && !event.shiftKey) {
  //         // prevent default event
  //         event.preventDefault();

  //         // focus to submit button
  //         $('#submit-code').focus();
  //       }
  //     })
  //     .inputmask({
  //       mask: '9',
  //       placeholder: '',
  //       showMaskOnHover: false,
  //       showMaskOnFocus: false,
  //       clearIncomplete: true,
  //       onincomplete: function () {
  //         !debug || console.log('inputmask incomplete');
  //       },
  //       oncleared: function () {
  //         var index = $inputs.index(this),
  //           prev = index - 1,
  //           next = index + 1;

  //         if (prev >= 0) {
  //           // clear field
  //           $inputs.eq(prev).val('');

  //           // focus field
  //           $inputs.eq(prev).focus();

  //           // remove last nubmer
  //           _pincode.splice(-1, 1)
  //         } else {
  //           return false;
  //         }

  //         !debug || console.log('[oncleared]', prev, index, next);
  //       },
  //       onKeyValidation: function (key, result) {
  //         var index = $inputs.index(this),
  //           prev = index - 1,
  //           next = index + 1;

  //         // focus to next field
  //         if (prev < 6) {
  //           $inputs.eq(next).focus();
  //         }

  //         !debug || console.log('[onKeyValidation]', index, key, result, _pincode);
  //       },
  //       onBeforePaste: function (data, opts) {
  //         $.each(data.split(''), function (index, value) {
  //           // set value
  //           $inputs.eq(index).val(value);

  //           !debug || console.log('[onBeforePaste:each]', index, value);
  //         });

  //         return false;
  //       }
  //     });

  //   // first field
  //   $('[name=pincode-1]')
  //     .on('focus', function (event) {
  //       !debug || console.log('[1:focus]', _pincode);
  //     })
  //     .inputmask({
  //       oncomplete: function () {
  //         // add first character
  //         _pincode.push($(this).val());

  //         // focus to second field
  //         $('[name=pincode-2]').focus();

  //         !debug || console.log('[1:oncomplete]', _pincode);
  //       }
  //     });

  //   // second field
  //   $('[name=pincode-2]')
  //     .on('focus', function (event) {
  //       if (!($first.val().trim() !== '')) {
  //         // prevent default
  //         event.preventDefault();

  //         // reset pincode
  //         _pincode = [];

  //         // handle each field
  //         $inputs
  //           .each(function () {
  //             // clear each field
  //             $(this).val('');
  //           });

  //         // focus to first field
  //         $first.focus();
  //       }

  //       !debug || console.log('[2:focus]', _pincode);
  //     })
  //     .inputmask({
  //       oncomplete: function () {
  //         // add second character
  //         _pincode.push($(this).val());

  //         // focus to third field
  //         $('[name=pincode-3]').focus();

  //         !debug || console.log('[2:oncomplete]', _pincode);
  //       }
  //     });

  //   // third field
  //   $('[name=pincode-3]')
  //     .on('focus', function (event) {
  //       if (!($first.val().trim() !== '' &&
  //           $second.val().trim() !== '')) {
  //         // prevent default
  //         event.preventDefault();

  //         // reset pincode
  //         _pincode = [];

  //         // handle each field
  //         $inputs
  //           .each(function () {
  //             // clear each field
  //             $(this).val('');
  //           });

  //         // focus to first field
  //         $first.focus();
  //       }

  //       !debug || console.log('[3:focus]', _pincode);
  //     })
  //     .inputmask({
  //       oncomplete: function () {
  //         // add third character
  //         _pincode.push($(this).val());

  //         // focus to fourth field
  //         $('[name=pincode-4]').focus();

  //         !debug || console.log('[3:oncomplete]', _pincode);
  //       }
  //     });

  //   // sixth field
  //   $('[name=pincode-4]')
  //     .on('focus', function (event) {
  //       if (!($first.val().trim() !== '' &&
  //           $second.val().trim() !== '' &&
  //           $third.val().trim() !== '')) {
  //         // prevent default
  //         event.preventDefault();

  //         // reset pincode
  //         _pincode = [];

  //         // handle each field
  //         $inputs
  //           .each(function () {
  //             // clear each field
  //             $(this).val('');
  //           });

  //         // focus to first field
  //         $first.focus();
  //       }

  //       !debug || console.log('[4:focus]', _pincode);
  //     })
  //     .inputmask({
  //       oncomplete: function () {
  //         // add sixth character
  //         _pincode.push($(this).val());

  //         // pin length not equal to six characters
  //         if (_pincode.length !== 6) {
  //           // reset pin
  //           _pincode = [];

  //           // handle each field
  //           $inputs
  //             .each(function () {
  //               // clear each field
  //               $(this).val('');
  //             });

  //           // focus to first field
  //           $('[name=pincode-1]').focus();
  //         } else {
  //           // handle each field
  //           $inputs.each(function () {
  //             // disable field
  //             $(this).prop('disabled', true);
  //           });

  //           // send request
  //           _req = $.ajax({
  //               type: 'POST',
  //               url: '/api/tfa',
  //               data: {
  //                 'code': _pincode.join(''),
  //                 '_csrf': ''
  //               }
  //             })
  //             .done(function (data, textStatus, jqXHR) {
  //               try {
  //                 !debug || console.log('data', data);

  //                 if (data.ok === true) {
  //                   $group.addClass('form__group--success');
  //                   $button.removeAttr('disabled');
  //                 }

  //                 if (data.ok === false) {
  //                   $group.addClass('form__group--error');
  //                 }
  //               } catch (err) {

  //               }
  //             })
  //             .fail(function (jqXHR, textStatus, errorThrown) {
  //               $group.removeClass('form__group--error');
  //             })
  //             .always(function (dataOrjqXHR, textStatus, jqXHRorErrorThrown) {
  //               // reset pin
  //               _pincode = [];

  //               // reset request
  //               _req = null;

  //               setTimeout(function () {
  //                 // handle each field
  //                 $inputs.each(function () {
  //                   // clear all fields
  //                   $(this).val('');

  //                   // enable all fields
  //                   $(this).prop('disabled', false);
  //                 });

  //                 // remove response status class
  //                 $group.removeClass('form__group--success form__group--error');

  //                 // disable submit button
  //                 $button.attr('disabled', true);

  //                 // focus to first field
  //                 $first.focus();
  //               }, 2000);
  //             });
  //         }

  //         !debug || console.log('[4:oncomplete]', _pincode);
  //       }
  //     });
  // });

});
$(document).ready(function () {
  $('.burger').click(function (event) {
    $('.burger, .mobile-header').toggleClass('activebur');
    $('body').toggleClass('lock');
  })
  $('.links a').click(function (event) {
    $('.burger, .mobile-header').removeClass('activebur');
    $('body').removeClass('lock');
  })
});
$(document).ready(function () {
  $('.filters-mobile-cont').click(function (event) {
    $('.filters-cont').addClass('activebur');
    $('body').addClass('lock');
  })
  $('.filters-close').click(function (event) {
    $('.filters-cont').removeClass('activebur');
    $('.filters-cont .accordion.active').click();
    $('body').removeClass('lock');
  })
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


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

const rangeInput = document.querySelectorAll(".range-input input"),
  priceInput = document.querySelectorAll(".price-input input"),
  range = document.querySelector(".slider .progress");
let priceGap = 1000;

priceInput.forEach((input) => {
  input.addEventListener("input", (e) => {

    let minPrice = parseInt(priceInput[0].value),
      maxPrice = parseInt(priceInput[1].value);

    if (maxPrice - minPrice >= priceGap && maxPrice <= rangeInput[1].max) {
      if (e.target.className === "input-min") {
        rangeInput[0].value = minPrice;
        range.style.left = (minPrice / rangeInput[0].max) * 100 + "%";
      } else {
        rangeInput[1].value = maxPrice;
        range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
      }
    }
  });
});

rangeInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minVal = parseInt(rangeInput[0].value),
      maxVal = parseInt(rangeInput[1].value);

    if (maxVal - minVal < priceGap) {
      if (e.target.className === "range-min") {
        rangeInput[0].value = maxVal - priceGap;
      } else {
        rangeInput[1].value = minVal + priceGap;
      }
    } else {
      priceInput[0].value = minVal;
      priceInput[1].value = maxVal;
      range.style.left = (minVal / rangeInput[0].max) * 100 + "%";
      range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
    }
  });
});

document.querySelectorAll(".product-counter").forEach(product_counter => {
  let counter = 0;

  const counterValue = product_counter.querySelector('.counter-value');
  const incrementBtn = product_counter.querySelector('.increment-btn');
  const decrementBtn = product_counter.querySelector('.decrement-btn');

  // To increment the value of counter
  incrementBtn.addEventListener('click', () => {
    counter++;
    counterValue.innerHTML = counter;
    if (counter > 1) {
      decrementBtn.disabled = false
    }
  });

  // To decrement the value of counter
  decrementBtn.addEventListener('click', () => {
    counter--;
    counterValue.innerHTML = counter;
    if (counter == 1) {
      decrementBtn.disabled = true
    }
  });
});


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
// const swiper_review = new Swiper('.swiper-review', {
//   navigation: {
//     nextEl: '.swiper-review-next',
//     prevEl: '.swiper-review-prev',
//   },
//   spaceBetween: 20,
//   loop: true,
//   breakpoints: {
//     1000: {
//       slidesPerView: 2.5,
//       spaceBetween: 20,
//     },
//     800: {
//       slidesPerView: 2,
//       spaceBetween: 20,
//     },
//     300: {
//       slidesPerView: 1,
//       spaceBetween: 20,
//     },
//   }
// });