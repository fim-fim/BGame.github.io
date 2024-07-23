let money = 0;
var moneyData = document.getElementById('money');
const moneyUpdata = () =>{
    moneyData.textContent = "$"+money;
}
setInterval(moneyUpdata,500);
const minusMoney = ()=> {
    if(money < 0) {
        document.getElementById('minus').play();
    }
}
setInterval(minusMoney,500);