import AgeCalc from './../src/js/age-calc.js';

describe('AgeCalc', () => {
  
  let reusableCalc;

  beforeEach(() => {
    reusableCalc = new AgeCalc(71, 0, true);
  });

  test('Should create a new instance of an Age Calculator', () => {
      let newCalc = new AgeCalc(50, 22, true);
      expect(newCalc.age).toEqual(50);
      expect(newCalc.yrsLeft).toEqual(22);
      expect(newCalc.healthy).toEqual(true);
    });

  test('Should calculate the life expectancy (in this case, antarctica, outlived exp by 15 years', () => {
      let newAntarctica = new AgeCalc(50, 0, true, "antarctica");
      expect(newAntarctica.lifeExpec()).toEqual(15);
    });

  test('Should calculate the life expectancy (in this case, antarctica, outlived exp by 15 years', () => {
      let newAmerica = new AgeCalc(30, 0, true, "north-america");
      expect(newAmerica.lifeExpec()).toEqual(40);
    });
    
    test('Should calculate age expectancy of healhty individual', () => {
      const newCalc = new AgeCalc(71, 1, true);
      expect(newCalc.lifeExpec()).toEqual(1);
    });

    test('Should calculate age expectancy of unhealthy individual', () => {
      const newCalc = new AgeCalc(71, 1, false);
      expect(newCalc.lifeExpec()).toEqual(.85);
    });

    // test('Should calculate age expectancy of unhealthy individual', () => {
    //   const newCalc = new AgeCalc(71, 1, true);
    //   expect(newCalc.lifeExpec()).toEqual(.85);
    // });

    
    test('Should calculate the years over the age expectancy someone has lived w/ abs()', () => {
      const newCalc = new AgeCalc(100, 0, true);
      expect(newCalc.expecMercury()).toEqual(116.7);
      expect(newCalc.onMercury()).toEqual(416.7);
    });
    
    test('Should calculate age and years left on Mercury for unhealthy person', () => {
      const newCalc = new AgeCalc(71, 1, false);
      expect(newCalc.expecMercury()).toEqual(3.5);
      expect(newCalc.onMercury()).toEqual(295.8);
    });
    
    // *************
    // Mercury Tests
    // *************  
    test('Should calculate age and years left on Mercury', () => {
        const newCalc = new AgeCalc(71, 1, true, "", "mercury");
        expect(newCalc.lifeOnPlanet()).toEqual(295.8);
    });
    
    // *************
    // Venus Tests
    // *************
    test('Should calculate age and years left on Venus', () => {
      const newCalc = new AgeCalc(71, 1, true, "", "venus");
      expect(newCalc.lifeOnPlanet()).toEqual(114.5);
    });

    // *************
    // Mars Tests
    // *************
    test('Should calculate age and years left on Mars', () => {
      expect(reusableCalc.expecMars()).toEqual(.5);
      expect(reusableCalc.onMars()).toEqual(37.8);
    });

    // *************
    // Jupiter Tests
    // *************
    test('Should calculate age and years left on Jupiter', () => {
      expect(reusableCalc.expecJupiter()).toEqual(.1);
      expect(reusableCalc.onJupiter()).toEqual(6);
    });
  });
