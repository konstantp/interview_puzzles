// input [2, 3, 5, 3, 4, 3, 6, 3]

export default class WaterContainer {
  walls;
  unitWidth;
  units = {};

  constructor(walls = [], width = 1) {
    this.walls = walls;
    this.unitWidth = width;

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

  calculateVolume(leftWallIndex, rightWallIndex) {
    const width = this.unitWidth * (rightWallIndex - leftWallIndex);
    const height = this.min([this.walls[leftWallIndex], this.walls[rightWallIndex]]);
    console.log('width * height', width, height)
    return width * height;
  }

  createUnits() {
    // loop through walls, make combinations and create collextion of units
    this.walls.forEach((firstWallHeght, firstIndex) => {
      this.walls.forEach((secondWallHeght, secondIndex) => {

        // both indexes point to the same wall and container unit can not be created
        if (firstIndex === secondIndex) return;

        if (firstIndex < secondIndex) {
          const unitKey = this.getUnitKey(firstIndex, secondIndex);

          if (this.unitExists(unitKey)) {
            return;
          }
          this.units[unitKey] = this.calculateVolume(firstIndex, secondIndex);

          return;
        }

        if (firstIndex > secondIndex) {
          const unitKey = this.getUnitKey(secondIndex, firstIndex);

          if (this.unitExists(unitKey)) {
            return;
          }

          this.units[unitKey] = this.calculateVolume(secondIndex, firstIndex);

          return;
        }

      });
    });
  }

  getUnitKey(leftWallIndex, rightWallIndex) {
    return `${leftWallIndex}-${rightWallIndex}`;
  }

  unitExists(unitKey) {
    return unitKey in this.units;
  }

  detectLargestUnit() {
    return this.max(Object.values(this.units))
  }
}
