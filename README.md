정규표현식
1. +는 \d(숫자)또는 \D(문자)에 해당하는 1개 이상의 것들을 구분
2. 마지막 g는 문자열 전체에서 전역적으로 대문자 또는 소문자가 완벽하게 일치하는 것들 <-> gi는 대소문자 구별 없이
3. 시작부분의 ^는 문자열의 시작이 일치하는 것 <-> 끝부분의 $는 문자열의 끝이 일치하는 것

Ex 1)
let a = '123ABC456DEF'; 
let result = a.match(/(\d+|\D+)/g);
console.log(result); //['123', 'ABC', '456', 'DEF'];

Ex 2) 
let a = '123ABC456DEF'; 
let result = a.match(/(\d|\D)/g);
console.log(result); //['1', '2', '3', 'A','B', 'C', '4', '5','6', 'D', 'E', 'F']

Ex 3)
let a = '123ABC456DEF'; 
let result = a.match(/^\d+/g);
console.log(result); // [ '123' ]

Ex 4)
let a = '123ABC456DEF'; 
let result = a.match(/\D+$/g);
console.log(result); // [ 'DEF' ]
