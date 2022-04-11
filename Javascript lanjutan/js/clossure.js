// function init() {
// 	let nama = 'Annajm Albupy';
// 	function tampilnama(){
// 		console.log(nama);
// 	}
// 	tampilnama();
// };

// init();



let init = (function () {
	let counter = 0;
	return function () {
	return	++counter;
	}
})();



console.log(init());
console.log(init());
console.log(init());
console.log(init());
console.log(init());