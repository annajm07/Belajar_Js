



// for(let i = 0; i < nama.length; i++) {
// 	console.log(nama[i])
// };


// nama.forEach(function (el) {
// 	console.log(el);
// });

// for(const nm of nama) {
// 	console.log(nm)
// };

// const nama = ['annajm','nia','nisa','yeye','lep','dadi'];


// nama.forEach(function (el,i) {
// 	console.log(`${el} adalah nama ke ${i+1}`);
// });

// for(const [i,nm] of nama.entries()) {
// 	console.log(`${nm} adalah nama ke ${i+1}`);
// };

// for in

const nama = {
	nama : 'annajm',
	umur : 22,
	hobi : 'ngoding'
};


for(const nm in nama) {
	console.log(`${nm} adalah ${nama[nm]}`);
};