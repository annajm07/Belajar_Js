const tUbahWarna = document.getElementById('tUbahWarna');

tUbahWarna.onclick = function () {
 // document.body.style.backgroundColor = 'lightblue';

 // document.body.setAttribute('class','warna');


 document.body.classList.toggle('warna');
}




  const tAcakWarna = document.createElement('button');
  const teks = document.createTextNode('Acak Warna')
  tAcakWarna.appendChild(teks);
  tAcakWarna.setAttribute('type', 'button');

  tUbahWarna.after(tAcakWarna);

  tAcakWarna.addEventListener('click',function(){

  	let r = Math.round(Math.random()* 255 + 1);
  	let s = Math.round(Math.random()* 255 + 1);
  	let t = Math.round(Math.random()* 255 + 1);
  	document.body.style.backgroundColor = 'rgb('+ r +','+ s +','+ t+')';
  });


  const sMerah = document.querySelector('input[name = sMerah]');
  const sHijau = document.querySelector('input[name = sGreen]');
  const sBiru = document.querySelector('input[name = sBlue]');

  sMerah.addEventListener('input',function(){
  		let r = sMerah.value;
  		let s = sHijau.value;
  		let t = sBiru.value;
  	document.body.style.backgroundColor = 'rgb('+ r +','+ s +','+ t+')';
  })

  sHijau.addEventListener('input',function(){
  		let r = sMerah.value;
  		let s = sHijau.value;
  		let t = sBiru.value;
  	document.body.style.backgroundColor = 'rgb('+ r +','+ s +','+ t+')';
  })

  sBiru.addEventListener('input',function(){
  		let r = sMerah.value;
  		let s = sHijau.value;
  		let t = sBiru.value;
  	document.body.style.backgroundColor = 'rgb('+ r +','+ s +','+ t+')';
  })