var moneyData = document.getElementById('money');
let money=0;
const moneyUpdata = () =>{
    moneyData.textContent = "$"+money;
}
setInterval(moneyUpdata,500);


