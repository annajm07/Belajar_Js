// const nama = {
// 	nama : 'annajm albupy',
// 	umur : 22,
// 	jurusan : 'informatika'
// };


// const tampil = `<div class = "coba">
// <h2> nama saya ${nama.nama},dan saya berumur ${nama.umur} tahun </h2>
// </div> `;

// document.body.innerHTML = tampil;


// const mahasiswa = [ 
// {nama: `annajm`, semester:4},{nama : `albupy`, semester: 7},{nama:`nia`, semester: `lah tamat`}];


// const tampil = `<div>
// 	${mahasiswa.map(function (m) {
// 		return `<ul>
// 		<li> nama 		: ${m.nama}</li>
// 		<li> semester	: ${m.semester} </li>
// 		</ul>`
// 	}).join('')}
// </div>`;

// document.body.innerHTML = tampil;





const murid = {
	nama : `annajm`,
	semester : 8 ,
	matakuliah : ['pemograman web','dasar informatika','php javascript','framework codeigniter']
};


// function cetakMurid(student) {
// 	return `<ol> ${student.map(function (mk) {
// 		return `<li> ${mk}</li>`;
// 	}).join('')}</ol>`;
// }

const tampil = `<div>
<h2>${murid.nama}</h2>
<span>${murid.semester}</span>


<h4>Mata Kuliah :</h4><ul> 
${murid.matakuliah.map(function (mk) {
	return `<br><br><li>${mk}</li>`
}).join('')}</ul>
</div>`


document.body.innerHTML = tampil;