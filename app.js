"use strict";
$(document).ready(function () {
  
  $('.btn').click(function (e) { 
    e.preventDefault();
    if (!$.trim($('input').val()) == '') {
      let a = b => {
        for (let i = 0; i < b; i++) {$('.box').append(`<h2>${b}</h2>`); }
      }
      let c = f => Number(f) ? a(f) :  $('.box').append(`<h2>${f}</h2>`);
      c($('input').val());
    }
    $('input').val('');
  })

});