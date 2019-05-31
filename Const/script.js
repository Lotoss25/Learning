// var foo = 44;
// foo.a = 77;
// console.log(foo.a);
// console.log(foo.b);

//"use strict";
//Стандартно свойства констант-обьектов ( const d = {}; ) можно изменять, что бы этого не случилось - есть Object.freeze, он замораживает значение.
const d = Object.freeze({ "d": 33 });
console.log(d.d);

d.d = 5; // при "use strict" выбьет ошибку

console.log(d.d);


