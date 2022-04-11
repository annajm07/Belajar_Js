const nama = `annajm`;
const umur = `22`;


function coba(e,...tr) {

// let hasil = ``;

// e.forEach(function (el,i) {
// 	hasil += `${el} ${tr[i] || ('')}`;
// })

// return hasil;
return e.reduce((rs,cr,i) => `${rs}${cr}${tr[i] || ''}`,'');
};



const str = coba`hallo nama saya ${nama} dan saya berumur ${umur} tahun`;

console.log(str);