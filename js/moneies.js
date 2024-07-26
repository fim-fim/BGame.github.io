let money = 0;
var moneyData = document.getElementById('money');
const updata = () =>{
    moneyData.textContent = "$"+money;
    if(money < 0) {
        document.getElementById('minus').play();
    }
    
}
setInterval(updata,500);