"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DataFormatter = function () {
    function DataFormatter() {
        _classCallCheck(this, DataFormatter);
    }

    _createClass(DataFormatter, [{
        key: "formatSudukoFromAPI",
        value: function formatSudukoFromAPI(responseRaw) {
            var suduko = [[], [], []];
            responseRaw.data.forEach(function (box, index) {
                if (index < 3) {
                    suduko[0].push(box);
                } else if (index < 6) {
                    suduko[1].push(box);
                } else {
                    suduko[2].push(box);
                }
            });
            return suduko;
        }
    }]);

    return DataFormatter;
}();

exports.default = new DataFormatter();