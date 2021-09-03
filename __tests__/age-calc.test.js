import AgeCalc from './../src/js/age-calc.js';

describe('AgeCalc', () => {
  
  test('Should create a new instance of an Age Calculator', () => {
    const newCalc = new AgeCalc();
    expect(newCalc.age).toEqual();
  });
});
