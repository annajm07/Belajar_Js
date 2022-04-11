const tes = document.getElementById('judul');
tes.style.color = 'green';


const p3 = document.querySelector('.p3');

const warna = function ubahWarna() {
	p3.style.backgroundColor = 'lightgreen';
	p3.style.fontSize = '70px';
};


p3.addEventListener('dblclick', warna);