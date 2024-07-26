var price = document.getElementById('price');
const buyPrice = (itemPrice,item) => {
    if(price.value == itemPrice) {
        document.getElementById('reportText').textContent = item+'を売りました。money：+' + itemPrice;
        money += itemPrice;
        if(item == 'おにぎり') {
            onigiriStocks --;
            document.getElementById('onigiriStock').textContent = onigiriStocks;
            if(onigiriStocks==0) {
                document.getElementById('onigiriSell').style.display = 'none';
                document.getElementById('onigirimuri').style.display = 'block';
            }
        } else if(item == 'お弁当') {
            obentouStocks --;
            document.getElementById('obentouStock').textContent = obentouStocks;
            if(obentouStocks == 0) {
                document.getElementById('obentouSell').style.display = 'none';
                document.getElementById('obentoumuri').style.display = 'block';
            }
        } else if(item == 'おかし') {
            okasiStocks --;
            document.getElementById('okasiStock').textContent = okasiStocks;
            if(okasiStocks == 0) {
                document.getElementById('okasiSell').style.display = 'none';
                document.getElementById('okasimuri').style.display = 'block';
            }
        } else {
            document.getElementById('reportText').textContent = 'あなたは何を売っているんですか・・・？';
            document.getElementById('burakiStock').textContent = burakiStocks;
        }
    } 
}
document.getElementById('priceBt').addEventListener('click',()=>{
    buyPrice(200,"おにぎり");
    buyPrice(300,"お弁当");
    buyPrice(350,"おかし");
    price.type='text';
    price.value = '';
})