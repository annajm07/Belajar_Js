// menangkap pilihan player
var lagi = true ;
while (lagi) {

var p = prompt ('masukkan pilihan gajah,semut,orang');

// menangkap pilihan komputer

// membangkitkan bilangan random

var c = Math.random();

if (c < 0.34) {

c = 'gajah';

} else if (c >= 0.34 && c < 0.67) {

	c = 'semut';
} else {

	c = 'orang';
}

// menentukan rules

var hasil ='';
if (p == c) {
hasil = 'SERI';
}

else if (p == 'gajah') {
	if (c == 'orang') {hasil = 'MENANG';}
	else {hasil = 'KALAH';}
} 


else if (p == 'orang') {
	if (c == 'gajah') {hasil = 'KALAH';}
	else {hasil = 'MENANG';}
}


else if (p == 'semut') {
	if (c == 'orang') {hasil = 'KALAH';}
	 else{hasil = 'MENANG';} 
} 

if (p !== 'gajah' && p !== 'semut' && p !== 'orang') {
	 var salah = 'PILIHANNYO YANG 3 TU SE NYO PAKAK';
	 alert (salah);

} else{

alert('kamu memasukkan ' + p + ' dan komputer memasukkan ' + c +'\n maka Kamu dinyatakan ' + hasil);
}

 var dd = confirm('main lagi ngak ?');

 lagi = dd;


}

alert('terima kasih');

