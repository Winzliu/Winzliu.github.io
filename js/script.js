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

//navbar bawah
const list = document.querySelectorAll('.list');
function activelink(){
    list.forEach((item) =>
    item.classList.remove('active'));
    this.classList.add('active');
}
list.forEach((item) =>
item.addEventListener('click',activelink));