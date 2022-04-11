const container = document.querySelector('.container');

container.addEventListener('click',function (e) {

if (e.target.className == 'close') {

	e.target.parentElement.style.display = 'none';
};


});








// const exit = document.querySelectorAll('.close');


// exit.forEach(function (el) {
// 	el.addEventListener('click', function (p) {
// 		p.target.parentElement.style.display = ('none');
// 		p.preventDefault();
// 	});
// });



// for (let i = 0; i < exit.length; i++) {
	
// 	exit[i].addEventListener('click',function (el) {

// 		el.target.parentElement.style.display = ('none');


// });

// };








// const kartu = document.querySelector('.card');

// const exit = kartu.querySelector('.close');

// exit.addEventListener('click',function () {

// kartu.style.display = ('none');

// });