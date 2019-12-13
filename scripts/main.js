let mapResults = new Map();
let totalCount = 29;
let resultRandomEat = document.getElementById("result_random_done");
resultRandomEat.textContent = "这是结果(共" + totalCount + "次)";

document.getElementById("btn_random_done").onclick = function () {
    if (totalCount <= 0) return;
    --totalCount;
    let randomEats = ["去", "不去"];
    let num = randomNum(0, randomEats.length - 1);
    let name = randomEats[num];

    let count = parseInt(mapResults.get(name));
    if (isNaN(count)) count = 0;
    mapResults.set(name, count + 1);

    let showResults = "(还剩" + totalCount + "次)结果 :  ";
    for (let entry of mapResults) {
        showResults += entry + "           ";
    }
    resultRandomEat.textContent = showResults;
};


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
