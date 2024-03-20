"use strict";
$(document).ready(function () {
  $('.btn').click (function (e) {
    e.preventDefault();
    if (!$.trim($('input').val()) == '') {
      let x = y =>{
        for (let i = 0 ; i < y ; i++) {
          $('.box').append(`<h2>${y}</h2>`);
        }
      };
      let num = h => {
        if (Number(h)){
          return x(h);
        }
        else{
          $('.box').append(`<h2>${h}</h2>`);
        }
      };
      num ($('input').val());
    }
    $('input').val('');
  })
});