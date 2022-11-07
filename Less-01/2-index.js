"use strict";
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Strict_mode

/*
 * Математичні оператори (+, -, *, /, %, **)
 */

// const numFirst = 3;
// const numSecond = 10;

// const container = numSecond ** numFirst;

// console.log(container);

/*
 ? Дано два числа 10 и 20.
 ? Проведіть над цими числами математичні операції (+ - / *).
*/

//? Перевірте чи парні числа 15, 20, 45, 30.

// console.log(14 % 2 == 0);
// const pair = 15 % 2 == ;

// console.log(pair);

// const valueFromUser = prompt("Write some text");

// console.log(Number(valueFromUser));
// console.log(+valueFromUser);

// const str = "10";
// const num = 5;

// console.log(num + +str);

/*
  ? Дано 90 хвилин, дізнайтесь скільки в даному числі міститься годин і хвилин.
  ? Результат виведіть у консоль.
*/

// 70 === 1:10
// 90 === 1:30

// const time = 65;

// const hours = Math.floor(time / 60);
// const minutes = time % 60;

// console.log(hours + ":" + minutes);

// const updateHours = String(hours).padStart(2, "0");
// const updateMinutes = String(minutes).padStart(2, "0");

// console.log(updateHours + ":" + updateMinutes);

// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/padStart

/*
 * Number.parseInt() Number.parseFloat()
 */

// const test = "45.42134ppx";

// console.log(Number(test));
// console.log(Number.parseFloat(test));
// console.log(Number.parseInt(test));

// parseInt - ціле
// parseFloat - дробне

/*
  ? Попросіть користувача ввести число.
  ? Виведіть результат у консоль.
  ? Приведіть рядок до числа.
*/

// const valueFromUser = prompt("Write some a number");

// console.log(Number.parseInt(valueFromUser));

//? Даний рядок '24px', дістаньте з цього рядка ціле число.

//? Даний рядок '25.5%', дістаньте з цього рядка дробове число.

//? Спробуйте привести до числа рядок 'abc'.

/*
 * Math.floor, Math.ceil, Math.round, Math.max, Math.min, Math.pow(), Math.random().
 */

// const num = 3;

// const randomNumber = Math.random() * 256;

// console.log(Math.round(randomNumber));

// 20, 30, 40, 50, 60, 3242, 123, 213

/*
  ? Дане число 23.5, застосуйте до нього різноманітні методи заокруглення.
  ? Протестуйте на числах, 23.3, 23.9
*/
/*
  ? Попросіть користувача ввести число та ступінь.
  ? Зведіть число до ступеня і виведіть результат у консоль.
*/

// const num = prompt("Write a number");
// const step = prompt("Write a step");

// console.log(Math.pow(num, step));

/*
  ? Згенеруйте рандомне число:
  ? от 0 до 1;
  ? от 10 до 50.
*/

// const random = (Math.random() + 10) * 5;

// console.log(random);

// console.log((Math.random() + 10) * 50);

//? Згенеруйте рандомне число. Мінімальне та максимально значення, потрібно отримати від користувача
