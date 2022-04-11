// ambil semua elemen video

const video = Array.from(document.querySelectorAll('[data-duration]'));



// pilih hanya javascript lanjutan
let newVideo = video.filter(function (vd) {return vd.innerHTML.includes('Javascript Lanjutan')} );
	

// ambil durasi masing masing video
let waktu = newVideo.map(function (wt) {
	return wt.dataset.duration;
});

// ubah durasi jadi int,ubah menit jadi detik

let ubah = waktu.map(function (ub) {
	let split = ub.split(':').map(function (float) {
		return parseFloat(float);
	});
return split;
});


// jumlahkan semua detik
let jumlahDetik = ubah.map(function (jd) {

	return (jd[0] * 60) + jd[1] ;
});

let totalDetikKeseluruhan = jumlahDetik.reduce(function (total,bagian) {
	return total + bagian;
});

// ubah formatnya jadi jam,menit,detik
let jam = Math.floor(totalDetikKeseluruhan/3600);
let sisaPembagianJam = totalDetikKeseluruhan - jam * 3600;

let menit = Math.floor(sisaPembagianJam/60);
let sisaPembagianMenit = sisaPembagianJam - menit * 60;

let detik = totalDetikKeseluruhan - (jam * 3600 + menit * 60)  

// simpan di dom


const durasi = document.querySelector('.total-durasi');
const jumlahVideo = document.querySelector('.jumlah-video');

durasi.innerHTML = (`${jam} jam ${menit} menit ${detik} detik`);

jumlahVideo.innerHTML = (`${newVideo.length} buah`)

console.log(durasi);