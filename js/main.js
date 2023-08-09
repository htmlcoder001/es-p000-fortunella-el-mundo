// //tabs
// (function($) {
//     jQuery.fn.lightTabs = function(options) {
//         var createTabs = function() {
//             tabs = this;
//             i = 0;
//             showPage = function(i) {
//                 $(tabs).children("div").children("div").hide();
//                 $(tabs).children("div").children("div").eq(i).show();
//                 $(tabs).children("ul").children("li").removeClass("active");
//                 $(tabs).children("ul").children("li").eq(i).addClass("active");
//             }
//             showPage(0);
//             $(tabs).children("ul").children("li").each(function(index, element) {
//                 $(element).attr("data-page", i);
//                 i++;
//             });
//             $(tabs).children("ul").children("li").click(function() {
//                 showPage(parseInt($(this).attr("data-page")));
//             });
//         };
//         return this.each(createTabs);
//     };
// })(jQuery);
// $(document).ready(function() {
//     $(".tabs").lightTabs();
// });


//calculator
// $(document).ready(function() {
//     $('.calc-form input').change(function() {
//         calc();
//     });
//     $('.calc-form input').keyup(function() {
//         calc();
//     });
// });

// function calc() {
//     var age = $('.calc-form .inp1').val();
//     var height2 = $('.calc-form .inp2').val();
//     var weight2 = $('.calc-form .inp3').val();
//     var summs = height2 - weight2;
//     age = parseInt(age.replace(/\D+/g, ""));
//     height2 = parseInt(height2.replace(/\D+/g, ""));
//     weight2 = parseInt(weight2.replace(/\D+/g, ""));
//     console.log(summs);
//     if (age > 0 && height2 > 0 && weight2 > 0) {
//       if (summs >= 115) {
//           $('.calc-form .line1').attr('style', 'visibility: display;');
//           $('.calc-form .line2').attr('style', 'visibility: display;');
//           $('.calc-form .line1').html('<span class="green">Suteţi în formă excelentă.</span>');
//           $('.calc-form .line2').html('Pentru a o întreține, este suficient să luați Guavital o dată pe săptămână.');
//       } else {
//           if (summs >= 104 && summs <= 114) {
//               $('.calc-form .line1').attr('style', 'visibility: display;');
//               $('.calc-form .line2').attr('style', 'visibility: display;');
//               $('.calc-form .line1').html('Aveti mai puţin de 10 kg de greutate excesivă.');
//               $('.calc-form .line2').html('Este suficient să luaţi un curs de 2 săptămâni de Guavital.');
//           } else {
//               if (summs >= 90 && summs <= 103) {
//                   $('.calc-form .line1').attr('style', 'visibility: display;');
//                   $('.calc-form .line2').attr('style', 'visibility: display;');
//                   $('.calc-form .line1').html('Aveti mai mult de 18 kg greutate excesivă.');
//                   $('.calc-form .line2').html('Pentru a scăpa de ea, vă recomandăm să luați cursul complet de Guavital. Pierderea în greutate preconizată în prima lună este de la 7 până la 14 kg.');
//               } else {
//                   if (summs <= 89) {
//                       $('.calc-form .line1').attr('style', 'visibility: display;');
//                       $('.calc-form .line2').attr('style', 'visibility: display;');
//                       $('.calc-form .line1').html('Unteţi în etapa extremă a obezității.');
//                       $('.calc-form .line2').html('Luați urgent cursul Guavital (de la 10 până la 14 săptămâni) și adăugați activitate fizică. În acest timp, puteți pierde de la 25 kg la 40 kg.');
//                   }
//               }
//           }
//       }
//   }
// }



// //wheel
// var resultWrapper = document.querySelector('.spin-result-wrapper');
// var wheel = document.querySelector('.wheel-img');

