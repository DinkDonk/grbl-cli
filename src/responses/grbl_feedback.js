"use strict";
/*
GRBL has something to say, so print it.
*/

let messages = require("../messages.js");

module.exports = function(command) {
  return new Promise(function(resolve) {
    if (command.message) {
      command.vorpal.log(
        messages.ok(command.message)
      );
    }
    Object.assign(command.grbl.machine.state, command.state);
    resolve(command);
  });
};