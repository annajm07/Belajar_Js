// function jumlah(...angka) {
// 	return angka.reduce(function (acc,cr) {
// 		return acc + cr;
// 	});
// }

// cara For biasa
// function jumlah(...angka) {
	
// 	let total = 0;
// 	for (let i = 0; i < angka.length; i++) {
// 		total += angka[i];
// 	}
// 	return total;
// };

// cara forEach
// function jumlah(...angka) {
	
// 	let total = 0;
// 	angka.forEach(function (a) {
// 		return total += a
// 	});
// 	return total;
// 	};

// cara for of

// function jumlah(...angka) {
	
// 	let total = 0;
// 	for(const a of angka){
// 		total = total + a;
// 	}
// 	return total;
// };

// menggunakan method reduce


// function jumlah(...angka) {
// const newAngka = angka.reduce(function (acc,cr) {
// 	return acc + cr;
// });
// return newAngka;
// 	};
// console.log(jumlah(1,2,4,5,6,6,7,8,5,7,8,67));


function coba(type,...values) {
	return values.filter(function (v) {
		return typeof v === type;
	})
};


console.log(coba('boolean','aa',5,true,false,'annajm','albupy',65));