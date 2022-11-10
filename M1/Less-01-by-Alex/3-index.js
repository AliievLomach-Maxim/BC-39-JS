"use strict";
//https://marketplace.visualstudio.com/items?itemName=meganrogge.template-string-converter

/*
 * Конкатенація рядків, шаблонні рядки
 */

// const num = 5;
// const str = "123";

// console.log(`5`);
// console.log(`${5}`);
// console.log(`${num}`);

// const name = "Vasya";
// const age = 23;
// const coef = 0.6;

// const result = `Hello, ${name}, ${name} has age - ${Math.round(age * coef)}`;

// console.log(result);

// console.log(
//   "Hello, " + name + ", " + name + " has age - " + Math.round(age * coef)
// );

// console.log((123.3124123123).toFixed(3));

/*
  ? Запросіть у користувача ім'я з віком та виведіть у консоль повідомлення:
  ? Hello ім'я_користувача, your age is вік_користувача.
*/

// const name = prompt("Write your name");
// const age = prompt("Write your age");
// const result = `Hello ${name}, your age is ${age}`;

// console.log(result);
/*
 * Властивості та методи рядків
 */

/*
  ? Є рядок 'HTML, CSS, JS, PHP, React, Vue, Node.js, C, C++'.
  ? Дізнайтеся, чи є в цьому рядку мова: 'JS'?.
  ? Дізнайтесь позицію на якій перебуває цей підрядок
*/

// includes

// includes - look for our value, and return true or false
// index of - do the the same but return only index
// slice - return a part of str, start - end
// endsWith - check our string in end

// const str = "HTML, CSS, JS, PHP, React, Vue, Node.js, C, C++";
// const index = str.toLowerCase().indexOf("js");

// console.log(str.slice(index, index + 2));

// console.log(result);

//? У нас є рядок '24px', дізнайтеся на що закінчується цей рядок, на %, rem, em або px;

// const str = "24px%";

// console.log(str.endsWith("px"));

// ? У нас є рядок '23,4', замініть кому на крапку

// const str = "23,4,  ";

// const result = str.replace(",", ".");

// console.log(result);

//? У нас є рядок 'styles.css, about.css, portfolio.css', замініть .css на .min.css

// const str = "styles.css, about.css, portfolio.css";

// const result = str.replaceAll(".css", ".min.css");

// console.log(result);

/*
  ? У нас є рядок:
  ? 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?'.
  ? Замініть усі входження dog на monkey.
*/

// const str = `  ? У нас є рядок:
// ? 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?'.
// ? Замініть усі входження dog на monkey.`;

// const result = str.replaceAll("?", "").replaceAll("'", "").trim();

// console.log(str);
// console.log(result);

/*
  ? Даний рядок'Vasyl Pupkin is 24 years old'.
  ? Скопіюйте з цього рядка окремо ім'я з прізвищем та окремо вік.
*/

// const fullName = prompt("Write your full name");
// const age = prompt("Write your age");
// const result = `${fullName} is ${age} years old`;

// console.log(result);

// const sliceName = result.slice(0, result.indexOf("is") - 1);

// const sliceAge = result.slice(
//   result.indexOf("is") + 2,
//   result.indexOf("years")
// );

// console.log(sliceName, sliceAge);
