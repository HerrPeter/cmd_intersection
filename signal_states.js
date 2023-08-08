"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.possible_signal_states = void 0;
const L_Green = {
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
const L_Yellow = {
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
const R_Green = {
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
const R_Yellow = {
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
exports.possible_signal_states = {
    Left_Green: L_Green,
    Left_Yellow: L_Yellow,
    Right_Green: R_Green,
    Right_Yellow: R_Yellow,
};
