const DIM = 9;
const BLANK = 0;

class Pair {
    constructor(first = 0, second = 0) {
        this.first = first;
        this.second = second;
    }
}

const GRID_FULL = new Pair(9, 9);

export default class CalculationService {
    getCalculatedSuduko(grid) {
        return this._solve(grid);
    }

    _solve(grid) {
        // If the Soduko grid has been filled, we are done
        if (GRID_FULL == this._getUnassignedLocation(grid)) {
            return grid; 
        }

        // Get an unassigned Soduko grid location
        const rowAndCol = this._getUnassignedLocation(grid);
        const row = rowAndCol.first;
        const col = rowAndCol.second;

        	// Consider digits 1 to 9
	    for (let num = 1; num <= 9; num++) {
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

    _getUnassignedLocation(grid) {
        for (let row = 0; row < DIM; row++) {
            for (let col = 0; col < DIM; col++) {
                if (grid[row][col] == BLANK) {
                    return new Pair(row, col);
                }
            }
        }
        return GRID_FULL;
    }

    _isSafe(grid, row, col, num) {
    // Check if 'num' is not already placed in current row,
	// current column and current 3x3 box 
	return !this._usedInRow(grid, row, num) &&
		    !this._usedInColumn(grid, col, num) &&
		    !this._usedInBox(grid, row - row % 3, col - col % 3, num);
    }

    // Returns a boolean which indicates whether any assigned entry
    // in the specified row matches the given number. 
    _usedInRow(grid, row, num) {
        for (let col = 0; col < DIM; col++) {
            if (grid[row][col] == num) {
                return true;
            }
        }
        return false;
    }

    // Returns a boolean which indicates whether any assigned entry
    // in the specified column matches the given number. 
    _usedInColumn(grid, col, num) {
        for (let row = 0; row < DIM; row++) {
            if (grid[row][col] == num) {
                return true;
            }
        }
        return false;
    }

    // Returns a boolean which indicates whether any assigned entry
    // within the specified 3x3 box matches the given number. 
    _usedInBox(grid, boxStartRow, boxStartCol, num) {
        for (let row = 0; row < 3; row++) {
            for (let col = 0; col < 3; col++) {
                if (grid[row + boxStartRow][col + boxStartCol] == num) {
                    return true;
                }
            }
        }
        return false;
    }

}