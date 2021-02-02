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