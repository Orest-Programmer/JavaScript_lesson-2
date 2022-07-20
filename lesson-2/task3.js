"use stric"
function alert(message) {
    console.log(message);
}
let addition = 0;
function calc(num1, num2) {
     addition = num1 + num2;
    alert(`num1 + num2 = ${addition}`);

     addition = num1 - num2;
    alert(`num1 - num2 = ${addition}`);
   
     addition = num1 * num2;
    alert(`num1 * num2 = ${addition}`);


     addition = num1 / num2;
    alert(`num1 / num2 = ${addition}`);


}

try {
    let num1 = 9; // 'e', '9', -9 etc. ---> Will be error!
    let num2 = 2;
    if (num1 <= 0 || num2 <= 0) {
        throw new Error("Operation '/' can not work with number 0 or < 0!");
    }else if(typeof num2 != "number" || typeof num1 != "number"){
        throw new Error("num1 or num2 is not number!");
    } else {
        calc(num1, num2);
    }
} catch (err) {
    alert("Error happend ---> " + err);
} finally {
    alert("Function was finished!");
}