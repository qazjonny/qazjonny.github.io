let mapResults = new Map();
let totalCount = 99;
let resultRandomEat = document.getElementById("result_random_done");
let resultBanker = document.getElementById("result_random_bet_banker");
let resultPlayer = document.getElementById("result_random_bet_player");
let betContent;

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

document.getElementById("btn_random_bet_done").onclick = function () {
    if(betContent == null){
        alert("请下注哦");
        return
    }
    resultBanker.textContent = "";
    resultPlayer.textContent = "";
    let randomBets = ["庄", "闲"];
    let num = randomNum(0, randomBets.length - 1);
    let name = randomBets[num];
    if (name === "庄") {
        if (name === betContent) {
            resultBanker.textContent = "庄  恭喜您赢了";
        }else {
            resultBanker.textContent = "庄  哈哈，输的好惨呀😭";
        }
    } else {
        if (name === betContent) {
            resultBanker.textContent = "闲  恭喜您赢了";
        }else {
            resultBanker.textContent = "闲  哈哈，输的真惨呀😭";
        }
    }
    betContent = null;
};

document.getElementById("btn_random_bet_banker").onclick = function () {
    betContent = "庄";
};
document.getElementById("btn_random_bet_player").onclick = function () {
    betContent = "闲";
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
