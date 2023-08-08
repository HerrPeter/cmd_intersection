export interface signal_lights {
	left: {
		red: boolean | number;
		yellow: boolean | number;
		green: boolean | number;
	};
	right: {
		red: boolean | number;
		yellow: boolean | number;
		green: boolean | number;
	};
}

const L_Green: signal_lights = {
	left: {
		red: 0,
		yellow: 0,
		green: 1,
	},
	right: {
		red: 1,
		yellow: 0,
		green: 0,
	},
};

const L_Yellow: signal_lights = {
	left: {
		red: 0,
		yellow: 1,
		green: 0,
	},
	right: {
		red: 1,
		yellow: 0,
		green: 0,
	},
};

const R_Green: signal_lights = {
	left: {
		red: 1,
		yellow: 0,
		green: 0,
	},
	right: {
		red: 0,
		yellow: 0,
		green: 1,
	},
};

const R_Yellow: signal_lights = {
	left: {
		red: 1,
		yellow: 0,
		green: 0,
	},
	right: {
		red: 0,
		yellow: 1,
		green: 0,
	},
};

export let possible_signal_states = {
	Left_Green: L_Green,
	Left_Yellow: L_Yellow,
	Right_Green: R_Green,
	Right_Yellow: R_Yellow,
};
