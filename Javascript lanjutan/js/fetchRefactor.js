								// WEB REST API OMDB created by annajm

// mengambil elemen tombol search serta memberi eventHandler click
const btnSearch = document.querySelector('.btn-search');
	btnSearch.addEventListener('click',async function () {
	const info = document.querySelector('.info');
	try {
	const inputKeyword = document.querySelector('.input-text');
	const film = await ambilMovie(inputKeyword.value);
	info.innerHTML = ``;
	tampilFilm(film.Search);


	} catch (err) {
			const hpsTambah = document.querySelector('.tambah');
			
			const infoMovie = notFound(err);
			hpsTambah.innerHTML= ``;
	        info.innerHTML = infoMovie;
	};

		
});

// memberi event click pada document
document.addEventListener('click',async function (e) {
	// jika tombol detail di klik
	if (e.target.classList.contains('detail-button')) {

		// reset template detail film
		const rTF = document.querySelector('.modal-body');
		rTF.innerHTML = ``;

		// ambil semua elemen tombol detail
		const btnDetail = document.querySelectorAll('.detail-button');

		// ambil imdbID nya
		const tokenMovie = e.target.dataset.kode;

		// tampung function ambilFilm kedalam variabel
		const detailFilm = await ambilDetail(tokenMovie);
	
		// tampilkan detail film,ketika tombol film di klik
		tampilDetailFilm(detailFilm);
	}
});

			
// LIST FUNCTION

// mengambil data detail film dari API OMDB
function ambilDetail(abD) {
	return fetch('http://www.omdbapi.com/?=&apikey=8aa7471f&i=' + abD)
	.then(function (hasil) {return hasil.json()})
	.then(function (id) {return id;})	
};

// memasukkan detail film kedalam sebuah template html
function tampilDetailFilm(tDF) {
	const tdFilm = showDetail(tDF);
	const template = document.querySelector('.modal-body');
	template.innerHTML = tdFilm;
};

// mengambil film dari API OMDB
function ambilMovie(idMovie) {
 return fetch('http://www.omdbapi.com/?=&apikey=8aa7471f&s=' + idMovie)
	.then(function (hasil) {if(!hasil.ok){throw new Error(hasil.statusText);}return hasil.json(); })
	.then(function (cek) {if(cek.Response == "False"){throw new Error(cek.Error)}return cek;});
};

// memasukkan film kedalam sebuah template bootsrap
function tampilFilm(fl) {
	let film = '';
	fl.forEach(function(e) {
		return film = film + showFilm(e);});
	const containerFilm = document.querySelector('.tambah');
	containerFilm.innerHTML = film;
};

// template detail film
function showDetail(id) {
	return `<div class="container-fluid">
        <div class="row">

          <div class="col-md-3">
            <img src="${id.Poster}" class="img-fluid">
          </div>

          <div class="col-md">
            <ul class="list-group ">
            <li class="list-group-item"><strong>${id.Title} ${id.Year}</strong></li>
            <li class="list-group-item"><strong>Duration</strong> : ${id.Runtime}</li>
            <li class="list-group-item"><strong>Director</strong> : ${id.Director} </li>
            <li class="list-group-item"><strong>Written</strong> : ${id.Writer}</li>
            <li class="list-group-item"><strong>Actors</strong> : ${id.Actors}g</li>
            <li class="list-group-item"><strong>Country</strong> : ${id.Country}</li>
            <li class="list-group-item"><strong>Awards</strong> : ${id.Awards}</li>
            </ul>
          </div>

        </div>
      </div>`;
};

// template container film
function showFilm(el) {
	return `<div class="col-md-4 my-3">
          <div class="card">
            <img src="${el.Poster}" class="card-img-top">
            <div class="card-body">
              <h5 class="card-title">${el.Title}</h5>
              <h6 class="card-subtitle mb-2 text-muted">${el.Year}</h6>
              <a href="#" class="btn btn-primary detail-button" data-toggle="modal" data-kode="${el.imdbID}" data-target="#detail">Detail</a>
            </div>
          </div>
        </div>`;
};

// film tidak ditemukan
function notFound(error) {
	return `<div class="col-md">
           <h4><I>${error}</I></h4>
         </div>`;	
};