"use strict";

var _electron = require("electron");

var _path = _interopRequireDefault(require("path"));

module.exports = Franz => {
  Franz.injectCSS(_path.default.join(__dirname, 'service.css'));
};
