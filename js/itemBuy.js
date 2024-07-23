var onigiriStocks = 10;
var obentouStocks = 10;
var okasiStocks = 5;
var burakiStocks = 0;
document.getElementById('onigiriStock').textContent = onigiriStocks;
document.getElementById('obentouStock').textContent = obentouStocks;
document.getElementById('okasiStock').textContent = okasiStocks;
document.getElementById('burakiStock').textContent = burakiStocks;
document.getElementById('onigiribuy').addEventListener('click',()=>{
    onigiriStocks ++;
    money -= 200;
    document.getElementById('onigiriStock').textContent = onigiriStocks;
});
document.getElementById('obentoubuy').addEventListener('click',()=>{
    obentouStocks ++;
    money -= 300;
    document.getElementById('obentouStock').textContent = obentouStocks;
});
document.getElementById('okasibuy').addEventListener('click',()=>{
    okasiStocks ++;
    money -= 350
    document.getElementById('okasiStock').textContent = okasiStocks;
});
document.getElementById('burakibuy').addEventListener('click',()=>{
    burakiStocks ++;
    money -= 4000;
    document.getElementById('burakiStock').textContent = burakiStocks;
});