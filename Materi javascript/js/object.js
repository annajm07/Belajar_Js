// var mahasiswa = {

// 	nama : 'Annajm Albupy',
	
// 	lulus: true,

// 	ipSemester : [2.90, 3.65, 3.76, 3.34, 3.45],

// 	ipKumulatif : function () {
// 		var total = 0;
// 		var ips = this.ipSemester;
// 		for (var i = 0; i < ips.length; i++) {
// 			total += ips[i];
// 		}
// 		return total/ips.length;
// 	}
// }

// console.log(mahasiswa.ipKumulatif());


// var nama = {

// 	nama : 'Annajm Albupy',
// 	umur : 22,
// 	alamat : ['bandar buat','payakumbuh','air tawar'],
// 	hobi : {
// 		jogging : '30%',
// 		makan   : '40%',
// 		belajar : '30%'
// 	}

// };



function Mahasiswa(nama,nim,jurusan,prodi) {
	this.nm = nama;
	this.nim = nim;
	this.jrs = jurusan;
	this.prd = prodi;
}


var mhs = new Mahasiswa('annajm','16076041','informatika','pendidikan');

console.log(mhs.nm);



