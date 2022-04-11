// const arr = ['annajm','albupy','berhasil'];



// const[a,b,c] = arr;


// function penjumlahanDanPerkalian(a,b) {
// 	return [a+b,a*b];
// };



// const [jumlah,kali] = penjumlahanDanPerkalian(5,7);


// console.log(kali);

// const mahasiswa = {
// 	nama : 'annajm albupy',
// 	umur : '22',
// 	jurusan : 'informatika'
// };


// function cetakMahasiswa (mhs) {
// 	return `nama saya ${mhs.nama},saya berumur ${mhs.umur} tahun dan saya saat ini mengambil jurusan ${mhs.jurusan}`
// };


// console.log(cetakMahasiswa(mahasiswa));

const mahasiswa = {
	nama : 'annajm albupy',
	umur : '22',
	jurusan : 'informatika'
};


function cetakMahasiswa ({nama,umur,jurusan}) {
	return `nama saya ${nama},saya berumur ${umur} tahun dan saya saat ini mengambil jurusan ${jurusan}`
};


console.log(cetakMahasiswa(mahasiswa));