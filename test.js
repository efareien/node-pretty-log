const { info, warn, error, success } = require("./index");

const msg = "hola";
error(msg);
warn(msg);
info(msg);
success(msg);
