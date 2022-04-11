// contoh penggunaan promise


// contoh 1

// let ditepati = false;


// const janji1 = new Promise(function (resolve, reject) {
// 	if(ditepati) {
// 		resolve('janji telah ditepati');
// 	}else {
// 		reject('ingkar janji');
// 	}
// });


// janji1
// .then(function (hasil) {console.log('OK! :' + hasil);})
// .catch(function (hasil) {console.log('NOT OK! :' + hasil)});


// contoh 2

let ditepati = false;


const janji1 = new Promise(function (resolve, reject,) {
	if(ditepati) {
		setTimeout(function () {
		resolve('janji telah ditepati');
		},2000);

	}else {
		setTimeout(function () {
			resolve('ingkar janji');
		},2000);
	}
});

console.log('mulai');
console.log(janji1
.finally(function (hasil) {console.log('selesai menunggu')})
.then(function (hasil) {console.log('OK! :' + hasil)})
.catch(function (hasil) {console.log('NOT OK! :' + hasil)})

);

// console.log(janji1.then(function () {console.log(janji1)}));

console.log('selesai');


