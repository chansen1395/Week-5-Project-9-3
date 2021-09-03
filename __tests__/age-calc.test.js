import AgeCalc from './../src/js/age-calc.js';

describe('AgeCalc', () => {
  
  let reusableCalc;

  beforeEach(() => {
    reusableCalc = new AgeCalc(71, 1, true);
  });

  test('Should create a new instance of an Age Calculator', () => {
      let newCalc = new AgeCalc(50, 22, true);
      expect(newCalc.age).toEqual(50);
      expect(newCalc.yrsLeft).toEqual(22);
    });
    
    test('Should calculate age expectancy of healhty individual', () => {
      const newCalc = new AgeCalc(71, 1, true);
      expect(newCalc.lifeExpec()).toEqual(1);
    });
    test('Should calculate age expectancy of unhealthy individual', () => {
      const newCalc = new AgeCalc(71, 1, false);
      expect(newCalc.lifeExpec()).toEqual(.85);
    });

    // *************
    // Mercury Tests
    // *************  
    test('Should calculate age and years left on Mercury', () => {
        expect(reusableCalc.expecMercury()).toEqual(4.2);
        expect(reusableCalc.onMercury()).toEqual(295.8);
    });

    test('Should calculate age and years left on Mercury for unhealthy person', () => {
      const newCalc = new AgeCalc(71, 1, false);
        expect(newCalc.expecMercury()).toEqual(3.5);
        expect(newCalc.onMercury()).toEqual(295.8);
    });

    // *************
    // Venus Tests
    // *************
    test('Should calculate age and years left on Venus', () => {
        expect(reusableCalc.expecVenus()).toEqual(1.6);
        expect(reusableCalc.onVenus()).toEqual(114.5);
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
