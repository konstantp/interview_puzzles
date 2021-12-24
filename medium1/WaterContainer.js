export default class WaterContainer {
  walls;
  unitWidth;
  units = {};

  constructor(walls = [], width = 1, depth = 1) {
    this.walls = walls;
    this.unitWidth = width;
    this.unitDepth = depth;

    this.createUnits(walls)
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

  calculateVolume(unitKey) {
    const [leftWallIndex, rightWallIndex] = this.getWallIndexes(unitKey);
    const width = this.unitWidth * (rightWallIndex - leftWallIndex);
    const height = this.min([this.walls[leftWallIndex], this.walls[rightWallIndex]]);
    return width * height * this.unitDepth;
  }

  getUnitKey(leftWallIndex, rightWallIndex) {
    return `${leftWallIndex}-${rightWallIndex}`;
  }

  getWallIndexes(unitKey = '') {
    return unitKey.split('-').map(index => parseInt(index));
  }

  unitExists(unitKey) {
    return unitKey in this.units;
  }

  createUnits() {
    // loop through walls, make combinations and create collextion of units
    this.walls.forEach((_firstWallHeght, firstIndex) => {
      this.walls.forEach((_secondWallHeght, secondIndex) => {

        // both indexes point to the same wall and container unit can not be created
        if (firstIndex === secondIndex) return;

        const unitKey = firstIndex < secondIndex ? this.getUnitKey(firstIndex, secondIndex) : this.getUnitKey(secondIndex, firstIndex);

        // don't calculate the same unit twice while looping throught walls
        if (this.unitExists(unitKey)) {
          return;
        }

        this.units[unitKey] = this.calculateVolume(unitKey);
      });
    });
    return this.units;
  }

  detectLargestUnit() {
    return this.max(Object.values(this.units));
  }
}
