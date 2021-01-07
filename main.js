const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
// SIZE
const size = 800;
// SCALE
const scale = 8;

setup();

function setup() {
	// SIZE
	canvas.width = size;
	canvas.height = size;
	// SCALE
	context.scale(scale, scale);
	// RECTANGLE FILL
	context.fillStyle = "black";
	context.fillRect(50, 50, 1, 1);
}
