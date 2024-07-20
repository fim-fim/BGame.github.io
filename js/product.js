const guests = (guestNumber) => {
    let guestMember = ['guestOne','guestTwo','heist']
    guestNumber = guestMember[Math.floor(Math.random()*guestMember.length)]
    document.getElementById(guestNumber).style.display = 'block';
    if (guestNumber == 'heist'){
        document.getElementById('gunBt').style.display = 'block';
    }
}
document.getElementById('onigiriSell').addEventListener('click',()=>{
    guests();
    document.getElementById('price').value = '200';
})
document.getElementById('obentouSell').addEventListener('click',()=>{
    guests();
    document.getElementById('price').value = '300';
})
document.getElementById('okasiSell').addEventListener('click',()=>{
    guests();
    document.getElementById('price').value = '350';
})
document.getElementById('burakiSell').addEventListener('click',()=>{
    guests();
    document.getElementById('price').value = '4000';
})
