import AgeCalc from './../src/js/age-calc.js';

describe('AgeCalc', () => {
  
  test('Should create a new instance of an Age Calculator', () => {
      let newCalc = new AgeCalc(50, 22);
      expect(newCalc.age).toEqual(50);
      expect(newCalc.expec).toEqual(22);
    });
    
    test('Should calculate age on Mercury', () => {
        const newCalc = new AgeCalc(1);
        expect(newCalc.onMercury()).toBeLessThanOrEqual(4.20);
        expect(newCalc.onMercury()).toBeGreaterThanOrEqual(4.10);
    });

    test('Should calculate age expectancy', () => {
        const newCalc = new AgeCalc(71);
        expect(newCalc.lifeExpec()).toEqual(1);
    });
});
