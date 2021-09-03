// import AgeCalc2 from './../src/js/age-calc2.js';

// describe('AgeCalc', () => {
  
//   test('Should create a new instance of an Age Calculator', () => {
//       let newCalc = new AgeCalc(50, 22);
//       expect(newCalc.age).toEqual(50);
//       expect(newCalc.yrsLeft).toEqual(22);
//     });
    
//     test('Should calculate age on Mercury', () => {
//         const newCalc = new AgeCalc(1);
//         expect(newCalc.onMercury()).toBeLessThanOrEqual(4.20);
//         expect(newCalc.onMercury()).toBeGreaterThanOrEqual(4.10);
//     });

//     test('Should calculate age expectancy', () => {
//         const newCalc = new AgeCalc(71);
//         expect(newCalc.lifeExpec()).toEqual(1);
//     });

//     test('Should calculate age and years left on Mercury', () => {
//         const newCalc = new AgeCalc(71, 0);
//         expect(newCalc.expecMercury()).toBeLessThanOrEqual(4.20);
//         expect(newCalc.expecMercury()).toBeGreaterThanOrEqual(4.10);
//         expect(newCalc.onMercury()).toBeLessThanOrEqual(295.90);
//         expect(newCalc.onMercury()).toBeGreaterThanOrEqual(295.8);
//     });
// });