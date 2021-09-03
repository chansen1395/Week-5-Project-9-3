import AgeCalc from './../src/js/age-calc.js';

describe('AgeCalc', () => {
  
  test('Should create a new instance of an Age Calculator', () => {
      let newCalc = new AgeCalc(50);
      expect(newCalc.age).toEqual(50);
    });
    
    test('Should calculate age on Mercury', () => {
        const newCalc = new AgeCalc(1);
        expect(newCalc.onMercury(newCalc.age)).toEqual(4.16);
      });
});
