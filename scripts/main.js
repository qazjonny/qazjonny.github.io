let myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

document.getElementById("btn_addition").onclick = function () {
    let num1 = document.getElementById("input_num1").value;
    let num2 = document.getElementById("input_num2").value;
    let result = testAddition(num1, num2);
    let resultElement = document.getElementById("result");
    if (isNaN(result)) {
        resultElement.textContent = "结果为空，请重新输入";
    } else {
        resultElement.textContent = result;
    }
};

document.getElementById("btn_subtraction").onclick = function () {
    let num1 = document.getElementById("input_num1").value;
    let num2 = document.getElementById("input_num2").value;
    let result = testSubtraction(num1, num2);
    let resultElement = document.getElementById("result");
    if (isNaN(result)) {
        resultElement.textContent = "结果为空，请重新输入";
    } else {
        resultElement.textContent = result;
    }
};

function testAddition(num1, num2) {
    return parseInt(num1) + parseInt(num2);
}

function testSubtraction(num1, num2) {
    return parseInt(num1) - parseInt(num2);
}