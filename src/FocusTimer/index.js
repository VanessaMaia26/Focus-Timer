import state from "./state.js"
import * as events from "./events.js";
import * as timer from './timer.js'

export function countDown () {
    console.log('iniciou')
}

export function start(minutes, seconds) {
    state.minutes = minutes;
    state.seconds = seconds;

    timer.updateDisplay();

    events.registerControls();
};