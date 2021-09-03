export default class AgeCalc {
  constructor(ageStart, lifeExpectancy) {
    this.age = ageStart;
    this.expec = lifeExpectancy;
  }

// Note: try using an object to pass into the constructor for age to refactor

  lifeExpec() {
    this.expec = (72 - this.age);
    return this.expec;
  }

  onMercury() {
    this.age = ((this.age / .24).toFixed(2));
    return parseFloat(this.age);
  }
}