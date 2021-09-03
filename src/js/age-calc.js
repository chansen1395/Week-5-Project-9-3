export default class AgeCalc {
  constructor(age, yrsLeft, healthy, userRegion, planet) {
    this.age = age;
    this.yrsLeft = yrsLeft;
    this.healthy = healthy;
    this.expectancy = 72;
    this.planet = planet;
    this.planets = {"mercury": .24, "venus": .62, "mars": 1.88, "jupiter": 11.86};
    this.userRegion = userRegion;
    this.region = {"antarctica": 35, "north-america": 70};
  }

  // Overall age of a person is not affected by health. Only years remaining is
  // adjusted.

  // Refactor code to use objects instead of multiple onPlanet calcs
  lifeOnPlanet() {
    for (const i in this.planets) {
      if (i === this.planet) {
        this.age = ((this.age / this.planets[i]).toFixed(1));
        return parseFloat(this.age);
      }
    }
  }

  expectancyPlanet() {
    for (const i in this.planets) {
      if (i === this.planet) {
        console.log(this.lifeExpec());
        console.log(this.planets[i]);
        this.yrsLeft = (this.lifeExpec() / this.planets[i]).toFixed(1);
        return parseFloat(this.yrsLeft);
      }
    }

  }


  lifeExpec() {
    for (const i in this.region) {
      if (i === this.userRegion) {
        this.expectancy = this.region[i];
      }
    }

    this.yrsLeft = (this.expectancy - this.age);
    if (!this.healthy) {
      this.yrsLeft = (this.yrsLeft * .85);
    }
    return Math.abs(this.yrsLeft);
  }

  expecMercury() {
    this.yrsLeft = (this.lifeExpec() / .24).toFixed(1);
    return parseFloat(this.yrsLeft);
  }

  expecVenus() {
    this.yrsLeft = (this.lifeExpec() / .62).toFixed(1);
    return parseFloat(this.yrsLeft);
  }

  expecMars() {
    this.yrsLeft = (this.lifeExpec() / 1.88).toFixed(1);
    return parseFloat(this.yrsLeft);
  }

  expecJupiter() {
    this.yrsLeft = (this.lifeExpec() / 11.86).toFixed(1);
    return parseFloat(this.yrsLeft);
  }
}