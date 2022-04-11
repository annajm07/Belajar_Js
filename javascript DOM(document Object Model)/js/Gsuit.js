function getPilihanKomputer() {
const c = Math.random();

if (c < 0.34) {return 'gajah';} 

if (c >= 0.34 && c < 0.67) {return 'semut';} 

return 'orang';
}

function getHasil(comp,player) {
	if (player == comp) {
	return 'SERI'};

	if (player == 'gajah') {
	if (comp == 'orang') {return 'MENANG';}
	else {return 'KALAH';}
	} 

	if (player == 'orang') {
	if (comp == 'gajah') {return 'KALAH';}
	else {return 'MENANG';}
	}


	if (player == 'semut') {
	if (comp == 'orang') {return 'KALAH';}
	 else{return 'MENANG';} 
	} 
}


function gerak() {
	const imgComputer = document.querySelector('.img-komputer');
	const hewan = ['gajah','semut','orang'];
	let i = 0;
	const wMulai = new Date().getTime();

	setInterval(function () {
		if (new Date().getTime() - wMulai > 1000) {
			clearInterval;
			return;
		}
		
		imgComputer.setAttribute('src', '../img/' + hewan[i++] + '.png');
		if (i == hewan.length) {
			i = 0;
		}


	}, 100 )

};






const piliahGbr = document.querySelectorAll('li img');
const y = piliahGbr.forEach(function (plh) {

plh.addEventListener('click',function () {
	gerak();

	const pilihanKomputer = getPilihanKomputer();
	const  pilihanPlayer = plh.className;
	const hasil = getHasil(pilihanKomputer,pilihanPlayer);

	setTimeout(function () {

		const imgComputer = document.querySelector('.img-komputer');
		imgComputer.setAttribute('src', '../img/' + pilihanKomputer + '.png');

		const info = document.querySelector('.info');
		info.innerHTML = hasil;
		
	},1000);	
});	
});

	


// const pGajah = document.querySelector('.gajah');
// pGajah.addEventListener('click',function () {

// const pilihanKomputer = getPilihanKomputer();
// const  pilihanPlayer = 'gajah';

// const hasil = getHasil(pilihanKomputer,pilihanPlayer);

// const imgComputer = document.querySelector('.img-komputer');
// imgComputer.setAttribute('src', '../img/' + pilihanKomputer + '.png');

// const info = document.querySelector('.info');
// info.innerHTML = hasil;
// console.log(pilihanKomputer);
// });


// const pOrang= document.querySelector('.orang');
// pOrang.addEventListener('click',function () {

// const pilihanKomputer = getPilihanKomputer();
// const  pilihanPlayer = 'orang';

// const hasil = getHasil(pilihanKomputer,pilihanPlayer);

// const imgComputer = document.querySelector('.img-komputer');
// imgComputer.setAttribute('src', '../img/' + pilihanKomputer + '.png');

// const info = document.querySelector('.info');
// info.innerHTML = hasil;
// console.log(pilihanKomputer);
// });


// const pSemut = document.querySelector('.semut');
// pSemut.addEventListener('click',function () {

// const pilihanKomputer = getPilihanKomputer();
// const  pilihanPlayer = 'semut';

// const hasil = getHasil(pilihanKomputer,pilihanPlayer);

// const imgComputer = document.querySelector('.img-komputer');
// imgComputer.setAttribute('src', '../img/' + pilihanKomputer + '.png');

// const info = document.querySelector('.info');
// info.innerHTML = hasil;
// console.log(pilihanKomputer);
// });

