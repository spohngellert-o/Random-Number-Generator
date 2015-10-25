var array = [true, false, false, true, true, true, false, true];

function next() {

	var out = array[7];
	console.log("here");
	out = out != array[1] != array[3] != array[6] != array[0];

	adjust(out);
}
function adjust(out) {
	array.pop();
	array.unshift(out);
	displayRandom();
}
function displayRandom() {
	var accum = 0;
	for(var i = 0; i < array.length; i++) {
		if(array[i]) {
			accum += Math.pow(2, i);
		}
	}
	document.getElementById("number").innerHTML = accum % 30;
}