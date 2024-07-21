const buyPrice = (itemPrice,item) => {
    var price = document.getElementById('price');
    if(price.value == itemPrice) {
        document.getElementById('reportText').textContent = item+'を売りました。money：+' + itemPrice;
        money += itemPrice;
    } 
}
document.getElementById('priceBt').addEventListener('click',()=>{
    buyPrice(200,"おにぎり");
    buyPrice(300,"お弁当");
    buyPrice(350,"おかし");
    buyPrice(4000,"ぶらっきーのつの");
    document.getElementById('price').type='text';
    document.getElementById('price').value = '';
})