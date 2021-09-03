export default class AgeCalc {
  constructor(age, healthy, userRegion, planet) {
    this.age = age;
    this.yrsLeft = 0;
    this.healthy = healthy;
    this.expectancy = 72;
    this.planet = planet;
    this.planets = {"mercury": .24, "venus": .62, "mars": 1.88, "jupiter": 11.86};
    this.userRegion = userRegion;
    this.region = {"antarctica": 35, "north-america": 70};
  }

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
        console.log(this.lifeExpect());
        console.log(this.planets[i]);
        this.yrsLeft = (this.lifeExpect() / this.planets[i]).toFixed(1);
        return parseFloat(this.yrsLeft);
      }
    }

  }

  lifeExpect() {
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
}