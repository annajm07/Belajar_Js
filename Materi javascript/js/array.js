var nama = ['annajm','nia','nisa','yeye'];

// nama.pop();

// nama.unshift('lep');
// nama.splice(2,1,'jejen');
// console.log(nama.join(' - '));

// var nama1 = nama.slice(1,3);

// console.log(nama1.join(' - '));


nama.forEach(function(e, i) {
	console.log('Mahasiswa ke- ' + i +' adalah : ' + e);
})