// function spin() {
//   if (wheel.classList.contains('rotated')) {
//     resultWrapper.style.display = "block";
//   } else {
//     wheel.classList.add('super-rotation');
//     setTimeout(function () {
//       resultWrapper.style.display = "block";
//     }, 8000);
//     setTimeout(function () {
//       $('.spin-wrapper').slideUp();
//       $('.order_block').slideDown();
//       start_timer();
//     }, 10000);
//     wheel.classList.add('rotated');
//   }
// }
// var closePopup = document.querySelector('.close-popup');
// $('.close-popup, .pop-up-button').click(function (e) {
//   e.preventDefault();
//   $('.spin-result-wrapper').fadeOut();


//   var top = $('#order0').offset().top;
//   $('body,html').animate({
//     scrollTop: top
//   }, 800);
// });



var timeNow = 600;
var intr;

function start_timer() {
  intr = setInterval(tick, 1000);
}

function tick() {
  timeNow = timeNow - 1;
  var mins = Math.floor(timeNow / 60);
  var secs = timeNow - mins * 60;
  if (mins == 0 && secs == 0) {
    clearInterval(intr);
  }
  secs = secs >= 10 ? secs : "0" + secs;
  $(".timer").html("0" + mins + ':' + secs);
  // $("#min-block2").html("0" + mins);
  // $("#sec-block2").html(secs);
}

// scroll
$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
  });

const months=['ianuarie','februarie','martie','aprilie','mai','iunie','iulie','august','septembrie','octombrie','noiembrie','decembrie'],monthMin = ['','','','','','','','','','','',''],days = ['duminică','luni','marți','miercuri','joi','vineri','sâmbătă'],daysMin = ['','','','','','',''],seasons = ['iarnă','arc','vară','toamnă'];function postDate(daysName, daysMinName, monthsName, monthsMinName, seasonsName) {const _counterLength = 60;for (let counter = 0; counter < _counterLength; counter++) {innerDate(counter, 'date-');innerDate(counter, 'date')} function innerDate(counter, dateType) {let newCounter;dateType === 'date-' ? newCounter = -counter : newCounter = counter; const _msInDay = 86400000, _localDate = new Date(Date.now() + (newCounter * _msInDay)), _day = _localDate.getDate(), _month = _localDate.getMonth() + 1, _year = _localDate.getFullYear(); const dayDefault = addZero(_day), monthDefault = addZero(_month), defaultDate = dayDefault + '.' + monthDefault + '.' + _year; const dateClass = dateType + counter, nodeList = document.querySelectorAll('.' + dateClass); for (let i = 0; i < nodeList.length; i++) {const dateFormat = nodeList[i].dataset.format;dateFormat !== undefined && dateFormat !== ''? nodeList[i].innerHTML = String(changeFormat(dayDefault, _month, _year, dateFormat, newCounter)): nodeList[i].innerHTML = defaultDate} } function changeFormat(_day, _month, _year, format, counter) { let innerFormat = format; const testFormat = ["dd","mm","yyyy","monthFull"], dateFormat = { dd: _day, mm: addZero(_month), yyyy: _year, monthFull: getMonthName(_month, monthsName, false), }; for (let i = 0; i < testFormat.length; i++) { let string = testFormat[i]; let regExp = new RegExp(string); innerFormat = innerFormat.replace(regExp, dateFormat[string]); } return innerFormat.split(' ').join(' ') } function getMonthName(_month, monthsName, bigFirstLetter, counter) { const monthCounter = !!counter ? counter : 0; let month; _month + monthCounter > 12 ? month = monthCounter - (12 - _month) : month = _month + monthCounter; _month + monthCounter <= 0 ? month = 12 + monthCounter + 1 : month = _month + monthCounter; return changeFirstLetter(bigFirstLetter, monthsName[month - 1]) } function addZero(numb){return numb<10?'0'+numb:numb} function changeFirstLetter(isBig,str){return isBig&&str&&str.length>0?str[0].toUpperCase()+str.slice(1):str} }if (document.body.classList.contains('ev-date')) {document.addEventListener("DOMContentLoaded", function () {postDate(days, daysMin, months, monthMin, seasons)});}