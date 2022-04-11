const angka = [1,3,4,5,6,7,6,4,6,9,8];

// const newAngka= [];


// for (let i = 0; i < angka.length; i++) {

// 	if (i >= 3) {
// 		newAngka.push(angka[i]);
// 	}
// };

// console.log(newAngka);

const newAngka = angka.filter(function (a) {
	return a >= 3;
});

console.log(newAngka);