var gunBt = document.getElementById('gunBt');
var gun = document.getElementById('gun');
var GoutouSound = document.getElementById('goutouSe-kill');
const gunOpenClose = ()=>{
    gun.style.display = 'block';
    GoutouSound.play();
    const gunClose = ()=>{
        gun.style.display = 'none';
    }
    setTimeout(gunClose,2000);
    money += 1000;
    document.getElementById('heist').style.display = 'none';
    document.getElementById('gunBt').style.display = 'none';
}
gunBt.addEventListener("click",gunOpenClose);
const buyPrice = (itemPrice,item) => {
    var price = document.getElementById('price');
    if(price.value == itemPrice) {
        alert(item+"を売った");
        money += itemPrice;
    } 
}