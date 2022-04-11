var angkot = function (sopir, trayek, penumpang, kas) {

	var olahAngkot = {};

	olahAngkot.spr = sopir;
	olahAngkot.trk = trayek;
	olahAngkot.pnp = penumpang;
	olahAngkot.ks = kas;


	olahAngkot.tambah = function (namaPenumpang) {

	olahAngkot.pnp.push(namaPenumpang);
	return olahAngkot;

	}

	olahAngkot.kurang = function (namaPenumpang, ongkos) {
		if (olahAngkot.pnp.length === 0) {

			alert('angkot masih kosong');
			return false;
		}

		for (var i = 0; i < olahAngkot.pnp.length; i++) {
			if (olahAngkot.pnp[i] == namaPenumpang) {

				olahAngkot.pnp[i] = undefined;

				olahAngkot.ks += ongkos;
				return olahAngkot;
			}


		}
	}

return olahAngkot;

}


var angkot1 = angkot('annajm', ['kumbuah','bukik'], ['annajm','robi','riko'], 0);