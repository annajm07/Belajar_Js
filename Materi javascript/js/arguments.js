function testing() {
var hasil = 0;
		for (var i = 0; i < arguments.length; i++) {
		hasil += arguments[i];

		}
		return hasil;
}



console.log(testing(5,4,6,76,87));