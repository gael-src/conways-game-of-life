const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const size = 800; // SIZE
const scale = 8; // SCALE
const resolution = size / scale; // RESOLUTION

let cells; // CELLS

setup(); // SETUP CALL
// createCells(); // CREATE CELLS CALL
randomCells(); // RANDOM CELLS CALL
drawCells(); // DRAW CELLS CALL

// SETUP FUNCTION
function setup() {
	canvas.width = size; // SIZE
	canvas.height = size; // SIZE
	context.scale(scale, scale); // SCALE
	context.fillStyle = "black"; // RECTANGLE FILL
	context.fillRect(50, 50, 1, 1); // RECTANGLE FILL
	cells = createCells(); // CREATE CELLS
}

// CREATE CELLS FUNCTION
function createCells() {
	let arrRows = new Array(resolution);
	for (let x = 0; x < resolution; x++) {
		let cols = new Array(resolution);
		for (let y = 0; y < resolution; y++) {
			cols[y] = false;
		}
		arrRows[x] = cols;
	}
	return arrRows;
}

// RANDOM CELLS FUNCTION
function randomCells() {
	for (let y = 0; y < resolution; y++) {
		for (let x = 0; x < resolution; x++) {
			if (Math.random() < 0.5) {
				cells[x][y] = true;
			}
		}
	}
}

// DRAW CELLS
function drawCells() {
	for (let y = 0; y < resolution; y++) {
		for (let x = 0; x < resolution; x++) {
			if (cells[x][y]) {
				context.fillRect(x, y, 1, 1);
			}
		}
	}
}
