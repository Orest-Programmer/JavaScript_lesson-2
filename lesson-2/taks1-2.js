"use stric"

let user ={};
user.name = 'Pilip';
user.user = 'Shevchenko';
console.log(user.name);
user.name = 'Sergio';
console.log(user.name + "\n-------------------\n");

let employeeSalaries ={
};
let total = 0;
for(let key in employeeSalaries){
    total += employeeSalaries[key];
}
console.log("Before---> Object is empty and return " + total + '\n-----------------------------');

employeeSalaries ={
    Orest : 250,
    Oleg : 300,
    Den : 130
};

for(let key in employeeSalaries){
    total += employeeSalaries[key];
}
console.log("After---> Object is not empty and return total = " + total);

