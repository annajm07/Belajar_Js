// cara untuk membuat object pada javascript

// 1.object literal

// let mahasiswa = {
// 	nama : 'Annajm Albupy',
// 	energi : 10,
// 	makan : function (porsi) {
// 		this.energi = this.energi + porsi;
// 		console.log(`hallo ${this.nama} selamat makan`);
// 	}
// };


// 2.function declaration

// function mahasiswa(nama,energi) {
// 	let mhs = {};
// 	mhs.nm = nama;
// 	mhs.enr = energi;

// 	mhs.makan = function (porsi) {
// 		mhs.enr += porsi;

// 		console.log(`hallo ${nama} selamat makan` );
// 	};

// 	mhs.main = function (jam) {
// 		mhs.enr -= jam;
// 		console.log(`hallo ${nama} selamat main`)
// 	};

// 	return mhs;
// };

// let annajm = mahasiswa('annajm',10);


// 3.construktor function(keyword new)

// function mahasiswa(nama,energi) {
// 	this.nm = nama;
// 	this.enr = energi;

// 	this.makan = function (porsi) {
// 		mhs.enr += porsi;

// 		console.log(`hallo ${nama} selamat makan` );
// 	};

// 	this.main = function (jam) {
// 		this.enr -= jam;
// 		console.log(`hallo ${nama} selamat main`)
// 	};

// };

// let annajm = new mahasiswa('annajm',10);


// 4.object.create()

// const methodmahasiswa = {
// 	makan : function (porsi) {
// 		this.enr += porsi;

// 		console.log(`hallo ${this.nm} selamat makan` );
// 	},

// 	main : function (jam) {
// 		this.enr -= jam;
// 		console.log(`hallo ${this.nm} selamat main`);
// 	},

// 	tidur : function (jam) {
// 		this.enr += jam;
// 		console.log(`hallo ${this.nm} selamat tidur`)
// 	}


// };


// function mahasiswa(nama,energi) {
// 	let mahasiswa = Object.create(methodmahasiswa);
// 	mahasiswa.nm = nama;
// 	mahasiswa.enr = energi;

// 	return mahasiswa;
	

// };

// let annajm =  mahasiswa('annajm',10);



// penggunaan object dengan prototype

// function mahasiswa(nama,energi) {
// 	this.nm = nama;
// 	this.enr = energi;	
// };

// mahasiswa.prototype.makan = function (porsi) {
// 	this.enr += porsi;
// 	console.log(`hallo ${this.nm} selamat makan`)
// }

// let annajm =  new mahasiswa('annajm',10);


// penggunaan object versi class

class mahasiswa {
	constructor(nama,energi) {
		this.nm = nama;
		this.enr = energi;
	}

	makan(porsi){
		this.enr += porsi;
		return `hallo ${this.nm} selamat makan` ;
	}

	tidur(jam) {
		this.enr += jam * 2;
		console.log(`hallo ${this.nm} selamat tidur`);
	}
};


let annajm = new mahasiswa('Annajm Albupy',10);