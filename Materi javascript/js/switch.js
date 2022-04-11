var makanan = prompt ("masukkan nama makanan: \n roti,nasi,daging");


switch (makanan) {
	case 'roti' :
		alert('makanan sehat');
		break;

	case 'nasi' :
		alert('makanan sehat');
		break;

	case 'daging' : 
		alert('tidak sehat');
		break;

	default :
	 alert ('tidak terdeteksi');
	break;
}
