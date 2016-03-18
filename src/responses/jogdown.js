"use strict";
/*
Jog the gantry 'up' the Y.
*/

const Rx = require("rx");

module.exports = function(command) {
  command.grbl.enqueue(Rx.Observable.of({
    action: "send"
    , text: `G91G0Y-${command.grbl.jog}`
  }));
  return Promise.resolve();
};