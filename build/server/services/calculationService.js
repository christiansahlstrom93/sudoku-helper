"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DIM = 9;
var BLANK = 0;

var Pair = function Pair() {
    var first = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var second = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    _classCallCheck(this, Pair);

    this.first = first;
    this.second = second;
};

var GRID_FULL = new Pair(9, 9);

var CalculationService = function () {
    function CalculationService() {
        _classCallCheck(this, CalculationService);
    }

    _createClass(CalculationService, [{
        key: "getCalculatedSuduko",
        value: function getCalculatedSuduko(grid) {
            return this._solve(grid);
        }
    }, {
        key: "_solve",
        value: function _solve(grid) {
            // If the Soduko grid has been filled, we are done
            if (GRID_FULL == this._getUnassignedLocation(grid)) {
                return grid;
            }

            // Get an unassigned Soduko grid location
            var rowAndCol = this._getUnassignedLocation(grid);
            var row = rowAndCol.first;
            var col = rowAndCol.second;

            // Consider digits 1 to 9
            for (var num = 1; num <= 9; num++) {
                // If placing the current number in the current
                // unassigned location is valid, go ahead
                if (this._isSafe(grid, row, col, num)) {
                    // Make tentative assignment
                    grid[row][col] = num;

                    // Do the same thing again recursively. If we go 
                    // through all of the recursions, and in the end 
                    // return true, then all of our number placements 
                    // on the Soduko grid are valid and we have fully
                    // solved it
                    if (this._solve(grid)) {
                        return grid;
                    }

                    // As we were not able to validly go through all 
                    // of the recursions, we must have an invalid number
                    // placement somewhere. Lets go back and try a 
                    // different number for this particular unassigned location
                    grid[row][col] = BLANK;
                }
            }

            // If we have gone through all possible numbers for the current unassigned
            // location, then we probably assigned a bad number early. Lets backtrack 
            // and try a different number for the previous unassigned locations.
            return false;
        }
    }, {
        key: "_getUnassignedLocation",
        value: function _getUnassignedLocation(grid) {
            for (var row = 0; row < DIM; row++) {
                for (var col = 0; col < DIM; col++) {
                    if (grid[row][col] == BLANK) {
                        return new Pair(row, col);
                    }
                }
            }
            return GRID_FULL;
        }
    }, {
        key: "_isSafe",
        value: function _isSafe(grid, row, col, num) {
            // Check if 'num' is not already placed in current row,
            // current column and current 3x3 box 
            return !this._usedInRow(grid, row, num) && !this._usedInColumn(grid, col, num) && !this._usedInBox(grid, row - row % 3, col - col % 3, num);
        }

        // Returns a boolean which indicates whether any assigned entry
        // in the specified row matches the given number. 

    }, {
        key: "_usedInRow",
        value: function _usedInRow(grid, row, num) {
            for (var col = 0; col < DIM; col++) {
                if (grid[row][col] == num) {
                    return true;
                }
            }
            return false;
        }

        // Returns a boolean which indicates whether any assigned entry
        // in the specified column matches the given number. 

    }, {
        key: "_usedInColumn",
        value: function _usedInColumn(grid, col, num) {
            for (var row = 0; row < DIM; row++) {
                if (grid[row][col] == num) {
                    return true;
                }
            }
            return false;
        }

        // Returns a boolean which indicates whether any assigned entry
        // within the specified 3x3 box matches the given number. 

    }, {
        key: "_usedInBox",
        value: function _usedInBox(grid, boxStartRow, boxStartCol, num) {
            for (var row = 0; row < 3; row++) {
                for (var col = 0; col < 3; col++) {
                    if (grid[row + boxStartRow][col + boxStartCol] == num) {
                        return true;
                    }
                }
            }
            return false;
        }
    }]);

    return CalculationService;
}();

exports.default = CalculationService;