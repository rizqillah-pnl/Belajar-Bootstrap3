// membuat event saat link di klik
$('.page-scroll').on('click', function (e) {

  //ambil isi href
  var tujuan = $(this).attr('href');
  //tangkap elemen yang bersangkutan
  var elementTujuan = $(tujuan);

  //pindahkan scroll
  $('html, body').animate({
    scrollTop: elementTujuan.offset().top - 50
  }, 700, 'easeInOutExpo');

  e.preventDefault();

});



// parallax
// about
$(window).on('load', function () {
  $('.pKiri').addClass('pMuncul');
  $('.pKanan').addClass('pMuncul');
});


$(window).scroll(function () {
  var wScroll = $(this).scrollTop();

  //jumbotron
  $('.jumbotron img').css({
    'transform': 'translate(0px, ' + wScroll / 3 + '%)'
  });

  $('.jumbotron h1').css({
    'transform': 'translate(0px, ' + wScroll / 1.8 + '%)'
  });

  $('.jumbotron p').css({
    'transform': 'translate(0px, ' + wScroll / 1 + '%)'
  });


  //portfolio
  if (wScroll > $('.portfolio').offset().top - 450) {
    $('.portfolio .thumbnail').each(function (i) {
      setTimeout(function () {
        $('.portfolio .thumbnail').eq(i).addClass('muncul');
      }, 300 * (i + 1));
    });


  }
});









