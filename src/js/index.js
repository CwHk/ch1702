window.onload=function(){
	var p = document.createElement('p');
	var span = document.createElement('p');
	p.innerHTML = "你好";
	span.innerText = "hello";
	var app = document.getElementById('app');
	app.appendChild(p);
	app.appendChild(span);
}
 