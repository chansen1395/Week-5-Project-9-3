export default class AgeCalc {
  constructor(ageStart) {
    this.age = ageStart;
  }

  onMercury() {
    this.age = ((this.age / .24).toFixed(2));
    return parseFloat(this.age);
  }
}