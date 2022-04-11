const xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
	if (xhr.status === 200) {
		if (xhr.readyState === 4) {
			console.log(JSON.parse(xhr.response));
		}
	}
};

xhr.open('get', 'http://www.omdbapi.com/?=&apikey=8aa7471f&s=avenger');
xhr.send();

