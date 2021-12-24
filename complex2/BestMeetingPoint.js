
export default class BestMeetingPoint {
  locations = [];
  people = [];
  bestMeetingPoint = [0, 0];
  minRow = null;
  maxRow = null;
  minCol = null;
  maxCol = null;
  possibilities = {};

  constructor(locations = []) {
    this.locations = locations;
    this.detectPeoplePositions();
    this.setLimits();
  }

  setLimits() {
    const sortedRows = this.people.map(p => p[0]);
    this.minRow = this.min(sortedRows);
    this.maxRow = this.max(sortedRows);

    const sortedCols = this.people.map(p => p[1]);
    this.minCol = this.min(sortedCols);
    this.maxCol = this.max(sortedCols);
  }

  sort(array = []) {
    return array.sort((a, b) => (a - b));
  }

  min(array = []) {
    const sorted = this.sort(array);
    return sorted.shift();
  }

  max(array = []) {
    const sorted = this.sort(array);
    return sorted.pop();
  }

  getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
  }

  detectPeoplePositions() {
    this.people = [];
    this.locations.forEach((row, rowIndex) => {
      row.forEach((_col, colIndex) => {
        if (this.locations[rowIndex][colIndex]) {
          this.people.push([rowIndex, colIndex]);
        }
      });
    });

    return this.people;
  }

  calculateSteps(locationA, locationB) {
    return Math.abs(locationA[0] - locationB[0]) + Math.abs(locationA[1] - locationB[1])
  }

  calculatePossibilities() {
    for (let rowIndex = this.minRow; rowIndex <= this.maxRow; rowIndex++) {
      for (let colIndex = this.minCol; colIndex <= this.maxCol; colIndex++) {
        const totalSteps = this.people.reduce((steps, personLocation) => {
          steps += this.calculateSteps([rowIndex, colIndex], personLocation);
          return steps;
        }, 0);
        this.possibilities[`${rowIndex}-${colIndex}`] = totalSteps;
      }
    }
    return this.possibilities;
  }

  detectMeetingPoint() {
    const possibilities = this.calculatePossibilities();
    const minSteps = this.min(Object.values(possibilities))
    const meetingPointKey = this.getKeyByValue(possibilities, minSteps);
    this.bestMeetingPoint = meetingPointKey.split('-').map(index => parseInt(index));
    return this.bestMeetingPoint;
  }
}
