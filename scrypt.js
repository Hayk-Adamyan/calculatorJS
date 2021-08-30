//function a() {
//	var x = document.querySelector('.A1').value
//	var y = document.querySelector('.A2').value
//	var z = document.querySelector('.A3').value
//	if (x == 4 && y == 4 && z == 4) {
//		tp1.innerHTML = 'ayo'
//	} else {
//		tp1.innerHTML = 'voj'
//	}
//}
//
//function b() {
//	var x = document.querySelector('.B1').value	
//	var y = document.querySelector('.B2').value
//	var z = document.querySelector('.B3').value
//	if (x == 1 || y == 1 || z == 1) {
//		tp2.innerHTML = 'ayo'
//	} else {
//		tp2.innerHTML = 'voj'
//	}
//}
//
//
//function c() {
//	var x = document.querySelector('.C1').value
//	var y = document.querySelector('.C2').value
//	var z = document.querySelector('.C3').value
//	if (x == y || x == z || y == z) {
//		tp3.innerHTML = 'ayo'
//	} else {
//		tp3.innerHTML = 'voj'
//	}

//----------------------------------------------------

function aba() {
	var x = document.querySelector('#sel1').value
	var c;
	var y = document.querySelector('#sel2').value
	var z = document.querySelector('#sel3').value
	var f = document.querySelector('#inp0').value
	c = +f * (+x + +y + +z)
	if (c < 300000) {
		pat.innerHTML = c
	} else  {
		c = c - (c * 40) / 100;
		
		pat.innerHTML = c
	}
	}