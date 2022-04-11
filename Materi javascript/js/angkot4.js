var jumlah = 10;
var beroperasi = 6;
var angka = 1;

for (angka = 1; angka <= jumlah; angka++) {

	if (angka <= beroperasi && angka !== 5) {
		
		console.log ("Angkot No. " + angka + " Beroperasi dengan baik")
	}
	else if (angka === 8 || angka === 10 || angka === 5) {
		
		console.log ("Angkot No. " + angka + " Sedang lembur")
	}
	else{ console.log ("Angkot No. " + angka + " Sedang tidak beroperasi")

	}
}


