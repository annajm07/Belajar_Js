var angkot = function (sopir, trayek, penumpang, kas) {
	

	this.spr = sopir;

	this.trk = trayek;

	this.pnp = penumpang;

	this.ks = kas;


	this.Tambah = function (namaPenumpang) {
		
		this.pnp.push(namaPenumpang);

		return this.pnp;
	}

	this.kurang = function (namaPenumpang, biaya) {
		if (this.pnp.length === 0) {
			alert('angkot masih kosong bro');
			return false;
		}

		for (var i = 0; i < this.pnp.length; i++) {
			if (this.pnp[i] === namaPenumpang) {

				this.pnp[i] = undefined;
				this.ks += biaya;
				return angkot1;
			}
		}
	}



}


var angkot1 = new angkot('annajm', ['padang','bukik'], [], 0);


var angkot2 = new angkot('albupy', ['bukik','kumbuah'], [], 0);