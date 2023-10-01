/**
 * Задание 3
 * 
 * Напишите функцию, которая принимает число как аргумент и возвращает функцию, которая 
 * также принимает число как аргумент и возвращает сумму этих двух чисел. 
 * Выведите в консоль результат.
 */

let argInput1 = +prompt('Введите числовой аргумент для функиции');
let argInput2 = +prompt('Введите второй числовой аргумент для функиции');


function createAdder(argInput1) {
    return function(argInput2) {
      return argInput1 + argInput2;
    };
  }
  
const summFunc = createAdder(argInput1);
console.log(summFunc(argInput2)); 



