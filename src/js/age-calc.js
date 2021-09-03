export default class AgeCalc {
  constructor(age, yrsLeft) {
    this.age = age;
    this.yrsLeft = yrsLeft;
  }


  lifeExpec(age) {
    this.yrsLeft = (72 - age);
    return this.yrsLeft;
  }

  onMercury() {
    this.age = ((this.age / .24).toFixed(2));
    return parseFloat(this.age);
  }

  expecMercury() {
    this.yrsLeft = (this.lifeExpec(this.age) / .24).toFixed(2);
    return parseFloat(this.yrsLeft);
  }

  onVenus() {
    this.age = ((this.age / .62).toFixed(2));
    return parseFloat(this.age);
  }

  expecVenus() {
    let age = this.age;
    console.log("age: " + this.yrsLeft);
    console.log("age: " + age);
    this.yrsLeft = (this.lifeExpec(age) / .62).toFixed(2);
    return parseFloat(this.yrsLeft);
  }

  onMars() {
    console.log("age: " + this.age);
    this.age = ((this.age / 1.88).toFixed(2));
    console.log("age: " + this.age);
    return parseFloat(this.age);
  }

  expecMars() {
    // this.yrsLeft = (this.lifeExpec() / 1.88).toFixed(2);
    // return parseFloat(this.yrsLeft);
  }
}