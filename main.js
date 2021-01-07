const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
// SIZE
const size = 800;
// SCALE
const scale = 8;
// RESOLUTION
const resolution = size / scale;

// SETUP CALL
setup();
// RANDOMCELSS CALL
randomCells();

// SETUP FUNCTION
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

// RANDOM FUNCTION
function randomCells() {
	for (let y = 0; y < resolution; y++) {
		for (let x = 0; x < resolution; x++) {
			if (Math.random() < 0.5) {
				context.fillRect(x, y, 1, 1);
			}
		}
	}
}
