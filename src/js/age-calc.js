export default class AgeCalc {
  constructor(ageStart, lifeExpectancy) {
    this.age = ageStart;
    this.yrsLeft = lifeExpectancy;
  }


  lifeExpec() {
    this.yrsLeft = (72 - this.age);
    return this.yrsLeft;
  }

  onMercury() {
    this.age = ((this.age / .24).toFixed(2));
    return parseFloat(this.age);
  }

  expecMercury() {
    this.yrsLeft = (this.lifeExpec() / .24).toFixed(2);
    return parseFloat(this.yrsLeft);
  }
}