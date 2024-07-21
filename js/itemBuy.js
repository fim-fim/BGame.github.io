var onigiriStocks = 0;
var obentouStocks = 0;
var okasiStocks = 0;
var burakiStocks = 0;
document.getElementById('onigiribuy').addEventListener('click',()=>{
    onigiriStocks ++;
    money -= 200;
    document.getElementById('onigiriStock').textContent=onigiriStocks;
});
document.getElementById('obentoubuy').addEventListener('click',()=>{
    obentouStocks ++;
    money -=200;
});
document.getElementById('okasibuy').addEventListener('click',()=>{
    
});
document.getElementById('burakibuy').addEventListener('click',()=>{
    
});