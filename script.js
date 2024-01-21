//part 1

let user = {};
user.name = prompt("Enter your name");
user.age = prompt("Enter your age");
user.sex = prompt("Enter you sex");
console.log(user);

//part 2

let number = prompt("Enter the number:");

let userNumber = parseFloat(number);

if (!isNaN(userNumber) && number !== null) {
    alert(userNumber);
} else {
    alert("Вы ввели некорректное значение или отменили ввод.");
}

//part 3

let a = +prompt('a?', '');
console.log(a) // string
a = +a
console.log(a) // number


switch(a){
case 0:
  alert(0);
  break;
case 1:
  alert(1);
  break;
case 2:
case 3:
  alert('2,3');
  break;
}

//part 4

let evenSum = 0;
for(let i = 1; i <=100; i++){
    if(i%2==0){
        evenSum += i;
    }
}

console.log(evenSum);


let i = 0;
  while(i<3){
    alert( `number ${i}!` )
    i++;
  }