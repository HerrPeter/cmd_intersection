import { possible_signal_states } from "./signal_states";

// Holds the current state of the intersection lights.
let curr_signal_state = possible_signal_states.Left_Green;

// Timer preset constants.
const time_green = 5000;
const time_yellow = 2000;

// Display the current state of the intersection lights.
let update_intersection = () => {
	let l = curr_signal_state.left;
	let r = curr_signal_state.right;
	console.log(
		`Left: {G: ${up_help(l.green)} Y: ${up_help(l.yellow)} R: ${up_help(
			l.red
		)} } | Right: {G: ${up_help(r.green)} Y: ${up_help(r.yellow)} R: ${up_help(
			r.red
		)} }`
	);
};

// Helper function for update_intersection: Displays a light icon in place of a number.
let up_help = (state: boolean | number): string => {
	return state == 1 ? "<*>" : "   ";
};

// Method to start the left side of the intersection.
function L_Side() {
	console.log("Starting Left Side...");
	curr_signal_state = possible_signal_states.Left_Green;

	update_intersection();
	setTimeout(L_Yellow, time_green);
}

// Method to transition to the right side of the intersection.
function L_Yellow() {
	curr_signal_state = possible_signal_states.Left_Yellow;

	update_intersection();
	setTimeout(R_Side, time_yellow);
}

// Method to start the right side of the intersection.
function R_Side() {
	console.log("Starting Right Side...");
	curr_signal_state = possible_signal_states.Right_Green;

	update_intersection();
	setTimeout(R_Yellow, time_green);
}

// Method to transition to the left side of the intersection.
function R_Yellow() {
	curr_signal_state = possible_signal_states.Right_Yellow;

	update_intersection();
	setTimeout(L_Side, time_yellow);
}

// Main start method to start the intersection logic.
function start() {
	console.log("Running Traffic Lights Now...");

	// Start with the left side of the intersection.
	L_Side();
}

// Starts the intersection program.
start();
