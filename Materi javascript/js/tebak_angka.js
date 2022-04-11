alert('Selamat datang di permainan tebak angka\n Kamu Punya 3 kali kesempatan untuk menebak \nsilahkan masukkan angka 1 - 10');
var cek = true;
var nyawa = 3;

var acak = Math.floor(Math.random() * 10) + 1 ;


		var user = '';

		console.log(acak);
		var i = nyawa ;

	for (i; i > 0; i--) {


		// user memasukkan angka
		user = prompt('Kesempatan ke ' + i);


		//aturan main
		var hasil = '';
		if (user == acak) {

		hasil = 'BENAR!! \nyang kami maksud memang angka ' + user;
		alert(hasil);
		break;

		}else if (user < acak && user > 0) {

			hasil = 'SALAH!! \n yang anda masukkan adalah angka ' + user + '\n Coba kasih angka yang lebih tinggi'
		}else if (user > acak && user < 11) {

			hasil = 'SALAH!! \n yang anda masukkan adalah angka ' + user + '\n Coba kasih angka yang lebih rendah'
		} else {
			hasil = 'Angko 1 - 10 senyo,jan dipiliah dilua itu';
		}

		alert(hasil);

	}


		alert('terima kasih telah bermain');