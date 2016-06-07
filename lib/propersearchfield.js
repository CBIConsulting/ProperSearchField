"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _searchField = require("./components/searchField");

var _searchField2 = _interopRequireDefault(_searchField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

if (process.env.APP_ENV === 'browser') {
	require("../css/style.scss");
}

exports["default"] = _searchField2["default"];
module.exports = exports['default'];