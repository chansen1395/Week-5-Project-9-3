export default class AgeCalc {
  constructor(age, yrsLeft) {
    this.age = age;
    this.yrsLeft = yrsLeft;
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

  onVenus() {
    this.age = ((this.age / .62).toFixed(2));
    return parseFloat(this.age);
  }

  expecVenus() {

    this.yrsLeft = (this.lifeExpec() / .62).toFixed(2);
    return parseFloat(this.yrsLeft);
  }

  onMars() {
    this.age = ((this.age / 1.88).toFixed(2));
    return parseFloat(this.age);
  }

  expecMars() {
    // this.yrsLeft = (this.lifeExpec() / 1.88).toFixed(2);
    // return parseFloat(this.yrsLeft);
  }
}