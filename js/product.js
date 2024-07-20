const guests = (guestNumber) => {
    let guestMember = ['guestOne','guestTwo','heist']
    guestNumber = guestMember[Math.floor(Math.random()*guestMember.length)]
    document.getElementById(guestNumber).style.display = 'block';
    if (guestNumber == 'heist'){
        document.getElementById('gunBt').style.display = 'block';
        document.getElementById('price').value = '';
    }
    document.getElementById('price').type = 'number';
}
document.getElementById('onigiriSell').addEventListener('click',()=>{
    document.getElementById('price').value = '200';
    guests();
})
document.getElementById('obentouSell').addEventListener('click',()=>{
    document.getElementById('price').value = '300';
    guests();
})
document.getElementById('okasiSell').addEventListener('click',()=>{
    document.getElementById('price').value = '350';
    guests();
})
document.getElementById('burakiSell').addEventListener('click',()=>{
    document.getElementById('price').value = '4000';
    guests();
})
