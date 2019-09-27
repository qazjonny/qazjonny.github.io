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
let mapResults = new Map();
let totalCount = 29;
let resultRandomEat = document.getElementById("result_random_eat");
resultRandomEat.textContent = "这是计算结果(共" + totalCount + "次)";

document.getElementById("btn_random_eat").onclick = function () {
    if (totalCount <= 0) return
    --totalCount;
    let randomEats = ["柴火鸡", "烤肉", "随便"];
    let num = randomNum(0, randomEats.length - 1);
    let name = randomEats[num];

    let count = parseInt(mapResults.get(name));
    if (isNaN(count)) count = 0;
    mapResults.set(name, count + 1);

    let showResults = "(还剩" + totalCount + "次)结果 :  ";
    for (let entry of mapResults) {
        showResults += entry + " ---- ";
    }
    resultRandomEat.textContent = showResults;
};

function testAddition(num1, num2) {
    return parseInt(num1) + parseInt(num2);
}

function testSubtraction(num1, num2) {
    return parseInt(num1) - parseInt(num2);
}


//生成从minNum到maxNum的随机数
function randomNum(minNum, maxNum) {
    switch (arguments.length) {
        case 1:
            return parseInt(Math.random() * minNum + 1, 10);
            break;
        case 2:
            return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
            break;
        default:
            return 0;
            break;
    }
}
