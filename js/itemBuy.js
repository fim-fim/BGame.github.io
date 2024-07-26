var onigiriStocks = 10;
var obentouStocks = 10;
var okasiStocks = 5;
document.getElementById('onigiriStock').textContent = onigiriStocks;
document.getElementById('obentouStock').textContent = obentouStocks;
document.getElementById('okasiStock').textContent = okasiStocks;
document.getElementById('onigiribuy').addEventListener('click',()=>{
    onigiriStocks ++;
    money -= 200;
    document.getElementById('onigiriStock').textContent = onigiriStocks;
    if(onigiriStocks > 0) {
        document.getElementById('onigiriSell').style.display = 'block';
        document.getElementById('onigirimuri').style.display = 'none';
    }
    if (money < 0) {
        onigiriStocks -= 1;
        money += 200;
        document.getElementById('onigiriStock').textContent = onigiriStocks;
        document.getElementById('reportText').textContent = 'お金が足らないまたはエラーが発生しています';
    }
});
document.getElementById('obentoubuy').addEventListener('click',()=>{
    obentouStocks ++;
    money -= 300;
    document.getElementById('obentouStock').textContent = obentouStocks;
    if (money < 0) {
        obentouStocks -= 1;
        money += 300;
        document.getElementById('obentouStock').textContent = onigiriStocks;
        document.getElementById('reportText').textContent = 'お金が足らないまたはエラーが発生しています';
    }
});
document.getElementById('okasibuy').addEventListener('click',()=>{
    okasiStocks ++;
    money -= 350
    document.getElementById('okasiStock').textContent = okasiStocks;
    if (money < 0) {
        okasiStocks -= 1;
        money += 350;
        document.getElementById('okasiStock').textContent = onigiriStocks;
        document.getElementById('reportText').textContent = 'お金が足らないまたはエラーが発生しています';
    }
});
