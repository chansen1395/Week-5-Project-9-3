import AgeCalc from './../src/js/age-calc.js';

describe('AgeCalc', () => {
  
  let reusableCalc;

  beforeEach(() => {
    reusableCalc = new AgeCalc(71, 1);
  });

  test('Should create a new instance of an Age Calculator', () => {
      let newCalc = new AgeCalc(50, 22);
      expect(newCalc.age).toEqual(50);
      expect(newCalc.yrsLeft).toEqual(22);
    });
    
    test('Should calculate age expectancy', () => {
      const newCalc = new AgeCalc(71, 1);
      expect(newCalc.lifeExpec()).toEqual(1);
    });

    // *************
    // Mercury Tests
    // *************  
    test('Should calculate age and years left on Mercury', () => {
        expect(reusableCalc.expecMercury()).toBeLessThanOrEqual(4.20);
        expect(reusableCalc.expecMercury()).toBeGreaterThanOrEqual(4.10);
        expect(reusableCalc.onMercury()).toBeLessThanOrEqual(295.90);
        expect(reusableCalc.onMercury()).toBeGreaterThanOrEqual(295.8);
    });

    // *************
    // Venus Tests
    // *************
    test('Should calculate age and years left on Venus', () => {
        expect(reusableCalc.expecVenus()).toBeLessThanOrEqual(1.62);
        expect(reusableCalc.expecVenus()).toBeGreaterThanOrEqual(1.60);
        expect(reusableCalc.onVenus()).toBeLessThanOrEqual(114.52);
        expect(reusableCalc.onVenus()).toBeGreaterThanOrEqual(114.50);
    });

    // *************
    // Mars Tests
    // *************
    test('Should calculate age on Mars', () => {
        const newCalc = new AgeCalc(1);
        let marsAge = newCalc.onMars();
        expect(marsAge).toBeLessThanOrEqual(.54);
        expect(marsAge).toBeGreaterThanOrEqual(.52);
    });
  
    // test('Should calculate age and years left on Mars', () => {
    //     const newCalc = new AgeCalc(71, 1);
    //     expect(newCalc.expecMars()).toBeLessThanOrEqual(1.62);
    //     expect(newCalc.expecMars()).toBeGreaterThanOrEqual(1.60);
    //     expect(newCalc.onMars()).toBeLessThanOrEqual(37.77);
    //     expect(newCalc.onMars()).toBeGreaterThanOrEqual(37.75);
    // });
  });
