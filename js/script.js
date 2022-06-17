// smooth scroll
$('.nav-link').on('click', function(e){

    var tujuan = $(this).attr('href');
    var elementujuan = $(tujuan);
    // $('body').scrolltop()
    $('html').animate({
        scrollTop: elementujuan.offset().top -64
    }, 300);


    e.preventDefault();
});