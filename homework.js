console.log('number' + 3 + 3);// number33 - concantination
console.log(null + 3);// 3 - addition

console.log(5 && "qwerty");// qwerty - logical AND last tru was returned

console.log(+'40' + +'2' + "hillel"); // 42hillel - type convertion, addition, concantination

console.log('10' - 5 === 6);// false - 5 not equal 6

console.log(true + false); //1 - true = 1, false = 0, 1+0=1 

console.log('4px' - 3);// Nan - can't convert '4px' string into number

console.log('4' - 3); // 1 - '4' converted to number 4

console.log('6' + 3 ** 0);// 61 - power operation first = 1 then concatinatuion '6' and 1

console.log(12 / '6');// 2 - '6' was converted into number

console.log('10' + (5 === 6)); // false - concatination string plus boolean false

console.log(null == ''); // false  - null - no value, empty string - value

console.log(3 ** (9 / 3)); // 27 - math operation

console.log(!!'false' == !!'true'); // true - !! before string = true 

console.log(0 || '0' && 1); // 1 - last true is result 

console.log((+null == false) < 1); // false - +null = 0, 0 is false, 0 is equal 0 which is true, true is > =1, then false

console.log(false && true || true); // true - logical OR gives true if one of parts is true

console.log(false && (false || true)); // false - logical AND gives false if one of parts is false

console.log((+null == false) < 1 ** 5); //false - becouse (+null = 0, 0==false - it's true, true=1), 1 is not less than 1