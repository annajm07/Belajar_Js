const container = document.querySelector('.container');
const bg = document.querySelector('.gambar');
const hapus = document.querySelectorAll('.th');

container.addEventListener('click', function (e) {
	
console.log(e.target);

	if (e.target.className == 'th') {
		// cara 1
			bg.src = e.target.src;

		// cara 2
			// const n = e.target.src;
			// bg.setAttribute('src',n);

			bg.classList.add('gy');

			setTimeout(function () {
				bg.classList.remove('gy');
			},500)

			hapus.forEach(function (hps) {
				
				hps.className = 'th';
			});

			e.target.classList.add('aktif');


	};


	
});