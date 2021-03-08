let eHeures = document.getElementById('heures');
let eMinutes = document.getElementById('minutes');
let ePoints = document.getElementById('points');
function horloge () {
	let heures = new Date().getHours();
	let minutes = new Date().getMinutes();
	if (minutes < 10) {
		minutes = "0" +minutes ;
	}
	eHeures.innerHTML = heures;
	eMinutes.innerHTML = minutes;
}

window.setInterval(horloge,150);
function points () {
	if (ePoints.style.visibility == 'hidden') {
		ePoints.style.visibility = 'visible';
	} else {
		ePoints.style.visibility = 'hidden';
	}
}
window.setInterval(points,500);
