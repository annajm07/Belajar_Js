// function coba(nama) {
// 	alert(`hallo ${nama}`)
// };

 

function tampilNama(tampil) {
	const input = prompt('masukkan nama kamu: ');

tampil(input);
};

// tampilNama(coba);
tampilNama(function (nama) {
	alert(`hallo ${nama}`)
});


// const nama = 'annajm'
// function tampil (tes){
// 	return alert(`selamat sore ${tes}`);
// };


// tampil(nama);

 