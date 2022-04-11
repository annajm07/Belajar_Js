// const arr = [ 'annajm','riko','dadan'];

// console.log(...arr);



// const arr = [ 'annajm','riko','dadan'];
// const arr1 = [ 'an','ri','da'];

// const arg = [...arr,...arr1];

// console.log(arg);


// const liNama = document.querySelectorAll('li');



// const newNama = [...liNama].map(function (nm) {
	
// 	return nm.textContent;
// });

// console.log(newNama);

const nama = document.querySelector('.nama');


const huruf = [...nama.textContent];

const newNama = huruf.map(function (nm) {
	return `<span>${nm}</span>`
}).join('');

console.log(newNama);

nama.innerHTML = newNama;


