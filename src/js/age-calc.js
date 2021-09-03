export default class AgeCalc {
  constructor(age, yrsLeft, healthy, userRegion) {
    this.age = age;
    this.yrsLeft = yrsLeft;
    this.healthy = healthy;
    this.expectancy = 72;
    this.userRegion = userRegion;
    this.regions = ["antarctica"];
    this.region = {antarctica: 35};
    // this.overExpec = overExpec;
  }

  // Overall age of a person is not affected by health. Only years remaining is
  // adjusted.
  lifeExpec() {
    for (let i = 0; i < this.regions.length; i++) {
      console.log(this.regions[i]);
      console.log(this.region[i]);
      if (this.userRegion === this.regions[i]) {
        this.excpectancy = this.region[i];
        console.log(this.expectancy);
        i++;
      } else {};
    }
    this.yrsLeft = (this.expectancy - this.age);
    if (!this.healthy) {
      this.yrsLeft = (this.yrsLeft * .85);
    }
    return Math.abs(this.yrsLeft);
  }

  onMercury() {
    this.age = ((this.age / .24).toFixed(1));
    return parseFloat(this.age);
  }

  expecMercury() {
    this.yrsLeft = (this.lifeExpec() / .24).toFixed(1);
    return parseFloat(this.yrsLeft);
  }

  onVenus() {
    this.age = ((this.age / .62).toFixed(1));
    return parseFloat(this.age);
  }

  expecVenus() {
    this.yrsLeft = (this.lifeExpec() / .62).toFixed(1);
    return parseFloat(this.yrsLeft);
  }

  onMars() {
    this.age = ((this.age / 1.88).toFixed(1));
    return parseFloat(this.age);
  }

  expecMars() {
    this.yrsLeft = (this.lifeExpec() / 1.88).toFixed(1);
    return parseFloat(this.yrsLeft);
  }

  onJupiter() {
    this.age = ((this.age / 11.86).toFixed(1));
    return parseFloat(this.age);
  }

  expecJupiter() {
    this.yrsLeft = (this.lifeExpec() / 11.86).toFixed(1);
    return parseFloat(this.yrsLeft);
  }
}