$('.btn').on('click',function () {

	$.ajax({
		url: 'http://www.omdbapi.com/?=&apikey=8aa7471f&s=' + $('.form-control').val(),

		success: function (hasil) {
			const tampil = hasil.Search;

			let film = '';
			tampil.forEach(function (e) {
			film += showFilm(e);
			});

			$('.tambah').html(film);

			$('.detail-button').on('click', function () {

			$('.container-fluid').remove();
			
			$.ajax({
				url: `http://www.omdbapi.com/?=&apikey=8aa7471f&i=`+ $(this).data('kode'),

				success: function (id) {
				const detail = showDetail(id);

	      $('.modal-body').html(detail);
				},

				error: function (hasil) {
					console.log(hasil.responseText);
				}
			});


			});


		},
		error: function (hasil) {
			console.log(hasil.responseText);
		}
	});


});



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

function showFilm(e) {
	return `<div class="col-md-4 my-3">
          <div class="card">
            <img src="${e.Poster}" class="card-img-top">
            <div class="card-body">
              <h5 class="card-title">${e.Title}</h5>
              <h6 class="card-subtitle mb-2 text-muted">${e.Year}</h6>
              <a href="#" class="btn btn-primary detail-button" data-toggle="modal" data-kode="${e.imdbID}" data-target="#detail">Detail</a>
            </div>
          </div>
        </div>`;
};