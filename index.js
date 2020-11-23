/* =============================================================================
    Name: node-pretty-log.js
    Description: Pretty logs stuff to the console in Node apps.
    Author: Nick Salloum
    Edition: Franco Parra
    License: MIT
============================================================================= */

const chalk = require("chalk");
const dateFormat = require("dateformat");

const types = {
    success: {
        color: "green",
        label: "Succcess",
    },
    error: {
        color: "red",
        label: "Error",
    },
    warn: {
        color: "yellow",
        label: "Warning",
    },
    info: {
        color: "blue",
        label: "Info",
    },
};
const padSize = 18;

/**
 * @name getTime
 * @description Gets the current time and formats it.
 */
function getTime() {
    const now = new Date();
    return dateFormat(now, "yyyy-mm-dd hh:MM:ss");
}

/**
 * @name log
 * @description Prints a formatted message to the console.
 */
function nodePrettyLog(type, ...messages) {
    let [color, label] = ["blue", "info"];

    if (Object.keys(types).includes(type)) {
        ({ color, label } = types[type]);
    }

    for (let i = 0; i < messages.length; i++) {
        messages[i] = chalk[color](messages[i]);
    }

    console.log.call(
        console,
        chalk[color](`[${label}]`),
        chalk.gray(getTime()),
        ...messages
    );
}

module.exports = nodePrettyLog;
