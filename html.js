var moneyData = document.getElementById('money');
let money=0;
const moneyUpdata = () =>{
    moneyData.textContent = "$"+money;
}
const guests = (guestNumber) => {
    let guestMember = ['guestOne','guestTwo','heist']
    guestNumber = guestMember[Math.floor(Math.random()*guestMember.length)]
    document.getElementById(guestNumber).style.display = 'block';
    if (guestNumber == 'heist'){
        document.getElementById('gunBt').style.display = 'block';
    }
}
const Guestreturn = (guestId)=> {
    document.getElementById(guestId).style.display = 'none';
}
setInterval(3000,()=>{
    document.getElementById('guest').style.display = 'block';
});
const guest = () => {
    setInterval(3000,()=>{
        document.getElementById('guest').style.display = 'block';
    });
}
guest();
setInterval(moneyUpdata,500);
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
document.getElementById('priceBt').addEventListener('click',()=>{
    buyPrice(200,"おにぎり");
    buyPrice(300,"お弁当");
    buyPrice(350,"おかし");
    buyPrice(4000,"ぶらっきーのつの");
    Guestreturn('guestOne');
    Guestreturn('guestTwo');
})
document.getElementById('backGuest').addEventListener('click',()=>{
    Guestreturn('guestOne');
    Guestreturn('guestTwo');
})
