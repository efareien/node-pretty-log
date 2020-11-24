/* =============================================================================
    Name: node-pretty-log.js
    Description: Pretty logs stuff to the console in Node apps.
    Author: Nick Salloum
    Edition: Franco Parra
    License: MIT
============================================================================= */

const chalk = require("chalk");
const dateFormat = require("dateformat");
const pad = require("pad");

const types = {
    success: {
        color: "green",
        label: "Success",
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
        color: "cyan",
        label: "Info",
    },
};

/**
 * @name getTime
 * @description Gets the current time and formats it.
 */
function getTime() {
    const now = new Date();
    return dateFormat(now, "yyyy-mm-dd hh:MM:ss");
}

/**
 * @name success
 * @param  {...any} messages
 * @description Shortcut for success messages
 */
function success(...messages) {
    nodePrettyLog("success", messages);
}

/**
 * @name error
 * @param  {...any} messages
 * @description Shortcut for error messages
 */
function error(...messages) {
    nodePrettyLog("error", messages);
}

/**
 * @name warn
 * @param  {...any} messages
 * @description Shortcut for error messages
 */
function warn(...messages) {
    nodePrettyLog("warn", messages);
}

/**
 * @name info
 * @param  {...any} messages
 * @description Shortcut for informative messages
 */
function info(...messages) {
    nodePrettyLog("info", messages);
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
        pad(17, chalk[color](`[${label}]`)),
        chalk.gray(getTime()),
        ...messages
    );
}

module.exports = { nodePrettyLog, success, error, warn, info };
