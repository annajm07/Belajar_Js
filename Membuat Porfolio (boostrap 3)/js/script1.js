// event pada saat link di klik

$('.page-scroll').on('click',function (e) {


// ambil isi href

const href = $(this).attr('href');

// tangkap element yang bersangkutan
const elementHref = $(href);



// pindahkan scroll

$('html , body').animate({
	scrollTop: elementHref.offset().top - 50
},500);

e.preventDefault();



});


