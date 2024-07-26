const guests = (guestNumber) => {
    let guestMember = ['guestOne','guestTwo','heist','other']
    guestNumber = guestMember[Math.floor(Math.random()*guestMember.length)]
    if(guestNumber == 'other') {
        document.getElementById('guestOne').style.display = 'block';
    }
    document.getElementById(guestNumber).style.display = 'block';
    if (guestNumber == 'heist'){
        document.getElementById('gunBt').style.display = 'block';
        document.getElementById('price').value = '';
        var goutouSe = document.getElementById('goutouSe');
        goutouSe.play();
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
